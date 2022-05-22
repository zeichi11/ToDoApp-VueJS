<template>
  <div class="todo-app">

    <div class="todo-app__actions">
      <div class="filters">
        <router-link
          to="/todos/all"
          tag="button">
            {{ RESOURCES.ALL_ITEMS }} ( {{ totalCount }} )
        </router-link>
        <router-link
          to="/todos/active"
          tag="button">
            {{ RESOURCES.ACTIVE_ITEMS }} ( {{ activeCount }} )
        </router-link>
        <router-link
          to="/todos/completed"
          tag="button">
            {{ RESOURCES.COMPLETED_ITEMS }} ( {{ completedCount }} )
        </router-link>
      </div>

      <div class="actions clearfix">
        <div class="float--left">
          <label :title="RESOURCES.SELECT_ALL">
            <input
              v-model="allDone"
              type="checkbox" />
            <span class="icon">
              <i class="material-icons">done_all</i>
            </span>
          </label>

        </div>
        <div class="float--right">
          <button
            class="btn btn--danger"
            :title="RESOURCES.CLEAR_COMPLETED_ITEMS"
            @click="clearComplete">

            <i class="material-icons">delete_sweep</i>
          </button>
        </div>

      </div>
    </div>

    <div class="todo-app__list">
      <todo-item
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
      />
    </div>

    <todo-creator class="todo-app__creator"/>

  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'; // store의 state와 getters의 바인딩을 지원하는 helpers
import TodoCreator from 'componentPath/Creator.vue';
import TodoItem from 'componentPath/Item.vue';
import { RESOURCES, DEFAULTS } from 'commonPath/Constants.js';

export default {
  components: {
    TodoCreator,
    TodoItem
  },
  data () {
    return {
      filter: DEFAULTS.ITEM_FILTER_ALL
    };
  },

  computed: {
    // Helpers - mapState
    // computed 객체에 store의 state를 바인딩한다. (this 객체로 store의 data를 접근하기 위한 방법)
    // 첫번째 인자 : namespace(없는 경우 생략-두번째 인자만 전달), 두번째 인자 : 바인딩 타겟 data 리스트
    ...mapState('todoApp', [
      'todos'
    ]),
    // Helpers - mapGetters
    // computed 객체에 store의 getters를 바인딩한다. (this 객체로 store의 getters 메소드를 접근하기 위한 방법)
    // 첫번째 인자 : namespace(없는 경우 생략-두번째 인자만 전달), 두번째 인자 : 바인딩 타겟 data 리스트
    ...mapGetters('todoApp', [
      'totalCount',
      'activeCount',
      'completedCount',
      'filteredTodos'
    ]),
    RESOURCES () {
      return RESOURCES;
    },
    DEFAULTS () {
      return DEFAULTS;
    },
    // ** store의 data를 this 객체로 접근하기 위한 방법 **
    // todos () {
    //   return this.$store.state.todoApp.todos;
    // },
    allDone: {
      get () {
        // 전체 아이템 수와 완료된 아이템 수가 같은 경우 모두 완료되었다고 판단한다.
        return this.totalCount > 0 && this.totalCount === this.completedCount;
      },
      set (checked) {
        this.completeAll(checked);
      }
    }
  },
  created () {
    this.initDB();
  },

  methods: {
    // Helpers - mapActions
    // methods 객체에 store의 actions를 바인딩한다. (this 객체로 store의 actions를 접근하기 위한 방법)
    // 첫번째 인자 : namespace(없는 경우 생략-두번째 인자만 전달), 두번째 인자 : 바인딩 타겟 data 리스트
    ...mapActions('todoApp', [
      'initDB',
      'completeAll',
      'clearComplete'
    ]),
    // Helpers - mapMutations
    // methods 객체에 store의 mutations를 바인딩한다. (this 객체로 store의 mutations를 접근하기 위한 방법)
    // 첫번째 인자 : namespace(없는 경우 생략-두번째 인자만 전달), 두번째 인자 : 바인딩 타겟 data 리스트
    ...mapMutations('todoApp', [
      'updateFilter'
    ]),

    /**
     * set filter type
     * @param {string} filter
     */
    changeFilter (filter) {
      this.filter = filter;
    }
  },
  // 특정 정보가 업데이트 시 실행되는 함수 그룹
  watch: {
    // this.$route에 대한 watch 메소드
    $route () {
      // this.$store.commit('todoApp/updateFilter', this.$route.params.id);
      this.updateFilter(this.$route.params.id); // mapMutations
    }
  }
};
</script>

<style lang="scss">
  @import "../scss/style";

  .filters button.router-link-active {
    background: royalblue;
    color: white;
  }
</style>
