<style scoped>

</style>

<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'DropDownPannel',
  components: {
  },
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
