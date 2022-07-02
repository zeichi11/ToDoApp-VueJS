<template>
  <ul class="todo__item-list">
    <todo-item-card
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </ul>
</template>

<script>
import TodoItemCard from './TodoItemCard'

export default {
  components: {
    TodoItemCard
  },
  props: {
    items: Array
  },

  data () {
    return {
    }
  },
  computed: {

  },
  methods: {
    
  }
}
</script>
