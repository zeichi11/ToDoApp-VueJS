<template>
  <div class="sign-in__form-container">
    <div class="sign-in__form-inner-container">
      <h1>{{ 'Sign in to TodoApp' }}</h1>
      <div class="sign-in__form-wrapper">
        <form
          class="sign-in__form"
          action=""
        >
          <label for="email-field">
            <input
              id="email-field"
              class="sign-in__input"
              type="email"
              name="email"
            />
          </label>
          <label for="password-field">
            <input
              id="password-field"
              class="sign-in__input"
              type="password"
              name="password"
            />
          </label>
          <input
            class="sign-in__submit-button"
            type="submit"
            name="submit"
            value="Sign in"
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
    // initGoogleSignIn () {
    //   gapi.load('auth2', function() {
    //     gapi.auth2.init();
    //     options = new gapi.auth2.SigninOptionsBuilder();
    //     options.setPrompt('select_account');
    //     // 추가는 Oauth 승인 권한 추가 후 띄어쓰기 기준으로 추가
    //     options.setScope('email profile openid https://www.googleapis.com/auth/user.birthday.read');
    //     // 인스턴스의 함수 호출 - element에 로그인 기능 추가
    //     // GgCustomLogin은 li태그안에 있는 ID, 위에 설정한 options와 아래 성공,실패시 실행하는 함수들
    //     gapi.auth2.getAuthInstance().attachClickHandler('GgCustomLogin', options, onSignIn, onSignInFailure);
    //   })
    // },

    // onSignIn (googleUser) {
    //   var access_token = googleUser.getAuthResponse().access_token
    //   $.ajax({
    //     // people api를 이용하여 프로필 및 생년월일에 대한 선택동의후 가져온다.
    //     url: 'https://people.googleapis.com/v1/people/me'
    //     // key에 자신의 API 키를 넣습니다.
    //     , data: {personFields:'birthdays', key:'AIzaSyBOdmeC4SOSzXmPGLEM2vZueqiBSWKg3wk', 'access_token': access_token}
    //     , method:'GET'
    //     })
    //     .done(function(e){
    //       //프로필을 가져온다.
    //       var profile = googleUser.getBasicProfile();
    //       console.log(profile)
    //     })
    //     .fail(function(e){
    //       console.log(e);
    //     })
    // },

    // onSignInFailure (t){		
    //   console.log(t);
    // }
  }
}
</script>