<template>
  <div class="list-container todo__list">
    <div class="list-title">
      <h2>{{ list.title }}</h2>
    </div>

    <todo-item-Iterator :items="list.items" />
    <todo-item-form
      :list-id="list.id"
      :set-form-target-id="setFormTargetId"
      :reset-form-target-id="resetFormTargetId"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import TodoItemIterator from './item/TodoItemIterator'
import TodoItemForm from './item/TodoItemForm'

export default {
  name: 'TodoListContainer',
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
    
  },
  methods: {
    // Helpers - mapActions
    // methods 객체에 store의 actions를 바인딩한다. (this 객체로 store의 actions를 접근하기 위한 방법)
    // 첫번째 인자 : namespace(없는 경우 생략-두번째 인자만 전달), 두번째 인자 : 바인딩 타겟 data 리스트
    ...mapActions('uiState', [
      'updateFormTargetId',
      'resetFormTargetId'
    ]),

    setFormTargetId () {
      this.updateFormTargetId(this.list.id)
    }
  }
}
</script>
