<style scoped>

</style>

<template>
  <div>
    <button
      :class="getClass()"
      @click="handleClick"
    >
      <slot name="buttonLayout"></slot>
    </button>
    <drop-down-pannel/>
  </div>
</template>

<script>
import DropDownPannel from './DropDownPannel'

export default {
  components: {
    DropDownPannel
  },
  name: 'DropDownLayout',
  props: {
    classList: Array,
    clickHandler: Function
  },
  methods: {
    getClass () {
      if (this.classList && this.classList.length) {
        return this.classList.join(' ')
      }
      return ''
    },
    handleClick () {
      this.clickHandler && this.clickHandler()
    }
  }
}
</script>
