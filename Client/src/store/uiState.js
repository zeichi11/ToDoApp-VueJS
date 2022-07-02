/**
 * vuex의 store는 특정 범주에서만 store가 활용될 수 있도록 namespace를 설정할 수 있다.
 * 이런한 namespace는 vuex의 모듈 단위로 지원하며 해당 모듈에 namespaced: ture 라는 속성으로 설정 가능하다.
 * 모듈 형태로 추가된 store에 namespaced 속성 설정이 없는 경우 해당 store 모듈은 전역 범주로 설정되니 주의.
 */
export default {
  namespaced: true,
  // Data
  // state는 vue의 data와 동일하게 함수로 정의되어야 한다.
  // 함수로 정의되는 이유 : 객체로 선언 시 실제 data를 사용하는 상황에서 참조관계가 발생함
  // 함수로 정의하고 객체 리터럴을 생성하여 반환하여 참조관계 발생을 방지하기 위함

  state: () => ({
    formTargetId: ''
  }),
  // Computed
  getters: {
    isListFormActivated (state, listId) {
      console.log('-------------------------')
      console.log(state.formTargetId, listId)
      return state.formTargetId === listId
    }
  },
  // Methods
  // 실제 값을 변경할 때 (비동기 처리 안됨)
  // state의 값을 변경할 수 있는 권한은 mutations 에만 있으며
  // actions에서 실제 값을 변경해야 하는 경우 mutations 에 변경 로직을 추가하고 관리해야한다.
  mutations: {
    updateFormTargetId (state, listId) {
      console.log(listId)
      console.log(state.formTargetId)
      if (state.formTargetId !== listId) {
        console.log('111')
        state.formTargetId = listId
        console.log(state.formTargetId)
      }
    },

    resetFormTargetId (state) {
      state.formTargetId = ''
    }
  },
  // Methods
  // 일반 로직 (비동기 처리 가능)
  // strict 모드에서는 actions 내에서 실제 값을 변경할 수 없으므로
  // mutations을 활용하여 업데이트 한다.
  // actions 안의 메소드들은 다른 속성(mutations, getters)들과 다르게 첫번째 인자로
  // 현재 store의 context를 전달 받는다.
  // context.state : 현재 store의 state에 접근 가능한 속성
  // context.commit : store 값의 변경을 위해 mutations 메소드를 호출하기 위한 속성
  // context.dispatch : 현재 store의 actions 내 메소드를 호출하기 위한 속성
  actions: {
    updateFormTargetId(context, listId) {
      const { commit } = context
      if (listId && listId.length) {
        commit('updateFormTargetId', listId)
      }
    },

    resetFormTargetd(context) {
      const { commit } = context
      commit('resetFormTargetId')
    }
  }
}
