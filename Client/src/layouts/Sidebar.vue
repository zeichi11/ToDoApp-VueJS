<template>
  <nav class="board__sidebar slide-in">
    <div class="icon-wrap"
      @mouseup="slideSidebar"
    >
      <span class></span>
    </div>
    <div class="sidebar-menu">
      <layout-container
        v-for="(layout, layoutIndex) in uiData.layouts"
        :key="layoutIndex"
        :classList="[layout.name]"
      >
        <ul slot="containerContents">
          <li
            v-for="(list, listIndex) in layout.lists"
            :key="listIndex"
          >
            <base-button>
              <icon-label-button
                v-if="list.type === 'iconLabel'"
                slot="buttonLayout"
                :classList="[list.name]"
                :label="list.label"
                :icon="list.icon"
              />
              <label-button
                v-else-if="list.type === 'label'"
                slot="buttonLayout"
                :classList="[list.name]"
                :label="list.label"
              />
              <icon-button
                v-else-if="list.type === 'icon'"
                slot="buttonLayout"
                :classList="[list.name]"
                :icon="list.icon"
              />
            </base-button>
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
import BaseButton from 'componentPath/ui/atoms/Button'
import LabelButton from 'componentPath/ui/atoms/BaseLabel'
import IconButton from 'componentPath/ui/atoms/BaseIcon'
import IconLabelButton from 'componentPath/ui/IconLabelButton'
import IconLabelMoreButton from 'componentPath/ui/IconLabelMoreButton'

export default {
  components: {
    LayoutContainer,
    BaseButton,
    LabelButton,
    IconButton,
    IconLabelButton,
    IconLabelMoreButton
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
