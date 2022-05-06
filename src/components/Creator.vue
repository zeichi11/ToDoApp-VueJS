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
      placeholder: MSG_CONST.creator_input_placeholder
    }
  },
  methods: {
    createTodo () {
      // 생성
      console.log(this.title);
    }
  }
}
</script>
