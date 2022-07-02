<template>
  <div class="list-container todo__list">
    <div class="list-title">
      <h2>{{ list.title }}</h2>
    </div>

    <todo-item-Iterator :items="list.items" />
    <todo-item-form
      :listId="list.id"
      :setFormTargetId="setFormTargetId"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import TodoItemIterator from './item/TodoItemIterator'
import TodoItemForm from './item/TodoItemForm'

export default {
  components: {
    TodoItemIterator,
    TodoItemForm
  },
  props: {
    list: Object
  },

  data () {
    return {
      onEditMode: false
    }
  },
  computed: {
    // Helpers - mapGetters
    // computed 객체에 store의 getters를 바인딩한다. (this 객체로 store의 getters 메소드를 접근하기 위한 방법)
    // 첫번째 인자 : namespace(없는 경우 생략-두번째 인자만 전달), 두번째 인자 : 바인딩 타겟 data 리스트
    ...mapGetters('uiState', [
      'isListFormActivated'
    ])
  },
  methods: {
    // Helpers - mapActions
    // methods 객체에 store의 actions를 바인딩한다. (this 객체로 store의 actions를 접근하기 위한 방법)
    // 첫번째 인자 : namespace(없는 경우 생략-두번째 인자만 전달), 두번째 인자 : 바인딩 타겟 data 리스트
    ...mapActions('uiState', [
      'updateFormTargetId'
    ]),

    isFormActivated () {
      return this.isListFormActivated(this.list.id)
    },

    setFormTargetId () {
      console.log('222222')
      this.updateFormTargetId(this.list.id)
    }
  }
}
</script>
