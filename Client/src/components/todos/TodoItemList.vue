<template>
  <ul class="todo__item-list">
    <todo-item-card
      v-for="item in list.items"
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
    list: Object
  },

  data () {
    return {
      onEditMode: false
    }
  },
  computed: {

  },
  methods: {
    showAddItemForm: function (e) {
      this.$emit('showForm', e)
    },
    setEditMode: function () {
      this.onEditMode = !onEditMode
    }
  }
}
</script>
