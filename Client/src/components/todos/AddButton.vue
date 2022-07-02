<template>
    <div class="add-item__show-btn"
      @mouseup="handleMouseUp"
    >
      <span> + Add a Plan item</span>
      <span></span>
    </div>
</template>

<script>
export default {
  name: 'AddButton',
  props: {
    setFormTargetId: Function
  },
  data () {
    return {
      
    }
  },

  computed: {
    
  },

  methods: {
    handleMouseUp: function () {
      this.setFormTargetId()
    }
  }
}
</script>
