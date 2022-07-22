<style lang="scss">
  @import "../scss/boardStyle";
</style>

<template>
  <div class="board__wrapper">
    <nav class="board__navigator"></nav>
    <div class="board__container">
      <div class="board__top-menu"></div>
      <sidebar
        :uiData="UI_STRUCT.SIDEBAR"
      />
      <main-container
        :todoLists="todoLists"
      />
    </div>
  </div>
</template>

<script>
// import { mapState, mapGetters, mapMutations, madd-list__showapActions } from 'vuex' // store의 state와 getters의 바인딩을 지원하는 helpers
// import TodoCreator from 'componentPath/Creator.vue'
// import TodoItem from 'componentPath/Item.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Sidebar from 'layoutPath/Sidebar'
import MainContainer from 'layoutPath/MainContainer'
import { RESOURCES, DEFAULTS, CSS_NAME, CSS_ID } from 'commonPath/Constants.js'
import { UI_STRUCT } from 'dataPath/UiMetadata.js'

export default {
  components: {
    Sidebar,
    MainContainer
  },

  data () {
    return {
      addItemListId: ''
    }
  },

  computed: {
    // Helpers - mapState
    // computed 객체에 store의 state를 바인딩한다. (this 객체로 store의 data를 접근하기 위한 방법)
    // 첫번째 인자 : namespace(없는 경우 생략-두번째 인자만 전달), 두번째 인자 : 바인딩 타겟 data 리스트
    ...mapState('board', [
      'todoLists'
    ]),
    // Helpers - mapGetters
    // computed 객체에 store의 getters를 바인딩한다. (this 객체로 store의 getters 메소드를 접근하기 위한 방법)
    // 첫번째 인자 : namespace(없는 경우 생략-두번째 인자만 전달), 두번째 인자 : 바인딩 타겟 data 리스트
    ...mapGetters('board', [
      // getter
    ])
  },

  methods: {
    UI_STRUCT: function () {
      return UI_STRUCT
    }
  }
}
</script>
