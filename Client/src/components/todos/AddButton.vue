<template>
  <li class="todo__add-item add-item__show">
        <div class="add-item__show-btn"
          @mouseup="showAddItemForm"
        >
          <span> + Add a Plan item</span>
          <span></span>
        </div>
      </li>
</template>

<script>
export default {
  props: {
    onEdit: Boolean,
    showForm: Function
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
