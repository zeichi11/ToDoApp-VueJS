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
                :iconClickHandler="workspaceBtn().handleIconClick"
                :labelClickHandler="workspaceBtn().handleLabelClick"
                :iconSrc="workspaceBtn().iconSrc"
                :label="workspaceBtn().labelStr"
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
import BaseContainer from './ui/atoms/BaseContainer'
import BaseButton from './ui/atoms/BaseButton'
import BaseLabel from './ui/atoms/BaseLabel'
import BaseIconLabel from './ui/BaseIconLabel'
import BaseIconLabelMore from './ui/BaseIconLabelMore'

export default {
  components: {
    BaseContainer,
    BaseButton,
    BaseLabel,
    BaseIconLabel,
    BaseIconLabelMore
  },

  data () {
    return {
      
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
    },
    UiMetaData () {
      return {
      }
    }
    workspaceBtn () {
      return {
        type: 'iconLabel'
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
      }
    },
    membersBtn () {
      return {
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
      }
    },
    settingsBtn () {
      return {
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
}
</script>
