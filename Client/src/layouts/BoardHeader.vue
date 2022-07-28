<template>
  <nav class="board-header">
    <div class="board-header__menu">
      <layout-container
        v-for="(layout, layoutIndex) in uiData.layouts"
        :key="layoutIndex"
        :classList="layout.classList"
      >
        <ul class="board-header__menu-list" slot="containerContents">
          <li
            v-for="(content, listIndex) in layout.contents"
            :key="listIndex"
          >
            <button-layout
              v-if="content.type === 'iconLabel' || content.type === 'iconLabelAdd'"
            >
              <icon-label-button
                slot="buttonLayout"
                :classList="content.classList"
                :buttons="content.buttons"
              />
            </button-layout>
            <drop-down-layout
              v-if="content.type === 'dropdown'"
            >
              <drop-down-button
                slot="buttonLayout"
                :classList="content.classList"
                :buttons="content.buttons"
              />
            </drop-down-layout>
          </li>
        </ul>
      </layout-container>
    </div>
  </nav>
</template>

<script>
import LayoutContainer from 'componentPath/ui/atoms/LayoutContainer'
import ButtonLayout from 'componentPath/ui/ButtonLayout'
import IconLabelButton from 'componentPath/ui/IconLabelButton'
import IconLabelAddButton from 'componentPath/ui/IconLabelAddButton'
import DropDownLayout from 'componentPath/ui/DropDownLayout'
import DropDownButton from 'componentPath/ui/DropDownButton'

export default {
  components: {
    LayoutContainer,
    ButtonLayout,
    IconLabelButton,
    IconLabelAddButton,
    DropDownLayout,
    DropDownButton
  },
  props: {
    uiData: Object
  },
  data () {
    return {
    }
  },
  computed: {
  },

  methods: {
  }
}
</script>
