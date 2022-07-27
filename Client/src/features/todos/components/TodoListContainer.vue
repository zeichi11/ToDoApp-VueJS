<template>
  <div class="list-container todo__list"
    @drop.prevent="onDrop($event)"
    @dragenter.prevent
    @dragover.prevent
  >
    <todo-list-title 
      :title="list.title"
    />
    <todo-item-Iterator 
      :items="list.items"
      :start-drag="startDrag"
    />
    <todo-item-add-form
      :form-type="'item'"
      :list-id="list.id"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import TodoListTitle from './TodoListTitle'
import TodoItemIterator from './TodoItemIterator'
import TodoItemAddForm from './AddForm'

export default {
  name: 'TodoListContainer',
  components: {
    TodoListTitle,
    TodoItemIterator,
    TodoItemAddForm
  },
  props: {
    list: Object,
    listIndex: number
  },

  data () {
    return {
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
    },

    startDrag (e, item) {
      console.log(e)
      event.dataTransfer.dropEffect = "move"
      event.dataTransfer.effectAllowed = "move"
      event.dataTransfer.setData("selectedItem", item)
    },

    onDrop (e) {
      console.log(e)
      const selectedItem = Number(event.dataTransfer.getData("selectedItem"))

      // 리스트에서 선택된 아이템과 같은 content 값을 가진 요소를 찾아 index를 반환한다.
      let targetIdx
      let targetItem
      this.list.items.forEach((item, index) => {
        item.numberList.forEach((ob) => {
          if(ob.content === selectedItem) {
            targetIdx = index
            targetItem = ob
          }
        })
      })

      // drop이 된 <div> index(=colNum)를 받아 리스트에 추가한다. 
      // 기존 리스트에서는 요소를 삭제한다. (splice() 사용)
      this.lists[colNum].numberList.push(targetItem)
      this.lists[targetIdx].numberList.splice(this.lists[targetIdx].numberList.indexOf(targetItem), 1)
    }
  }
}
</script>
