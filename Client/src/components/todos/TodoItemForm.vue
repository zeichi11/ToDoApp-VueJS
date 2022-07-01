<template>
  <ul class="todo__add-item-cotainer">
    <add-item-btn
      :onEditMode="onEditMode"
      @showForm="showAddItemForm"
      @setEditMode="setEditMode"
    />

    <li class="todo__add-item add-item__form hide">
      <item-creator
        v-if="isFirstList"
          :onEditMode="onEditMode"
          @showForm="showAddItemForm"
          @setEditMode="setEditMode"
      />
    </li>
  </ul>
</template>

<script>
import ItemCreator from './Creator'
import AddItemBtn from './AddItemBtn'

export default {
  components: {
    ItemCreator,
    AddItemBtn
  },
  props: {
    showForm: Function,
    isFirstList: Boolean
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
