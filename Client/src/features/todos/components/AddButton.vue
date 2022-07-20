<template>
    <div class="add-form__show-btn"
      @mouseup="handleMouseUp"
    >
      <span>
        {{
          formType === 'item' ?
            '+ Add a Plan item' : '+ Add another list'
        }}
      </span>
      <icon :iconName="'bookmark'"/>
      <span></span>
    </div>
</template>

<script>
import Icon from 'componentPath/icon/GoogleMaterialIcon'

export default {
  name: 'AddButton',
  components: {
    Icon
  },
  props: {
    formType: String,
    showFormHandler: Function
  },
  // data () {
  //   return {
  //   }
  // },
  // computed: {
  // },
  methods: {
    handleMouseUp: function () {
      this.showFormHandler()
    }
  }
}
</script>
