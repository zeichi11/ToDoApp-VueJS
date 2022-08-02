<template>
  <nav class="board__sidebar slide-in">
    <div class="icon-wrap"
      @mouseup="slideSidebar"
    >
      <span class></span>
    </div>
    <div class="sidebar-menu">
      <layout-container :classList="['sidebar-menu__board-name']">
        <span slot="containerContents">{{ boardName }}</span>
      </layout-container>
      <div
        class="separate-border"
      />
      <layout-container
        v-for="(layout, layoutIndex) in uiData.layouts"
        :key="layoutIndex"
        :classList="layout.classList"
      >
        <ul
          class="sidebar-menu__list"
          slot="containerContents"
        >
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
    <div>

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
// <nav class="board__sidebar sidebar-close slide-out">
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
  created: function () {
    console.log(this.uiData)
    console.log('--------')
  },
  // ui rendering을 위한 json 모델로 분리, props 정보로 전달받아서 렌더링하도록 처리할 것
  data () {
    return {
      boardName: 'My TodoList 123123123123123123'
      // container: {
      //   workspaceBtn: {
      //     type: 'iconLabel',
      //     iconSrc: 'url',
      //     labelStr: 'Workspace',
      //     eventHandling: {
      //       type: 'twoButton',
      //       handler: [
      //         function () {
      //           console.log('icon clicked')
      //         },
      //         function () {
      //           console.log('label clicked')
      //         }
      //       ]
      //     }
      //   },
      //   memberBtn: {
      //     type: 'iconLabelAdd',
      //     iconSrc: 'url',
      //     labelStr: 'Members',
      //     eventHandling: {
      //       type: 'twoButton',
      //       handler: [
      //         function () {
      //           console.log('icon clicked')
      //         },
      //         function () {
      //           console.log('label clicked')
      //         },
      //         function () {
      //           console.log('add button clicked')
      //         }
      //       ]
      //     }
      //   },
      //   settingBtn: {
      //     type: 'iconLabel',
      //     iconSrc: 'url',
      //     labelStr: 'Settings',
      //     eventHandling: {
      //       type: 'oneButton',
      //       handler: [
      //         function () {
      //           console.log('button clicked')
      //         }
      //       ]
      //     }
      //   }
      // }
    }
  },
  computed: {
  },

  methods: {
    slideSidebar (e) {
      const sidebar = document.querySelector('.board__sidebar')
      if (sidebar) {
        if (sidebar.classList.contains('slide-in')) {
          sidebar.classList.add('sidebar-close')
          sidebar.classList.remove('slide-in')
          sidebar.classList.add('slide-out')
        
        } else {
          sidebar.classList.remove('sidebar-close')
          sidebar.classList.remove('slide-out')
          sidebar.classList.add('slide-in')
        }
      }
    }
  }
}
</script>
