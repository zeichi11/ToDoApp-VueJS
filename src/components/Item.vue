<template>
  <div class="todo-item">
    <input 
      v-model="done"
      type="checkbox"
    />
    <div class="item__title-wrap">
      <div class="item__title">
        {{ todo.title }}
      </div>
      <div class="item__date">
        {{ date }}
      </div>
    </div>
    <div class="item__actions">
      <button @click="onEditMode">수정</button>
      <button @click="deleteTodo">삭제</button>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import { RESOURCES, DEFAULTS } from '../common/Constants.js';

export default {
  props: {
    todo: Object
  },
  computed: {
    done: {
      get () {
        return this.todo.done;
      },
      set (done) {
        this.updateTodo({ done })
      }
    },
    date () {
      const date = dayjs(this.todo.createdAt);
      const isSameDate = date.isSame(this.todo.updatedAt);
      if (isSameDate) {
        return date.format(DEFAULTS.DATE_FORM);
      }
      return `${date.format(DEFAULTS.DATE_FORM)} (${RESOURCES.ITEM_EDITED})`
    }
  },
  methods: {
    onEditMode () {
      console.log("onEditMode");
    },
    offEditMode () {
      console.log("offEditMode");
    },
    updateTodo (value) {
      this.$emit('update-todo', this.todo, value);
    },
    deleteTodo () {
      this.$emit('delete-todo', this.todo);
    }
  }
}
</script>
