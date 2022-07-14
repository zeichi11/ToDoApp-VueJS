<template>
  <nav class="board__sidebar slide-in">
    <div class="icon-wrap"
      @mouseup="slideSidebar"
    >
      <span class></span>
    </div>
    <div class="sidebar-menu">
      <base-container>
        <ul slot="containerContents">
          <li>
            <base-button>
              <base-icon-label slot="buttonLayout"
                :classList="['sidebar-menu__workspace']"
                :eventHandling="workspaceBtn.eventHandling"
                :iconSrc="workspaceBtn.iconSrc"
                :label="workspaceBtn.labelStr"
              />
            </base-button>
          </li>
          <li>
            <base-button>
              <base-icon-label-more slot="buttonLayout"
                :classList="['sidebar-menu__member']"
                :eventHandling="memberBtn.eventHandling"
                :iconSrc="memberBtn.iconSrc"
                :label="memberBtn.labelStr"
              />
            </base-button>
          </li>
          <li>
            <base-button>
              <base-icon-label slot="buttonLayout"
                :classList="['sidebar-menu__setting']"
                :eventHandling="settingBtn.eventHandling"
                :iconSrc="settingBtn.iconSrc"
                :label="settingBtn.labelStr"
              />
            </base-button>
          </li>
        </ul>
      </base-container>
      
    </div>
    <div>

    </div>
  </nav>
</template>

<script>
import BaseContainer from 'componentPath/ui/atoms/BaseContainer'
import BaseButton from 'componentPath/ui/atoms/BaseButton'
import BaseLabel from 'componentPath/ui/atoms/BaseLabel'
import BaseIconLabel from 'componentPath/ui/BaseIconLabel'
import BaseIconLabelMore from 'componentPath/ui/BaseIconLabelMore'

export default {
  components: {
    BaseContainer,
    BaseButton,
    BaseLabel,
    BaseIconLabel,
    BaseIconLabelMore
  },

  // ui rendering을 위한 json 모델로 분리, props 정보로 전달받아서 렌더링하도록 처리할 것
  data () {
    return {
      container: {
        workspaceBtn: {
          type: 'iconLabel',
          iconSrc: 'url',
          labelStr: 'Workspace',
          eventHandling: {
            type: 'twoButton',
            handler: [
              function () {
                console.log('icon clicked')
              },
              function () {
                console.log('label clicked')
              }
            ]
          }
        },
        memberBtn: {
          type: 'iconLabelAdd',
          iconSrc: 'url',
          labelStr: 'Members',
          eventHandling: {
            type: 'twoButton',
            handler: [
              function () {
                console.log('icon clicked')
              },
              function () {
                console.log('label clicked')
              },
              function () {
                console.log('add button clicked')
              }
            ]
          }
        },
        settingBtn: {
          type: 'iconLabel',
          iconSrc: 'url',
          labelStr: 'Settings',
          eventHandling: {
            type: 'oneButton',
            handler: [
              function () {
                console.log('button clicked')
              }
            ]
          }
        }
      }
    }
  },
  computed: {
    workspaceBtn () {
      console.log(this.container)
      return this.container.workspaceBtn
    },
    memberBtn () {
      return this.container.memberBtn
    },
    settingBtn () {
      return this.container.settingBtn
    }
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
    },
    UiMetaData () {
      return {
      }
    }
  }
}
</script>
