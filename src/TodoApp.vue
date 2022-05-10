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
        .write() // lowdb
    },
    updateTodo (todo, value) {
      console.log(todo, value);
    },
    deleteTodo (todo) {
      console.log(todo);
    }
  }
}
</script>
