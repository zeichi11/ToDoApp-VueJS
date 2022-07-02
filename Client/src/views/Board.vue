<style lang="scss">
  @import "../scss/boardStyle";
</style>

<template>
  <div class="board__wrapper">
    <nav class="board__navigator"></nav>
    <div class="board__top-menu"></div>
    <div class="board__container">
      <sidebar />
      <main class="board__main-container"
        @mouseup="resetSidebar"
      >
        
        <div class="board__todo-container">
          <div class="todo__section">
            <ul class="todo__list-wrapper">
              
              <todo-list-iterator
                :todoLists="todoLists"
              />

              <li class="todo__list-inner">
                <div class="list-container todo__add-list">

                  <ul class="todo__add-list-cotainer">
                    <li class="todo__add-list add-list__show">
                      <div class="add-list__show-btn"
                        @mouseup="showAddListForm"
                      >
                        <span> + Add another list</span>
                        <span></span>
                      </div>
                    </li>
                    
                    <li class="todo__add-list add-list__form hide">
                      <list-creator
                        :formType="'list'"
                        :handleMouseUp="showAddListForm"
                      />
                    </li>
                  </ul>


                </div>
              </li>
            </ul>
          </div>
        </div>

      </main>
      
    </div>
    
  </div>
</template>

<script>
// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex' // store의 state와 getters의 바인딩을 지원하는 helpers
// import TodoCreator from 'componentPath/Creator.vue'
// import TodoItem from 'componentPath/Item.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Sidebar from 'componentPath/Sidebar'
import TodoListIterator from 'componentPath/todos/TodoListIterator'
import ListCreator from 'componentPath/todos/Creator'
import { RESOURCES, DEFAULTS, CSS_NAME, CSS_ID } from 'commonPath/Constants.js'

export default {
  components: {
    TodoListIterator,
    Sidebar,
    ListCreator
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
    ]),
  },

  methods: {
    setAddItemListId (listId) {
      this.addItemListId = listId
    },




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
    },

    // TODO add item, add list form 중복되는 코드 많으니 append로 처리할 것
    showAddItemForm ({target}) {
      



      // this.resetAddItemMenu()

      // const IS_BTN = !!target.closest(`.${CSS_NAME.ADD_ITEM_SHOW_BTN}`)
      // const PARENT_TARGET = target.closest(`.${CSS_NAME.LIST_CONTAINER}`)

      // if (!IS_BTN || PARENT_TARGET === null) return

      // const btn = PARENT_TARGET.querySelector(`.${CSS_NAME.ADD_ITEM_SHOW_BTN}`)
      // const form = PARENT_TARGET.querySelector(`.${CSS_NAME.ADD_ITEM_FORM}`)
      // const addFormLayout = document.querySelector(`#${CSS_ID.ADD_ITEM_FORM_WRAPPER}`)
      
      // if (btn && form && addFormLayout) {
      //   const textArea = addFormLayout.querySelector(`.${CSS_NAME.ADD_ITEM_TEXTAREA}`)
      //   textArea && textArea.focus()

      //   form.appendChild(addFormLayout)

      //   form.classList.remove('hide')
      //   btn.classList.add('hide')
      // }
    },

    showAddListForm (e) {
      const PARENT_TARGET = e.target.closest(`.${CSS_NAME.LIST_CONTAINER}`)
      if (PARENT_TARGET === null) return
      
      const btn = PARENT_TARGET.querySelector(`.${CSS_NAME.ADD_LIST_SHOW_BTN}`)
      const form = PARENT_TARGET.querySelector(`.${CSS_NAME.ADD_LIST_FORM}`)
      
      if (btn && form) {
        const targetElement = PARENT_TARGET.querySelector(`.${CSS_NAME.ADD_LIST_INPUT}`)

        if (btn.classList.contains('hide')) {
          // textArea?[0].value = ''; Vetur 오류 발생함 원인 확인 필요
          if (targetElement) {
            targetElement.value = ''
          }
          form.classList.add('hide')
          btn.classList.remove('hide')
        
        } else {
          if (targetElement) {
            targetElement.focus()
          }
          form.classList.remove('hide')
          btn.classList.add('hide')
        }
      }
    }
  }
}
</script>
