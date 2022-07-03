<template>
  <ul
    :class="formType === 'item' ?
      'todo__add-item-cotainer' : 'todo__add-list-cotainer'"
  >
    <li class="todo__add-form add-form__show">
      <add-button
        v-if="!isActivated()"
        :show-form-handler="showForm"
      />
    </li>

    <li class="todo__add-form add-form">
      <add-creator
        v-if="isActivated()"
        :list-id="listId"
        :form-type="formType"
        :close-form-handler="closeForm"
      />
    </li>
  </ul>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import AddCreator from './AddCreator'
import AddButton from './AddButton'

export default {
  name: 'AddForm',
  components: {
    AddCreator,
    AddButton
  },
  props: {
    formType: String,
    listId: String
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState('uiState', [
      'formTargetId'
    ])
  },
  methods: {
    // Helpers - mapActions
    // methods 객체에 store의 actions를 바인딩한다. (this 객체로 store의 actions를 접근하기 위한 방법)
    // 첫번째 인자 : namespace(없는 경우 생략-두번째 인자만 전달), 두번째 인자 : 바인딩 타겟 data 리스트
    ...mapActions('uiState', [
      'updateFormTargetId',
      'resetFormTargetId'
    ]),

    isActivated () {
      return this.listId === this.formTargetId
    },

    closeForm () {
      this.resetFormTargetId()
    },
    
    showForm () {
      this.updateFormTargetId(this.listId)
    }
  }
}
</script>
