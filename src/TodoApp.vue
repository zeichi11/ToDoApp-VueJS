<template>
  <div class="todo-app">

    <div class="todo-app__actions">
      <div class="filters">
        <button
          :class="{ active: filter === 'all' }" 
          @click="changeFilter(DEFAULTS.ITEM_FILTER_ALL)">
            {{ RESOURCES.ALL_ITEMS }} ( {{ totalCount }} )
        </button>
        <button 
          :class="{ active: filter === 'active' }" 
          @click="changeFilter(DEFAULTS.ITEM_FILTER_ACTIVE)">
            {{ RESOURCES.ACTIVE_ITEMS }} ( {{ activeCount }} )
        </button>
        <button 
          :class="{ active: filter === 'completed' }" 
          @click="changeFilter(DEFAULTS.ITEM_FILTER_COMPLETED)">
            {{ RESOURCES.COMPLETED_ITEMS }} ( {{completedCount}} )
        </button>
      </div>
    </div>

    <div class="actions">
      <input 
        v-model="allDone"
        type="checkbox"/>
      <button @click="clearComplete">
        {{ RESOURCES.CLEAR_COMPLETED_ITEMS }}
      </button>
    </div>

    <div class="todo-app__list">
      <todo-item 
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
        @update-todo="updateTodo"
        @delete-todo="deleteTodo"
      />
    </div>

    <hr/>

    <todo-creator 
      class="todo-app__creator" 
      @create-todo="createTodo"
    />
  
  </div>
</template>

<script>
import lowdb from 'lowdb';
import LocalStorage from 'lowdb/adapters/LocalStorage';
import cryptoRandomString from 'crypto-random-string';
import _cloneDeep from 'lodash/cloneDeep';
import _find from 'lodash/find';
import _assign from 'lodash/assign';
import _findIndex from 'lodash/findIndex';
import _forEachRight from 'lodash/forEachRight';
import TodoCreator from './components/Creator.vue';
import TodoItem from './components/Item.vue';
import { RESOURCES, DEFAULTS } from './common/Constants';

export default {
  components: {
    TodoCreator,
    TodoItem
  },
  data () {
    return {
      db: null,
      todos: [],
      filter: DEFAULTS.ITEM_FILTER_ALL
    };
  },
  computed: {
    RESOURCES () {
      return RESOURCES;
    },
    DEFAULTS () {
      return DEFAULTS;
    },
    filteredTodos () {
      switch (this.filter) {
        case DEFAULTS.ITEM_FILTER_ACTIVE:
          return this.todos.filter( todo => !todo.done )
          break;
        case DEFAULTS.ITEM_FILTER_COMPLETED:
          return this.todos.filter( todo => todo.done )
        case DEFAULTS.ITEM_FILTER_ALL:
        default:
          return this.todos;
      }
    },
    totalCount () {
      return this.todos.length;
    },
    activeCount () {
      return this.todos.filter( todo => !todo.done ).length;
    },
    completedCount () {
      return this.totalCount - this.activeCount;
    },
    allDone: {
      get () {
        // 전체 아이템 수와 완료된 아이템 수가 같은 경우 모두 완료되었다고 판단한다.
        return this.total > 0 && this.totalCount === this.completedCount;
      },
      set (checked) {
        this.completeAll(checked);
      }
    }
  },
  created () {
    this.initDB();
  },
  methods: {
    /**
     * init Database
     */
    initDB() {
      const adapter = new LocalStorage('todo-app'); // DB, todo-app: dbName
      this.db = lowdb(adapter);

      const hasLocalData = this.db.has('todos').value();
      if (hasLocalData) {
        this.todos = _cloneDeep(this.db.getState().todos);
      } else {
        this.db.defaults({
          todos: []
        }).write();
      }
    },

    /**
     * create Todo data
     * @param {stirng} title
     */
    createTodo (title) {
      const newTodo = {
        id: cryptoRandomString({ length: 10 }),
        title,
        createdAt: new Date(),
        updatedAt: new Date(),
        done: false
      };

      this.db
        .get('todos') // lodash
        .push(newTodo) // lodash
        .write(); // lowdb

      // 컴포넌트 업데이트
      this.todos.push(newTodo);
    },

    /**
     * update Todo data
     * @param {object} todo
     * @param {object} value
     */
    updateTodo (todo, value) {
      this.db
        .get('todos')
        .find({ id: todo.id })
        .assign(value)
        .write();

      const targetTodo = _find(this.todos, { id: todo.id });
      _assign(targetTodo, value);
    },

    /**
     * delete Todo data
     * @param {object} todo
     */
    deleteTodo (todo) {
      this.db
        .get('todos')
        .remove({ id: todo.id })
        .write();

      const targetIndex = _findIndex(this.todos, { id: todo.id });
      // 객체의 속성을 삭제한다. 객체가 반응형이면 뷰 업데이트를 발생시킨다.
      this.$delete(this.todos, targetIndex);
    },

    /**
     * set filter type
     * @param {string} filter
     */
    changeFilter (filter) {
      this.filter = filter;
    },

    /**
     * set all items to done.
     * @param {boolean} checked
     */
    completeAll (checked) {
      // DB
      const newTodos = this.db
        .get('todos')
        .forEach(todo => {
          todo.done = checked;
        })
        .write();

     // Local todos
      // this.todos.forEach(todo => {
      //   todo.done = checked;
      // });
      this.todos = _cloneDeep(newTodos);
    },

    /**
     * delete done items
     */
    clearComplete () {
      // 삭제 시에는 index 문제가 발생하지 않도록 뒤에서부터.
      _forEachRight(this.todos, todo => {
        if (todo.done) {
          this.deleteTodo(todo);
        }
      })
    }
  }
}
</script>

<style lang="scss">
  @import "./scss/style"
</style>