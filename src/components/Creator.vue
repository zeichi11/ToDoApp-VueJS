<template>
  <div>
    <button @click="createTodo">추가</button>
    <input 
      :value="title"
      :placeholder="placeholder"
      type="text"
      @input="title = $event.target.value"
      @keypress.enter="createTodo"
    />
  </div>
</template>

<script>
import { MSG_CONST } from '../common/Constants';

export default {
  data () {
    return {
      title: '',
      placeholder: MSG_CONST.CREATOR_INPUT_PLACEHOLER
    }
  },
  methods: {
    createTodo () {
      const newTitle = this.title.trim();
      const isValidTitle = !!newTitle;

      if (!isValidTitle) {
        alert(MSG_CONST.INVALID_TITLE_ERROR);
        this.title = newTitle;
        return;
      }

      // $emit 부모 컴포넌트로 특정 이벤트를 올려주는 처리. 
      // 부모 컴포넌트에 this.title 인자와 함께 create-todo 이벤트로 전달.
      // 부모 컴포넌트에서 선언된 현재 컴포넌트의 이벤트 핸들 처리(v-on 디렉티브)와 매핑된다. @create-todo 
      this.$emit('create-todo', this.title);
      this.title = '';
    }
  }
}
</script>
