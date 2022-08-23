<style lang="scss">
  @import "../scss/signUpStyle";
</style>

<template>
  <div class="sign-up__form-container">
    <div class="sign-up__form-inner-container">
      <h1>{{ 'Sign up to TodoApp' }}</h1>
      <div class="sign-up__form-wrapper">
        <form
          class="sign-up__form"
          action=""
        >
          <label for="email-field">
            <input
              id="email-field"
              class="sign-up__input"
              type="email"
              name="email"
            />
            <button>{{'check'}}</button>
          </label>
          <label>{{'This email connot be used.'}}</label>
          <label for="password-field">
            <input
              id="password-field"
              class="sign-up__input"
              type="password"
              name="password"
            />
          </label>
          <label>{{''}}</label>
          <label for="password-check-field">
            <input
              id="password-check-field"
              class="sign-up__input"
              type="password"
              name="password-check"
            />
          </label>
          <label>{{''}}</label>
          <input
            class="sign-up__submit-button"
            type="submit"
            name="submit"
            value="Sign up"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState, mapGetters, mapMutations, madd-list__showapActions } from 'vuex' // store의 state와 getters의 바인딩을 지원하는 helpers
// import TodoCreator from 'componentPath/Creator.vue'
// import TodoItem from 'componentPath/Item.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { RESOURCES, DEFAULTS, CSS_NAME, CSS_ID } from 'commonPath/Constants.js'
import UI_STRUCT from 'dataPath/uiMetadata'

export default {
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    // Helpers - mapState
    // computed 객체에 store의 state를 바인딩한다. (this 객체로 store의 data를 접근하기 위한 방법)
    // 첫번째 인자 : namespace(없는 경우 생략-두번째 인자만 전달), 두번째 인자 : 바인딩 타겟 data 리스트
    ...mapState('board', [
      'todoLists'
    ]),
    // Helpers - mapGetters
    // computed 객체에 store의 getters를 바인딩한다. (this 객체로 store의 getters 메소드를 접근하기 위한 방법)
    // 첫번째 인자 : namespace(없는 경우 생략-두번째 인자만 전달), 두번째 인자 : 바인딩 타겟 data 리스트
    ...mapGetters('board', [
      // getter
    ]),

    UI_STRUCT: function () {
      return UI_STRUCT
    }
  },
  methods: {
  }
}
</script>
