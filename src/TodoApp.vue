<template>
  <div>
    <todo-item 
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @update-todo="updateTodo"
      @delete-todo="deleteTodo"
    />
    <hr/>
    <todo-creator @create-todo="createTodo"/>
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
import TodoCreator from './components/Creator.vue';
import TodoItem from './components/Item.vue';

export default {
  components: {
    TodoCreator,
    TodoItem
  },
  data () {
    return {
      db: null,
      todos: []
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
    }
  }
}
</script>
