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
        background: coral;
        position: absolute;
        border-right: 1px #eaeaea solid;
        transform: translateX(-93%);
        -webkit-transform: translageX(-93%);

        &.slide-in {
          animation: slide-in 0.5s forwards;
          -webkit-animation: slide-in 0.5s forwards
        }
        @keyframes slide-in {
          100% { transform: translateX(0%) }
        }
        @-webkit-keyframes slide-in {
          100% { -webkit-transform: translateX(0%) }
        }

        &.slide-out {
          animation: slide-out 0.5s forwards;
          -webkit-animation: slide-out 0.5s forwards;
        }

        @keyframes slide-out {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-93%); }
        }

        @-webkit-keyframes slide-out {
          0% { -webkit-transform: translateX(0%); }
          100% { -webkit-transform: translateX(-93%); }
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
                font-size: 0.78em;
                font-weight: 600;
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

              .add-todo-item {
                margin: 10px 0px 10px 0px;
                padding: 10px 10px 10px 10px;
                font-size: 0.69em;
                color: #5f5f5f
              }
              .add-todo-item:hover {
                background: darken(#dddcdc, 10%);
                border-radius: 4px;
              }
            }

            .todo__add-list {
              background:cornflowerblue;

              .add-todo-list {
                font-size: 0.69em;
                color: white;
                margin: 17px 10px 17px 10px;
              }
            }
            .todo__add-list:hover {
              background: lighten(cornflowerblue, 5%)
            }
          }
        }
        
      }
    }
  }

</style>

<template>
  <div class="board__wrapper">
    <nav class="board__navigator"></nav>
    <div class="board__container">
      <nav class="board__sidebar">
        <div class="icon-wrap"
          @click="slideSidebar"
        >
          <span class></span>
        </div>
        <div></div>
      </nav>
      <main class="board__main-container">
        <div class="board__top-menu"></div>
        <div class="board__todo-container">
          <div class="todo__section">
            <ul class="todo__list-wrapper">
              
              <li class="todo__list-inner todo__list-inner-first">
                

                <div class="list-container todo__list">
                  <div class="list-title">
                    <h2>To Do</h2>
                  </div>
                  <ul>
                    
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
                  <div class="add-todo-item">
                    <span> + Add a Plan item</span>
                    <span></span>
                  </div>
                </div>
                
                <div class="list-container todo__list">
                  <div class="list-title">
                    <h2>Doing</h2>
                  </div>
                  <ul>
                    
                    <li class="todo__item">
                      <div class="item__inner">
                        <div class="item__title">
                          <span>VueJS 스터디</span>
                        </div>
                        <div class="item__content">
                          <span>VueJS 프로젝트 개발</span>
                        </div>
                      </div>
                    </li>
                    
                    <li class="todo__item">
                      <div class="item__inner">
                        <div class="item__title">
                          <span>React 스터디</span>
                        </div>
                        <div class="item__content">
                          <span>React 프로젝트 개발</span>
                        </div>
                      </div>
                    </li>

                    <li class="todo__item">
                      <div class="item__inner">
                        <div class="item__title">
                          <span>express 스터디</span>
                        </div>
                        <div class="item__content">
                          <span>express 프로젝트 개발</span>
                        </div>
                      </div>
                    </li>

                  </ul>
                  <div class="add-todo-item">
                    <span> + Add a Plan item</span>
                    <span></span>
                  </div>

                </div>
                
                <div class="list-container todo__list">
                  <div class="list-title">
                    <h2>Done</h2>
                  </div>
                  <ul>
                    <li class="todo__item">
                      <div class="item__inner">
                        <div class="item__title">
                          <span>JavaScript 스터디</span>
                        </div>
                        <div class="item__content">
                          <span>JavaScript 프로젝트 개발</span>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <div class="add-todo-item">
                    <span> + Add a Plan item</span>
                    <span></span>
                  </div>
                </div>
              

              </li>

              <li class="todo__list-inner">
                <div class="list-container todo__add-list">
                  <div class="add-todo-list">
                    <span> + Add another list</span>
                  </div>
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

  methods: {
    slideSidebar () {
      const sidebar = document.querySelector('.board__sidebar')
      if (sidebar) {
        if (sidebar.classList.contains('slide-in')) {
          sidebar.classList.remove('slide-in')
          sidebar.classList.add('slide-out')
        } else {
          sidebar.classList.remove('slide-out')
          sidebar.classList.add('slide-in')
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
