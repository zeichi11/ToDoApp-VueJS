<template>
  <div id="add-form__wrapper">
    <div class="add-form__inner">
      <input class="add-form__input"
        :placeholder="formType === 'item' ?
          'Enter a title for this item.' : 'Enter list title'"
        :value="title"
        @input="title = $event.target.value"
        @keypress.enter="create"
      />
      <textarea
        v-if="formType === 'item'"
        class="add-form__textarea"
        placeholder="Enter item contents."
        :value="content"
        @input="content = $event.target.value"
        @keypress.enter="create"
      />
    </div>
    <div class="add-form__flex-inner">
      <div class="add-form__exec">
        <input
          class="add-form__submit"
          type="submit"
          :value="formType === 'item' ? 'Add item' : 'Add list'"
          @mouseup="create"
        />
        <span class="add-form__close"
          @mouseup="closeFormHandler"
        >
          X
        </span>
      </div>
      <div class="add-form__more">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'AddCreator',
  props: {
    listId: String,
    formType: String,
    closeFormHandler: Function
  },
  data () {
    return {
      title: '',
      content: ''
    }
  },

  created () {
    console.log(this.formType)
  },

  computed: {
  },

  methods: {
    createItem () {
      this.$store.dispatch('board/createItem', {
        title: this.title,
        content: this.content,
        listId: this.listId
      })
    },

    createTodo () {
      this.$store.dispatch('board/createList', {
        title: this.title
      })
    },

    create () {
      const newTitle = this.title.trim()
      const isValidTitle = !!newTitle
      // TODO: warning dialog open
      if (!isValidTitle) return

      this.formType === 'item' ? this.createItem() : this.createTodo()
      this.title = ''
      this.content = ''
    }
  }
}
</script>
