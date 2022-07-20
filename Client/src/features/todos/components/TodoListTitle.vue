<template>
  <div class="list-title">
    <div>
      <span class="list-title__color"></span>
    </div>
    <div>
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoListContainer',
  props: {
    title: String
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
