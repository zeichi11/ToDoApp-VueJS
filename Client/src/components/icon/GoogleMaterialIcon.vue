<template>
  <span class="material-symbols-outlined">{{ value }}</span>
</template>

<script>
export default {
  name: 'GoogleMaterialIcon',
  props: {
    value: String,
    width: Number,
    onClick: Function
  },
  // data () {
  //   return {
  //   }
  // },
  // computed: {
  // },

  methods: {
    handleClick: function (e) {
      this.onClick(e)
    }
  }
}
</script>
