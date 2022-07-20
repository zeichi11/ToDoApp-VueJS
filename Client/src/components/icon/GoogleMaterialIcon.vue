<template>
  <span class="material-symbols-outlined">{{ iconName }}</span>
</template>

<script>
export default {
  name: 'GoogleMaterialIcon',
  props: {
    iconName: String,
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
