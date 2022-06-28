<style lang="scss">
  // .filters button.router-link-active {
  //   background: royalblue;
  //   color: white;
  // }
  body {
    height: 100vh;
    min-height: 100vh;
  }
  .wrapper {
    height: 100%;
    width: 100%;
  }
  .board__wrapper {
    width: 100%;
    height: 100%;
    margin: 0px;

    .board__navigator {
      width: 100%;
      height: 45px;
      background: royalblue;
    }

    .board__container {
      width: 100%;
      height: 100%;
      background: white;
      flex: 1 1 0%;
      position: relative;
      overflow-y: auto;
    
      .board__sidebar {
        width: 260px;
        height: 100%;
        left: -243px;
        background: coral;
        position: absolute;
        box-sizing: border-box;
        border-right: 1px #eaeaea solid;
        transform: translateX(0%);
        -webkit-transform: translageX(0%);

        &.slide-in {
          animation: slide-in 0.5s forwards;
          -webkit-animation: slide-in 0.5s forwards
        }
        @keyframes slide-in {
          100% { transform: translateX(240px) }
        }
        @-webkit-keyframes slide-in {
          100% { -webkit-transform: translateX(240px) }
        }

        &.slide-out {
          animation: slide-out 0.5s forwards;
          -webkit-animation: slide-out 0.5s forwards;
        }

        @keyframes slide-out {
          0% { transform: translateX(240px); }
          100% { transform: translateX(0px); }
        }

        @-webkit-keyframes slide-out {
          0% { -webkit-transform: translateX(240px); }
          100% { -webkit-transform: translateX(0px); }
        }

        .icon-wrap {
          position: absolute;
          top: 9px;
          right: -14px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: coral;
          border: 1px #eaeaea solid;
        }
      }
      .slidebar-close:hover {
        background: lighten(coral, 10%);
        .icon-wrap {
          background: lighten(coral, 10%);
        }
      }


      .board__main-container {
        .board__top-menu {
          width: 100%;
          height: 50px;
          background:lightseagreen;
        }

        .todo__list-wrapper {
          display: flex;
          flex-direction: row;

          .todo__list-inner-first{
            margin-left: 20px;
          }
          .todo__list-inner {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            margin-top: 10px;

            .list-container {
              box-sizing: border-box;
              width: 280px;
              height: auto;
              margin-right: 7px;
              margin-left: 7px;
              padding: 0px 10px 0px 10px;
              border-radius: 4px;
              -webkit-box-shadow: 0px 3px 5px -3px rgba(0,0,0,0.7); 
              box-shadow: 0px 3px 5px -3px rgba(0,0,0,0.7);
            }
            .todo__list {
              background: #dddede;

              .list-title {
                font-size: 0.72em;
                font-weight: 510;
                color: #4f4f4f;
                margin-top: 17px;
                margin-bottom: 17px;
              }

              .todo__item {
                margin: 10px 0px 10px 0px;
                background: white;
                border-radius: 4px;
                -webkit-box-shadow: 2px 4px 5px -5px rgba(0,0,0,0.7); 
                box-shadow: 2px 4px 5px -5px rgba(0,0,0,0.7);

                .item__inner {
                  padding: 10px 10px 10px 10px;
                  color: #5f5f5f;
                  font-weight: 200;

                  .item__title {
                    padding: 5px 0px 5px 0px;
                    font-size: 0.72em;
                  }

                  .item__content {
                    padding: 7px 10px 7px 10px;
                    font-size: 0.71em;
                  }
                }
              }





              .todo__add-item {
                margin: 10px 0px 10px 0px;
                .add-item__inner {
                  margin: 10px 0px 10px 0px;
                  .add-item__textarea {
                    box-sizing: border-box;
                    width:100%;
                    height: auto;
                    min-height: 60px;
                    background: white;
                    border: 0px;
                    border-radius: 4px;
                    -webkit-box-shadow: 2px 4px 5px -5px rgba(0,0,0,0.7); 
                    box-shadow: 2px 4px 5px -5px rgba(0,0,0,0.7);
                  }
                }
                .add-item__flex-inner {
                  box-sizing: border-box;
                  margin: 10px 0px 10px 0px;
                  display: flex;

                  .add-item__exec {
                    display: flex;
                    align-items: center;
                    margin: 0px;
                    padding: 0px;

                    .add-item__submit {
                      box-sizing: border-box;
                      margin: 0px;
                      padding: 0px;
                      width: 90px;
                      height: 35px;
                      border: 0px;
                      background: cornflowerblue;
                      border-radius: 4px;
                      font-size: 0.69em;
                      color: white;
                      cursor: pointer;
                    }
                    .add-item__submit:hover {
                      background: darken(cornflowerblue, 5%)
                    }
                    .add-item__close {
                      display: inline-flex;
                      align-items: center;
                      margin: 0px 20px 0px 20px;
                      height: 35px;
                      font-size: 20pt;
                      cursor: pointer;
                      color: #5f5f5f;
                    }
                  }
                }
              }
              .add-item__show {
                margin: 10px 0px 10px 0px;
                padding: 10px 10px 10px 10px;
                font-size: 0.69em;
                color: #5f5f5f;
                cursor: pointer;
              }
              .add-item__show:hover {
                background: darken(#dddcdc, 10%);
                border-radius: 4px;
              }

              






            }

            .todo__add-list {
              background:cornflowerblue;

              .todo__add-list {
                margin: 10px 0px 10px 0px;
                .add-list__inner {
                  margin: 10px 0px 10px 0px;
                  .add-list__input {
                    box-sizing: border-box;
                    width:100%;
                    height: 30px;
                    background: white;
                    border: 0px;
                    border-radius: 4px;
                    -webkit-box-shadow: 2px 4px 5px -5px rgba(0,0,0,0.7); 
                    box-shadow: 2px 4px 5px -5px rgba(0,0,0,0.7);
                  }
                }
                .add-list__flex-inner {
                  box-sizing: border-box;
                  margin: 10px 0px 10px 0px;
                  display: flex;

                  .add-list__exec {
                    display: flex;
                    align-items: center;
                    margin: 0px;
                    padding: 0px;

                    .add-list__submit {
                      box-sizing: border-box;
                      margin: 0px;
                      padding: 0px;
                      width: 90px;
                      height: 35px;
                      border: 0px;
                      background: cornflowerblue;
                      border-radius: 4px;
                      font-size: 0.69em;
                      color: white;
                      cursor: pointer;
                    }
                    .add-list__submit:hover {
                      background: darken(cornflowerblue, 5%)
                    }
                    .add-list__close {
                      display: inline-flex;
                      align-items: center;
                      margin: 0px 20px 0px 20px;
                      height: 35px;
                      font-size: 20pt;
                      cursor: pointer;
                      color: #5f5f5f;
                    }
                  }
                }
              }





              .add-list__show-btn {
                font-size: 0.69em;
                color: white;
                margin: 17px 10px 17px 10px;
                cursor: pointer;
              }

              
            }
            .todo__add-list:hover {
              background: darken(cornflowerblue, 5%)
            }
            
          }
        }
      }
    }
  }
  .hide {
    display: none;
  }

</style>

<template>
  <div class="board__wrapper">
    <nav class="board__navigator"></nav>
    <div class="board__container">
      <nav class="board__sidebar sidebar-close">
        <div class="icon-wrap"
          @mouseup="slideSidebar"
        >
          <span class></span>
        </div>
        <div></div>
      </nav>
      <main class="board__main-container"
        @mouseup="resetSidebar"
      >
        <div class="board__top-menu"></div>
        <div class="board__todo-container">
          <div class="todo__section">
            <ul class="todo__list-wrapper">
              
              <li class="todo__list-inner todo__list-inner-first">
                
                


                <list
                  v-for="list in todoLists"
                  :key="list.id"
                  :list="list"
                  @showForm="showAddItemForm"
                />






                <div class="list-container todo__list">
                  <div class="list-title">
                    <h2>To Do</h2>
                  </div>

                  <ul class="todo__item-list">
                    
                    <li class="todo__item">
                      <div class="item__inner">
                        <div class="item__title">
                          <span>Python 스터디</span>
                        </div>
                        <div class="item__content">
                          <span>Python 프로젝트 개발</span>
                        </div>
                      </div>
                    </li>
                    
                    <li class="todo__item">
                      <div class="item__inner">
                        <div class="item__title">
                          <span>Spring 스터디</span>
                        </div>
                        <div class="item__content">
                          <span>Spring 프로젝트 개발</span>
                        </div>
                      </div>
                    </li>
                  
                  </ul>



                  <ul class="todo__add-item-cotainer">

                    <li class="todo__add-item add-item__show">
                      <div class="add-item__show-btn"
                        @mouseup="showAddItemForm"
                      >
                        <span> + Add a Plan item</span>
                        <span></span>
                      </div>
                    </li>
                    <li class="todo__add-item add-item__form hide">
                      <div id="add-item__form-wrapper">
                        <div class="add-item__inner">
                          <textarea class="add-item__textarea"/>
                        </div>
                        <div class="add-item__flex-inner">
                          <div class="add-item__exec">
                            <input class="add-item__submit" type="submit" value="Add item"/>
                            <span class="add-item__close"
                              @mouseup="showAddItemForm"
                            >X</span>
                          </div>
                          <div class="add-item__more">
                          </div>
                        </div>
                      </div>
                    </li>

                  </ul>
                  



                </div>
              

              </li>





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
                      <div class="add-list__inner">
                        <input class="add-list__input"/>
                      </div>
                      <div class="add-list__flex-inner">
                        <div class="add-list__exec">
                          <input class="add-list__submit" type="submit" value="Add list"/>
                          <span class="add-list__close"
                            @mouseup="showAddListForm"
                          >X</span>
                        </div>
                        <div class="add-list__more">
                        </div>
                      </div>
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
import List from 'componentPath/todos/List'
import { RESOURCES, DEFAULTS, CSS_NAME, CSS_ID } from 'commonPath/Constants.js'



export default {
  components: {
    List
  },

  data () {
    return {
      
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
    slideSidebar (e) {
      const sidebar = document.querySelector('.board__sidebar')
      if (sidebar) {
        if (sidebar.classList.contains('slide-in')) {
          sidebar.classList.add('sidebar-close')
          sidebar.classList.remove('slide-in')
          sidebar.classList.add('slide-out')
        
        } else {
          sidebar.classList.remove('sidebar-close')
          sidebar.classList.remove('slide-out')
          sidebar.classList.add('slide-in')
        }
      }
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
      this.resetAddItemMenu()

      const IS_BTN = !!target.closest(`.${CSS_NAME.ADD_ITEM_SHOW_BTN}`)
      const PARENT_TARGET = target.closest(`.${CSS_NAME.LIST_CONTAINER}`)

      if (!IS_BTN || PARENT_TARGET === null) return

      const btn = PARENT_TARGET.querySelector(`.${CSS_NAME.ADD_ITEM_SHOW_BTN}`)
      const form = PARENT_TARGET.querySelector(`.${CSS_NAME.ADD_ITEM_FORM}`)
      const addFormLayout = document.querySelector(`#${CSS_ID.ADD_ITEM_FORM_WRAPPER}`)
      
      if (btn && form && addFormLayout) {
        const textArea = addFormLayout.querySelector(`.${CSS_NAME.ADD_ITEM_TEXTAREA}`)
        textArea && textArea.focus()

        form.appendChild(addFormLayout)

        form.classList.remove('hide')
        btn.classList.add('hide')
      }
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
