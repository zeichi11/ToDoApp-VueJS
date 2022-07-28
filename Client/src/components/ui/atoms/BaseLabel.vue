<style scoped>

</style>

<template>
  <span
    class="button-label"
    @click="handleClick"
  >
  {{ label }}
  </span>
</template>

<script>

export default {
  name: 'BaseLabel',
  props: {
    clickHandler: Function,
    label: String
  },
  methods: {
    handleClick (e) {
      this.clickHandler && this.clickHandler(e)
    }
  }

}
</script>
