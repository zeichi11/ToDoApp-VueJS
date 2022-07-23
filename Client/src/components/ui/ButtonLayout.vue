<style scoped>

</style>

<template>
  <button
    :class="getClass()"
    @click="handleClick"
  >
    <slot name="buttonLayout"></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonLayout',
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
