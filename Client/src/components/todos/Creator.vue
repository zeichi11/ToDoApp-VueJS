<template>
  <div id="add-form__wrapper">
    <div class="add-form__inner">
      <input class="add-form__input"
        :placeholder="formType === 'item' ?
          'Enter a title for this item.' : 'Enter list title'"
      />
      <textarea
        v-if="formType === 'item'"
        class="add-form__textarea"
        placeholder="Enter item contents."
      />
    </div>
    <div class="add-form__flex-inner">
      <div class="add-form__exec">
        <input
          class="add-form__submit"
          type="submit"
          :value="formType === 'item' ? 'Add item' : 'Add list'"
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
export default {
  name: 'Creator',
  props: {
    formType: String,
    closeFormHandler: Function
  },
  data () {
    return {
    }
  },

  created () {
    console.log(this.formType)
  },

  computed: {
  },

  methods: {
  }
}
</script>
