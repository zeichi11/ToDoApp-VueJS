<template>
  <div>
    <todo-item />
    <todo-creator />
  </div>
</template>

<script>
import { Low, LocalStorage } from 'lowdb';
import TodoCreator from './components/Creator.vue';
import TodoItem from './components/Item.vue';

export default {
  components: {
    TodoCreator,
    TodoItem
  },
  data () {
    return {
      db: null
    }
  },
  created () {
    this.initDB();
  },
  methods: {
    initDB() {
      const adapter = new LocalStorage('todo-app'); // DB, todo-app: dbName
      this.db = new Low(adapter);

      this.db.data = {
        todos: [] // Collection
      }; // write to lowdb
      this.db.write();
    }
  }
}
</script>
