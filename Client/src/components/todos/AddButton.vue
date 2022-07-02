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
      console.log('11111')
      // this.$emit('setFormTargetId')
      this.setFormTargetId()
    }
  }
}
</script>
