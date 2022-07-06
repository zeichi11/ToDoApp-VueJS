<style scoped>

</style>

<template>
  <span
    :class="getClass()"
    @click="handleClick"
  >
  </span>
</template>

<script>

export default {
  name: 'BaseIcon',
  props: {
    classList: Array,
    clickHandler: Function,
    iconSrc: String
  },
  methods: {
    getClass () {
      if (this.classList && this.classList.length) {
        return this.classList.join(' ')
      }
      return ''
    },
    handleClick (e) {
      this.clickHandler && this.clickHandler(e)
    }
  }
}
</script>
