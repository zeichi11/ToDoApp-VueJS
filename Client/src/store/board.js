/**
 * vuex의 store는 특정 범주에서만 store가 활용될 수 있도록 namespace를 설정할 수 있다.
 * 이런한 namespace는 vuex의 모듈 단위로 지원하며 해당 모듈에 namespaced: ture 라는 속성으로 설정 가능하다.
 * 모듈 형태로 추가된 store에 namespaced 속성 설정이 없는 경우 해당 store 모듈은 전역 범주로 설정되니 주의.
 */

import Vue from 'vue'
import cryptoRandomString from 'crypto-random-string'
import { DEFAULTS } from 'commonPath/Constants.js'
import Loader from '../http/Loader'
import Utils from '../common/Utils'

import _assign from 'lodash/assign'
import _find from 'lodash/find'
import _cloneDeep from 'lodash/cloneDeep'
import _findIndex from 'lodash/findIndex'
import _forEachRight from 'lodash/forEachRight'

export default {
  namespaced: true,
  // Data
  // state는 vue의 data와 동일하게 함수로 정의되어야 한다.
  // 함수로 정의되는 이유 : 객체로 선언 시 실제 data를 사용하는 상황에서 참조관계가 발생함
  // 함수로 정의하고 객체 리터럴을 생성하여 반환하여 참조관계 발생을 방지하기 위함
  state: () => ({
    todoLists: [
      {
        id: Utils.generateListId(),
        title: 'To Do (list title 1)',
        createdAt: 'date',
        updatedAt: 'date',
        items: [
          {
            id: Utils.generateItemId(),
            title: 'list1-item1',
            content: 'list1-item1-content',
            createdAt: 'date',
            updatedAt: 'date'
          },
          {
            id: Utils.generateItemId(),
            title: 'list1-item1',
            content: 'list1-item2-content',
            createdAt: 'date',
            updatedAt: 'date'
          },
          {
            id: Utils.generateItemId(),
            title: 'list1-item1',
            content: 'list1-item2-content',
            createdAt: 'date',
            updatedAt: 'date'
          },
          {
            id: Utils.generateItemId(),
            title: 'Python 스터디',
            content: 'Python 프로젝트 개발',
            createdAt: 'date',
            updatedAt: 'date'
          },
          {
            id: Utils.generateItemId(),
            title: 'Spring 스터디',
            content: 'Spring 프로젝트 개발',
            createdAt: 'date',
            updatedAt: 'date'
          }
        ]
      },
      {
        id: Utils.generateListId(),
        title: 'Doing (list title 2)',
        createdAt: 'date',
        updatedAt: 'date',
        items: [
          {
            id: Utils.generateItemId(),
            title: 'list2-item1',
            content: 'list2-item1-content',
            createdAt: 'date',
            updatedAt: 'date'
          },
          {
            id: Utils.generateItemId(),
            title: 'list2-item2',
            content: 'list2-item2-content',
            createdAt: 'date',
            updatedAt: 'date'
          },
          {
            id: Utils.generateItemId(),
            title: 'VueJS 스터디',
            content: 'VueJS 프로젝트 개발',
            createdAt: 'date',
            updatedAt: 'date'
          },
          {
            id: Utils.generateItemId(),
            title: 'React 스터디',
            content: 'React 프로젝트 개발',
            createdAt: 'date',
            updatedAt: 'date'
          },
          {
            id: Utils.generateItemId(),
            title: 'express 스터디',
            content: 'express 프로젝트 개발',
            createdAt: 'date',
            updatedAt: 'date'
          }
        ]
      },
      {
        id: Utils.generateListId(),
        title: 'Done (list title 3)',
        createdAt: 'date',
        updatedAt: 'date',
        items: [
          {
            id: Utils.generateItemId(),
            title: 'list1-item1',
            content: 'list1-item1-content',
            createdAt: 'date',
            updatedAt: 'date'
          },
          {
            id: Utils.generateItemId(),
            title: 'list1-item1',
            content: 'list1-item2-content',
            createdAt: 'date',
            updatedAt: 'date'
          },
          {
            id: Utils.generateItemId(),
            title: 'JavaScript 스터디',
            content: 'JavaScript 프로젝트 개발',
            createdAt: 'date',
            updatedAt: 'date'
          }
        ]
      }
    ]
  }),
  // Computed
  getters: {
  },
  // Methods
  // 실제 값을 변경할 때 (비동기 처리 안됨)
  // state의 값을 변경할 수 있는 권한은 mutations 에만 있으며
  // actions에서 실제 값을 변경해야 하는 경우 mutations 에 변경 로직을 추가하고 관리해야한다.
  mutations: {
    /**
     * Board의 todoList들을 초기화 한다.
     */
    initBoard (state, todoLists) {
      todoLists && (state.todoLists = todoLists)
    },

    /*
     * Assign todoList
     */
    assignTodoList (state, listId, todoList) {
      const index = _findIndex(state.todoLists, { listId })
      state.todoLists[index] = todoList
    },

    addList (state, newList) {
      newList && state.todoLists.push(newList)
    },

    /*
     * Assign item
     */
    assignItem (state, payload) {
      const { targetItem, value } = payload
      _assign(targetItem, value)
    },

    /**
     * push item
     */
    addItem (state, { listId, newItem }) {
      const found = _find(state.todoLists, { id: listId })
      found.items.push(newItem)
    },

    /**
     * Delete item
     */
    deleteItem (state, listId, index) {
      const found = _find(state.todoLists, { listId })
      Vue.delete(found, index)
    },

    /**
     * Update item
     */
    updateItem (state, payload) {
      const { item, key, value } = payload
      item[key] = value
    },

    /*
     *  Filter
     */
    updateFilter (state, filter) {
      state.filter = filter
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
    /**
     * initialize board
     */
    async initBoard (context, boardId) {
      const { commit } = context
      const boardData = await Loader.loadBoard(boardId)

      if (boardData) {
        commit('initBoard', boardData)
      }
    },

    // /**
    //  * init Database
    //  */
    // async initBoard (context, boardId) {
    //   const { state, commit } = context
    //   const board = await fetch(
    //     `http://localhost:8000/todoApp/board?id=${boardId}`
    //   )

    //   commit('SET_BOARD', await board.json())
    // },

    /**
     * create Todo item
     */
    createList (context, payload) {
      const { commit } = context
      const { title } = payload
      const newList = {
        id: Utils.generateListId(),
        title,
        createdAt: new Date(),
        updatedAt: new Date(),
        done: false
      }

      console.log(`create list : ${newList.id}`)
      // 컴포넌트 업데이트
      commit('addList', newList) // push Todo
    },

    /**
     * create Todo item
     */
    createItem (context, payload) {
      const { commit } = context
      const { listId, title, content } = payload
      const newItem = {
        id: Utils.generateItemId(),
        title,
        content,
        createdAt: new Date(),
        updatedAt: new Date()
      }

      console.log(`create Item at ${listId}`)
      // 컴포넌트 업데이트
      commit('addItem', { listId, newItem }) // push Todo
    },

    /**
     * update Todo data
     */
    updateItem (context, payload) {
      const { state, commit } = context
      const { listId, itemId, value } = payload
      const foundList = _find(state.todoLists, { listId })

      if (foundList) {
        const foundItem = _find(foundList, { itemId })
        foundItem && commit('assignTodo', { foundItem, value })
      }
    },

    moveItem (context, payload) {
      const { state, commit } = context
      const { fromListId, toListId, itemId, targetIndex } = payload
      const fromList = _find(state.todoLists, { fromListId })
      const toList = _find(state.todoLists, { toListId })

      if (fromList && toList) {
        const foundItem = _find(fromList, { itemId })
        const index = _find(fromList, { itemId })

        commit('deleteItem', { fromListId, index })
        commit('insertItemAt', { toList, foundItem })
      }
    },

    /**
     * delete Todo data
     */
    deleteItem (context, payload) {
      const { state, commit } = context
      const { listId, itemId } = payload
      const foundList = _find(state.todoLists, { listId })

      if (foundList) {
        const index = _findIndex(foundList, { itemId })
        index > -1 && commit('deleteItem', index)
      }
    },

    /**
     * set all items to done.
     * @param {boolean} checked
     */
    completeAll (context, checked) {
      const { state, commit } = context
      // DB
      const newTodos = state.db
        .get('todos')
        .forEach((todo) => {
          // todo.done = checked;
          commit('updateTodo', {
            todo,
            key: 'done',
            value: checked
          })
        })
        .write()

      // Local todos
      // this.todos.forEach(todo => {
      //   todo.done = checked;
      // });
      // state.todos = _cloneDeep(newTodos);
      commit('assignTodos', _cloneDeep(newTodos))
    },

    /**
     * delete done items
     */
    clearComplete (context, todo) {
      const { state, dispatch } = context
      // 삭제 시에는 index 문제가 발생하지 않도록 뒤에서부터.
      _forEachRight(state.todos, (todo) => {
        if (todo.done) {
          dispatch('deleteTodo', todo)
        }
      })
    }
  }
}
