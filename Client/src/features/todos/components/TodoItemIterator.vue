<template>
  <ul class="todo__item-list">
    <todo-item-card
      v-for="item in items"
      :key="item.id"
      :item="item"
      :start-drag=startDrag
    />
  </ul>
</template>

<script>
import TodoItemCard from './TodoItemCard'

export default {
  name: 'TodoItemIterator',
  components: {
    TodoItemCard
  },
  props: {
    items: Array,
    startDrag: Function
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
