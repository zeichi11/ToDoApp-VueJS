<template>
  <div>
    <todo-item />
    <todo-creator />
  </div>
</template>

<script>
import TodoCreator from './components/Creator.vue'
import TodoItem from './components/Item.vue'

export default {
  components: {
    TodoCreator,
    TodoItem
  }
}
</script>
