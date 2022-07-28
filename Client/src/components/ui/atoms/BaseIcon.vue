<style scoped>

</style>

<template>
  <google-material-icon
    v-if="icon.type === 'googleMaterial'"
    class="button-icon"
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
    clickHandler: Function,
    icon: Object
  },
  methods: {
    handleClick (e) {
      this.clickHandler && this.clickHandler(e)
    }
  }
}
</script>
