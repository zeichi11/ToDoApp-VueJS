<style scoped>

</style>

<template>
  <div :class="getClass()">
    <slot name="containerContents"></slot>
  </div>
</template>

<script>

export default {
  name: 'LayoutContainer',
  props: {
    classList: Array
  },
  methods: {
    getClass () {
      if (this.classList && this.classList.length) {
        return this.classList.join(' ')
      }
      return ''
    }
  }
}
</script>
