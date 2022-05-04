<template>
  <todo-app />
</template>

<script>
import TodoApp from './src/TodoApp.vue'

export default {
  components: {
    TodoApp // 'todo-app': TodoApp
  }
}
</script>

<style scoped lang="scss">
  $color: red;
  h1 {
    color: $color;
  }
</style>
