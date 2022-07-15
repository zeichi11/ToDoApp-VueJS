<style lang="scss">
  @import "../scss/boardStyle";
</style>

<template>
  <main
    class="board__main-container"
    @mouseup="resetSidebar"
  >
    <div class="board__todo-container">
      <div class="todo__section">
        <ul class="todo__list-wrapper">
          <todo-list-iterator
            :todo-lists="todoLists"
          />
          <li class="todo__list-inner">
            <div class="list-container todo__add-list">
              <todo-list-add-form
                :form-type="'list'"
                :list-id="'new'"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
// import { mapState, mapGetters, mapMutations, madd-list__showapActions } from 'vuex' // store의 state와 getters의 바인딩을 지원하는 helpers
// import TodoCreator from 'componentPath/Creator.vue'
// import TodoItem from 'componentPath/Item.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import TodoListIterator from 'featurePath/todos/components/TodoListIterator'
import TodoListAddForm from 'featurePath/todos/components/AddForm'
import { RESOURCES, DEFAULTS, CSS_NAME, CSS_ID } from 'commonPath/Constants.js'

export default {
  components: {
    TodoListIterator,
    TodoListAddForm
  },
  props: {
    todoLists: Array
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
    resetSidebar (e) {
      const sidebar = document.querySelector('.board__sidebar')
      if (sidebar && !sidebar.classList.contains('sidebar-close')) {
        const iconWrap = sidebar.querySelector('.icon-wrap')
        const event = new Event('mouseup')
        iconWrap.dispatchEvent(event)
      }
    },

    resetAddItemMenu () {
      const allBtn = document.querySelectorAll(`.${CSS_NAME.ADD_ITEM_SHOW_BTN}`)
      allBtn.forEach(el => { el.classList.remove('hide') })

      const allForm = document.querySelectorAll(`.${CSS_NAME.ADD_ITEM_FORM}`)
      allForm.forEach(el => { el.classList.add('hide') })

      const textArea = document.querySelector(`.${CSS_NAME.ADD_ITEM_EDITOR}`)
      textArea && (textArea.value = '')
    }
  }
}
</script>
