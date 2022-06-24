<template>
  <div class="board__wrapper">
    <div class="board__navigator"></div>
    <div class="board__top-menu"></div>
    <div class="board__container">
      <section class="side-bar__section"></section>
      
      <section class="todo__section">
        <ul class="todo__list-wrapper">
          
          <li class="todo__list-inner">
            
            <div class="todo__list">
              <ul>
                <li class="todo__item">
                  <div></div>
                </li>
              </ul>
            </div>
            
            <div class="todo__list">
              <ul>
                <li class="todo__item">
                  <div></div>
                </li>
              </ul>
            </div>
            
            <div class="todo__list">
              <ul>
                <li class="todo__item">
                  <div></div>
                </li>
              </ul>
            </div>
          
          </li>
        </ul>
      </section>
      
    </div>
    
  </div>
</template>

<script>
// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex' // store의 state와 getters의 바인딩을 지원하는 helpers
// import TodoCreator from 'componentPath/Creator.vue'
// import TodoItem from 'componentPath/Item.vue'
// import { RESOURCES, DEFAULTS } from 'commonPath/Constants.js'

export default {
  // components: {
  //   TodoCreator,
  //   TodoItem
  // },

  data () {
    return {
      
    }
  },

  // computed: {
  //   // Helpers - mapState
  //   // computed 객체에 store의 state를 바인딩한다. (this 객체로 store의 data를 접근하기 위한 방법)
  //   // 첫번째 인자 : namespace(없는 경우 생략-두번째 인자만 전달), 두번째 인자 : 바인딩 타겟 data 리스트
  //   ...mapState('todoApp', [
  //     'todos'
  //   ]),
  //   // Helpers - mapGetters
  //   // computed 객체에 store의 getters를 바인딩한다. (this 객체로 store의 getters 메소드를 접근하기 위한 방법)
  //   // 첫번째 인자 : namespace(없는 경우 생략-두번째 인자만 전달), 두번째 인자 : 바인딩 타겟 data 리스트
  //   ...mapGetters('todoApp', [
  //     'totalCount',
  //     'activeCount',
  //     'completedCount',
  //     'filteredTodos'
  //   ]),
  //   RESOURCES () {
  //     return RESOURCES
  //   },
  //   DEFAULTS () {
  //     return DEFAULTS
  //   },
  //   // ** store의 data를 this 객체로 접근하기 위한 방법 **
  //   // todos () {
  //   //   return this.$store.state.todoApp.todos;
  //   // },
  //   allDone: {
  //     get () {
  //       // 전체 아이템 수와 완료된 아이템 수가 같은 경우 모두 완료되었다고 판단한다.
  //       return this.totalCount > 0 && this.totalCount === this.completedCount
  //     },
  //     set (checked) {
  //       this.completeAll(checked)
  //     }
  //   }
  // },

  // methods: {
  //   // Helpers - mapActions
  //   // methods 객체에 store의 actions를 바인딩한다. (this 객체로 store의 actions를 접근하기 위한 방법)
  //   // 첫번째 인자 : namespace(없는 경우 생략-두번째 인자만 전달), 두번째 인자 : 바인딩 타겟 data 리스트
  //   ...mapActions('board', [
  //     'initBoard',
  //     'completeAll',
  //     'clearComplete'
  //   ]),
  //   // Helpers - mapMutations
  //   // methods 객체에 store의 mutations를 바인딩한다. (this 객체로 store의 mutations를 접근하기 위한 방법)
  //   // 첫번째 인자 : namespace(없는 경우 생략-두번째 인자만 전달), 두번째 인자 : 바인딩 타겟 data 리스트
  //   ...mapMutations('board', [
  //     'updateFilter'
  //   ]),

  //   /**
  //    * set filter type
  //    * @param {string} filter
  //    */
  //   changeFilter (filter) {
  //     this.filter = filter
  //   }
  // },
  // // 특정 정보가 업데이트 시 실행되는 함수 그룹
  // watch: {
  //   // this.$route에 대한 watch 메소드
  //   $route () {
  //     // this.$store.commit('todoApp/updateFilter', this.$route.params.id);
  //     this.updateFilter(this.$route.params.id) // mapMutations
  //   }
  // },

  // /* ***** handle Life cycle ***** */

  // created () {
  //   this.initBoard()
  // },
}
</script>

<style lang="scss">
  @import "../scss/style";

  .filters button.router-link-active {
    background: royalblue;
    color: white;
  }
</style>
