<template>
  <nav class="header__navigator">
    <layout-container
      :classList="['navigator-menu__home-container']">
      <button-layout slot="containerContents">
        <icon-label-button
          slot="buttonLayout"
          :classList="['home-button']"
          :buttons="[{
            label: 'TodoApp',
            icon: {
              type: 'googleMaterial',
              value: 'dashboard'
            }
          }]"
        />
      </button-layout>
    </layout-container>
    <layout-container
      v-for="(layout, layoutIndex) in uiData.layouts"
      :key="layoutIndex"
      :classList="layout.classList"
    >
      <ul class="navigator-menu__list" slot="containerContents">
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
  </nav>
</template>

<script>
import LayoutContainer from 'componentPath/ui/atoms/LayoutContainer'
import DropDownLayout from 'componentPath/ui/DropDownLayout'
import DropDownButton from 'componentPath/ui/DropDownButton'
import ButtonLayout from 'componentPath/ui/ButtonLayout'
import IconLabelButton from 'componentPath/ui/IconLabelButton'

export default {
  components: {
    LayoutContainer,
    DropDownLayout,
    DropDownButton,
    ButtonLayout,
    IconLabelButton
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
