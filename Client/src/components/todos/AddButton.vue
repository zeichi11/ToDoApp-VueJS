<template>
    <div class="add-form__show-btn"
      @mouseup="handleMouseUp"
    >
      <span>{{ formType === 'item' ? '+ Add a Plan item' : '+ Add another list' }} </span>
      <span></span>
    </div>
</template>

<script>
export default {
  name: 'AddButton',
  props: {
    formType: String,
    showFormHandler: Function
  },
  data () {
    return {
      
    }
  },

  computed: {
    
  },

  methods: {
    handleMouseUp: function () {
      this.showFormHandler()
    }
  }
}
</script>
