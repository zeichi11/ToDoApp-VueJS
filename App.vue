<template>
  <div>
    <router-link to="/" class="to-home">
      <i class="material-icons">home</i>
    </router-link>

    <router-view />
  </div>
</template>

<script>
export default {
  created () {
    console.log('Router', this.$router);
    console.log('Route', this.$route);
  }
}
</script>


<style lang="scss">
  // 현재 페이지가 router-link 태그의 to 속성에 해당하는 페이지인 경우 
  // router-link-exact-active class가 추가된다.
  // 해당 class가 있는 경우 home 화면이므로 home 버튼 메뉴를 보이지 않게 처리한다.
  .to-home.router-link-exact-active {
    display: none;
  }
</style>