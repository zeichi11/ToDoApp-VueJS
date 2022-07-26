<style scoped>

</style>

<template>
  <div :class="getClass()">
    <base-icon
      v-if="icon !== undefined"
      :clickHandler="iconClickHandler ? iconClickHandler : null"
      :icon="icon"
    />
    <base-label
      v-if="label !== undefined"
      :clickHandler="labelClickHandler ? labelClickHandler : null"
      :label="label"
    />
    <base-icon
      :icon="isOpen ? expandLess : expandMore"
    />
  </div>
</template>

<script>
import BaseIcon from './atoms/BaseIcon'
import BaseLabel from './atoms/BaseLabel'

export default {
  name: 'IconLabelButton',
  components: {
    BaseIcon,
    BaseLabel
  },
  props: {
    classList: Array,
    iconClickHandler: Function,
    labelClickHandler: Function,
    buttons: Array
    // label: String,
    // icon: Object
  },
  created () {
    console.log(this.buttons)
  },
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    label () {
      return this.buttons[0].label
    },
    icon () {
      return this.buttons[0].icon
    },
    expandMore () {
      return this.buttons[0].expandMoreIcon
    },
    expendLess () {
      return this.buttons[0].expandLessIcon
    }
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
