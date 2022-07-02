<template>
  <ul class="todo__add-item-cotainer">
    <li class="todo__add-item add-item__show">
      <add-item-btn
        v-if="!isActivated()"
        :setFormTargetId="setFormTargetId"
      />
    </li>

    <li class="todo__add-item add-item__form">
      <item-creator
        v-if="isActivated()"
      />
    </li>
  </ul>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import ItemCreator from '../Creator'
import AddItemBtn from '../AddButton'

export default {
  components: {
    ItemCreator,
    AddItemBtn
  },
  props: {
    setFormTargetId: Function,
    listId: String
  },

  data () {
    return {
    }
  },
  computed: {
    ...mapState('uiState', [
      'formTargetId'
    ]),
    // Helpers - mapGetters
    // computed 객체에 store의 getters를 바인딩한다. (this 객체로 store의 getters 메소드를 접근하기 위한 방법)
    // 첫번째 인자 : namespace(없는 경우 생략-두번째 인자만 전달), 두번째 인자 : 바인딩 타겟 data 리스트
    ...mapGetters('uiState', [
      'isListFormActivated'
    ])
  },
  methods: {
    isActivated () {
      return this.isListFormActivated(this.listId)
    }
  }
}
</script>
