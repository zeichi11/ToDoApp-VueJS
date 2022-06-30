<template>
  <div id="add-item__form-wrapper">
    <div class="add-item__inner">
      <input class="add-list__input"/>
      <textarea class="add-item__textarea"/>
    </div>
    <div class="add-item__flex-inner">
      <div class="add-item__exec">
        <input class="add-item__submit" type="submit" value="Add item"/>
        <span class="add-item__close"
          @mouseup="showAddItemForm"
        >X</span>
      </div>
      <div class="add-item__more">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showForm: Function
  },
  data () {
    return {
      isShow: false
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
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//   setup() {
    
//   },
// })
</script>
