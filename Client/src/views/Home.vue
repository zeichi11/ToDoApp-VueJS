<style lang="scss">
  @import "../scss/homeStyle";
</style>

<template>
  <div class="home__wrapper">
    <div class="home-navigator__contaier">
      <navigator
        :ui-data="UI_STRUCT.HOME.NAVIGATOR"
      />
    </div>
    <div class="home-main__container">
      <main class="home-main">
        <section class="home-main__banner">
          <div class="home-main__banner-left">
            <div class="banner__contents">
              <h1>TodoApp helps teams move work forward.</h1>
              <p>
                Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with TodoApp.
              </p>
            </div>
            <div class="banner__sign-up">
              <form 
                class="banner__sign-up-form"
                action=""
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <button>sign-up with email</button>
              </form>
              
            </div>
          </div>
          <div class="home-main__banner-right">

          </div>
        </section>
      </main>
    </div>
</div>
</template>

<script>
import Navigator from 'layoutPath/Navigator'
import UI_STRUCT from 'dataPath/uiMetadata'

export default  {
  components: {
    Navigator
  },
  data () {
    return {
    }
  },
  computed: {
    // // Helpers - mapState
    // // computed 객체에 store의 state를 바인딩한다. (this 객체로 store의 data를 접근하기 위한 방법)
    // // 첫번째 인자 : namespace(없는 경우 생략-두번째 인자만 전달), 두번째 인자 : 바인딩 타겟 data 리스트
    // ...mapState('board', [
    //   'todoLists'
    // ]),
    // // Helpers - mapGetters
    // // computed 객체에 store의 getters를 바인딩한다. (this 객체로 store의 getters 메소드를 접근하기 위한 방법)
    // // 첫번째 인자 : namespace(없는 경우 생략-두번째 인자만 전달), 두번째 인자 : 바인딩 타겟 data 리스트
    // ...mapGetters('board', [
    //   // getter
    // ]),

    UI_STRUCT: function () {
      return UI_STRUCT
    }
  },
  methods: {
  }
}
</script>