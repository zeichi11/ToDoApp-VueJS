<style scoped>

</style>

<template>
  <div :class="getClass()">
    <base-icon
      :clickHandler="iconClickHandler ? iconClickHandler : null"
      :iconSrc="iconSrc"
    />
    <base-label
      :clickHandler="labelClickHandler ? labelClickHandler : null"
      :label="label"
    />
  </div>
</template>

<script>
import BaseIcon from './atoms/BaseIcon'
import BaseLabel from './atoms/BaseLabel'

export default {
  name: 'BaseIconLabel',
  components: {
    BaseIcon,
    BaseLabel
  },
  props: {
    classList: Array,
    iconClickHandler: Function,
    labelClickHandler: Function,
    label: String,
    iconSrc: String
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
