<template>
  <ul class="todo__add-item-cotainer">
    <li class="todo__add-item add-item__show">
      <add-item-btn
        v-if="!isActivated()"
        :show-form-handler="showAddForm"
      />
    </li>

    <li class="todo__add-item add-item__form">
      <item-creator
        v-if="isActivated()"
        :form-type="'item'"
        :close-form-handler="resetFormTargetId"
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
    resetFormTargetId: Function,
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
    },
    showAddForm () {
      this.resetFormTargetId()
      this.setFormTargetId()
    }
  }
}
</script>
