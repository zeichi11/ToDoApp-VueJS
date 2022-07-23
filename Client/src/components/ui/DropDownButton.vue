<style scoped>

</style>

<template>
  <div :class="getClass()">
    <div>
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
    </div>
    <div>
      <base-icon
        :icon="isOpen ? expandLess : expandMore"
      />
    </div>
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
