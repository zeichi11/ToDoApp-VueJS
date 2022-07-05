<style scoped>

</style>

<template>
  <div>
    <base-icon/>
    <base-label/>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon'
import BaseLabel from './BaseLabel'

export default {
  name: 'BaseIconLabel',
  component: {
    BaseIcon,
    BaseLabel
  }

}
</script>
