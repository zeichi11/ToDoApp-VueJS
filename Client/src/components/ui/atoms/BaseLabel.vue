<style scoped>

</style>

<template>
  <span
    :class="getClass()"
    @click="handleClick"
  >
  {{ label }}
  </span>
</template>

<script>

export default {
  name: 'BaseLabel',
  props: {
    classList: Array,
    clickHandler: Function,
    label: String
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
