<style scoped>

</style>

<template>
  <google-material-icon
    v-if="icon.type === 'googleMaterial'"
    :classList="classList"
    :value="icon.value"
  />
</template>

<script>
import GoogleMaterialIcon from '../../icon/GoogleMaterialIcon'

export default {
  name: 'BaseIcon',
  components: { 
    GoogleMaterialIcon
  },
  props: {
    classList: Array,
    clickHandler: Function,
    icon: Object
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
