<template>
  <nav class="header__navigator">
    <div class="navigator-menu">
      <layout-container
        v-for="(layout, layoutIndex) in uiData.layouts"
        :key="layoutIndex"
        :classList="layout.classList"
      >
        <ul slot="containerContents">
          <li
            v-for="(content, listIndex) in layout.contents"
            :key="listIndex"
          >
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
import DropDownLayout from 'componentPath/ui/DropDownLayout'
import DropDownButton from 'componentPath/ui/DropDownButton'

export default {
  components: {
    LayoutContainer,
    DropDownLayout,
    DropDownButton
  },
  props: {
    uiData: Object
  },
  // ui rendering을 위한 json 모델로 분리, props 정보로 전달받아서 렌더링하도록 처리할 것
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
