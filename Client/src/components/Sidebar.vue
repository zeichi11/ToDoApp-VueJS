<template>
  <nav class="board__sidebar sidebar-close">
    <div class="icon-wrap"
      @mouseup="slideSidebar"
    >
      <span class></span>
    </div>
    <div></div>
  </nav>
</template>

<script>

export default {
  components: {
    
  },

  data () {
    return {
      
    }
  },

  computed: {
    
  },

  methods: {
    slideSidebar (e) {
      const sidebar = document.querySelector('.board__sidebar')
      if (sidebar) {
        if (sidebar.classList.contains('slide-in')) {
          sidebar.classList.add('sidebar-close')
          sidebar.classList.remove('slide-in')
          sidebar.classList.add('slide-out')
        
        } else {
          sidebar.classList.remove('sidebar-close')
          sidebar.classList.remove('slide-out')
          sidebar.classList.add('slide-in')
        }
      }
    }
  }
}
</script>
