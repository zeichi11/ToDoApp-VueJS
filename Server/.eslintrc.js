module.exports = {
  // 프로젝트에 prettier 세팅 시 추가 extends와의 충돌로 인한 오류가 발생할 수 있음
  // eslint-config-prettier 설치 후 extends 충돌이 발생하는 extend 뒤에 추가하면 해결 가능함
  extends: ['airbnb-base', 'prettier']
}
