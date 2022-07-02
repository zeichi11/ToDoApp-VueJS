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
        :formType="'item'"
        :handleMouseUp="resetFormTargetd"
      />
    </li>
  </ul>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import ItemCreator from '../Creator'
import AddItemBtn from '../AddButton'

export default {
  name: 'TodoItemForm',
  components: {
    ItemCreator,
    AddItemBtn
  },
  props: {
    setFormTargetId: Function,
    resetFormTargetd: Function,
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
    isActivated () {
      return this.listId === this.formTargetId
    }
  }
}
</script>
