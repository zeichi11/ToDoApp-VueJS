<template>
  <div
    :id="todo.itemId"
    :class="{ done: done }"
    class="todo-item"
  >
    <div v-if="isEditMode" class="item__inner item--edit">
      <input
        ref="titleInput"
        :value="editedTitle"
        type="text"
        @input="editedTitle = $event.target.value"
        @keypress.enter="completeEditing"
        @keypress.esc="offEditMode"
      />
      <div class="item__actions">
        <button
          class="btn btn--primary"
          key="complete"
          :title="RESOURCES.COMPLETE_EDITING"
          @click="completeEditing">
            <i class="material-icons">done</i>
        </button>
        <button
          class="btn"
          key="cancel"
          :title="RESOURCES.CANCEL_EDITING"
          @click="offEditMode">
            <i class="material-icons">clear</i>
        </button>
      </div>
    </div>

    <div v-else class="item__inner item--normal">
      <label>
        <input
          v-model="done"
          type="checkbox"
        />
        <span class="icon">
          <i class="material-icons">check</i>
        </span>
      </label>

      <div class="item__title-wrap">
        <div class="item__title">
          {{ todo.title }}
        </div>
        <div class="item__date">
          {{ date }}
        </div>
      </div>

      <div class="item__actions">
        <button
          class="btn"
          key="update"
          :title="RESOURCES.EDIT_ITEM"
          @click="onEditMode">
            <i class="material-icons">edit</i>
        </button>
        <button
          class="btn btn--danger"
          key="delete"
          :title="RESOURCES.DELETE_ITEM"
          @click="deleteTodo">
            <i class="material-icons">delete</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { RESOURCES, DEFAULTS } from '../common/Constants.js'

export default {
  props: {
    todo: Object
  },
  data () {
    return {
      isEditMode: false,
      editedTitle: ''
    }
  },
  computed: {
    RESOURCES () {
      return RESOURCES
    },
    DEFAULTS () {
      return DEFAULTS
    },
    done: {
      get () {
        return this.todo.done
      },
      set (done) {
        this.updateTodo({ done })
      }
    },
    date () {
      const date = dayjs(this.todo.createdAt)
      const isSameDate = date.isSame(this.todo.updatedAt)
      if (isSameDate) {
        return date.format(DEFAULTS.DATE_FORM)
      }
      return `${date.format(DEFAULTS.DATE_FORM)} (${RESOURCES.ITEM_EDITED})`
    }
  },
  methods: {
    /**
     * complete editing handler
     */
    completeEditing () {
      if (this.todo.title !== this.editedTitle) {
        this.updateTodo({
          title: this.editedTitle,
          updatedAt: new Date()
        })
      }

      this.offEditMode();
    },

    /**
     * on edit mode handler
     */
    onEditMode () {
      this.isEditMode = true;
      this.editedTitle = this.todo.title

      // nextTick 다음 DOM 업데이트 사이클 이후 실행될 콜백을 설정할 수 있다.
      this.$nextTick(() => {
        this.$refs.titleInput.focus()
      });
    },

    /**
     * off edit mode handler
     */
    offEditMode () {
      this.isEditMode = false
    },

    /**
     * update todo trigger.
     */
    updateTodo (value) {
      // this.$emit('update-todo', this.todo, value);
      this.$store.dispatch('todoApp/updateTodo', {
        todo: this.todo,
        value
      })
    },

    /**
     * delete todo trigger.
     */
    deleteTodo () {
      // this.$emit('delete-todo', this.todo);
      this.$store.dispatch('todoApp/deleteTodo', this.todo)
    }
  }
};
</script>
