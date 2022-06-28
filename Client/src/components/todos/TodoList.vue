<template>
  <div class="list-container todo__list">
    <div class="list-title">
      <h2>{{ list.title }}</h2>
    </div>

    <ul class="todo__item-list">
      <todo-item
        v-for="item in list.items"
        :key="item.id"
        :item="item"
      />
    </ul>

    <ul class="todo__add-item-cotainer">
      <add-item-btn
        @showForm="showAddItemForm"
      />

      <li class="todo__add-item add-item__form hide">
        <item-creator
          v-if="isFirstList"
            @showForm="showAddItemForm"
        />
      </li>

    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
import ItemCreator from './ItemCreator'
import AddItemBtn from './AddItemBtn'

export default {
  components: {
    TodoItem,
    ItemCreator,
    AddItemBtn
  },
  props: {
    list: Object,
    showForm: Function,
    isFirstList: Boolean
  },

  data () {
    return {
      
    }
  },
  computed: {

  },
  methods: {
    showAddItemForm: function (e) {
      this.$emit('showForm', e)
    }
  }
}
</script>
