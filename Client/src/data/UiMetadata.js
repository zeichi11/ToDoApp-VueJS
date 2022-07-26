import { LABEL_STR } from './nls/General.js'
import IconData from './googleIcon/MaterialSymbolOutlined.js'

const PRESET = {
  icon: {
    expandMoreIcon: {
      type: IconData.type,
      value: IconData.expandMore
    },
    expandLessIcon: {
      type: IconData.type,
      value: IconData.expandLess
    }
  }
}

const NAVIGATOR = {
  layouts: [
    {
      classList: ['nav-left-container'],
      contents: [
        // home button
        {
          classList: ['nav-home'],
          ui: 'oneButton',
          type: 'iconLabel',
          buttons: [
            {
              label: LABEL_STR.HOME
            }
          ]
        },
        // workspace dropdown menu
        {
          ui: 'button',
          type: 'dropdown',
          buttons: [
            {
              label: LABEL_STR.WORKSPACE,
              expandMoreIcon: PRESET.icon.expandMoreIcon,
              expandLessIcon: PRESET.icon.expandLessIcon
            }
          ]
        },
        // reccent dropdown menu
        {
          ui: 'button',
          type: 'dropdown',
          buttons: [
            {
              label: LABEL_STR.RECENT,
              expandMoreIcon: PRESET.icon.expandMoreIcon,
              expandLessIcon: PRESET.icon.expandLessIcon
            }
          ]
        },
        // template dropdown menu
        {
          ui: 'button',
          type: 'dropdown',
          buttons: [
            {
              label: LABEL_STR.TEMPLATE,
              expandMoreIcon: PRESET.icon.expandMoreIcon,
              expandLessIcon: PRESET.icon.expandLessIcon
            }
          ]
        },
        // create label button
        {
          ui: 'button',
          type: 'dropdown',
          buttons: [
            {
              label: LABEL_STR.CREATE,
              expandMoreIcon: PRESET.icon.expandMoreIcon,
              expandLessIcon: PRESET.icon.expandLessIcon
            }
          ]
        }
      ]
    },
    {
      classList: ['nav-right-container'],
      contents: [
        // searchBar
        {
          ui: 'searchBar',
          label: LABEL_STR.SEARCH
        },
        // user Button
        {
          ui: 'button',
          type: 'iconLabel',
          buttons: [
            {
              icon: {
                type: IconData.type,
                value: IconData.workspaces
              }
            }
          ]
        }
      ]
    }
  ]
}

const BOARD_HEADER = {
  layouts: [
    {
      classList: ['board-header__left-container'],
      contents: [
        // board name button - 클릭 시 보드 이름 편집 모드(input)
        {
          ui: 'button',
          type: 'label',
          label: '$$BoardName$$'
        },
        // bookmark button - 즐겨찾기
        {
          ui: 'button',
          type: 'icon',
          icon: {
            type: IconData.type,
            value: IconData.bookmark
          }
        },
        // private button
        {
          ui: 'button',
          type: 'iconLabel',
          icon: {
            type: IconData.type,
            value: IconData.private
          },
          label: LABEL_STR.PRIVATE
        },
        // share to other user button(add user+)
        {
          ui: 'button',
          type: 'iconLabel',
          icon: {
            type: IconData.type,
            value: IconData.addUser
          },
          label: LABEL_STR.SHARE
        },
        // share button(make url link)
        {
          ui: 'button',
          type: 'icon',
          icon: {
            type: IconData.type,
            value: IconData.share
          }
        }
      ]
    },
    {
      classList: ['board-header__right-container'],
      contents: [
        // filter button
        {
          ui: 'button',
          type: 'iconLabel',
          icon: {
            type: IconData.type,
            value: IconData.filter
          },
          label: LABEL_STR.FILTER
        },
        // show menu button(보드 배경색 및 색상 편집, 최근 편집 내역,  )
        {
          ui: 'button',
          type: 'iconLabel',
          icon: {
            type: IconData.type,
            value: IconData.moreHriz
          },
          label: LABEL_STR.SHOW_MENU
        }
      ]
    }
  ]
}

const SIDEBAR = {
  layouts: [
    {
      classList: ['sidebar-menu-container'],
      contents: [
        // workspace button
        {
          classList: ['sidebar-menu__workspace'],
          ui: 'oneButton',
          type: 'iconLabel',
          buttons: [
            {
              label: LABEL_STR.WORKSPACE,
              icon: {
                type: IconData.type,
                value: IconData.workspaces
              }
            }
          ]
        },
        // members button
        {
          classList: ['sidebar-menu__members'],
          ui: 'twobutton',
          type: 'iconLabelAdd',
          buttons: [
            {
              icon: {
                type: IconData.type,
                value: IconData.members
              },
              label: LABEL_STR.MEMBERS
            },
            {
              icon: {
                type: IconData.type,
                value: IconData.add
              },
              options: ['hover']
            }
          ]
        },
        // settings button
        {
          classList: ['sidebar-menu__settings'],
          ui: 'button',
          type: 'dropdown',
          buttons: [
            {
              icon: {
                type: IconData.type,
                value: IconData.settings
              },
              label: LABEL_STR.SETTINGS,
              expandMoreIcon: {
                type: IconData.type,
                value: IconData.expandMore
              },
              expandLessIcon: {
                type: IconData.type,
                value: IconData.expandLess
              }
            }
          ]
        }
      ]
    }
  ]
}

const UI_STRUCT = {
  NAVIGATOR,
  BOARD_HEADER,
  SIDEBAR
}

export { UI_STRUCT, NAVIGATOR, BOARD_HEADER, SIDEBAR }
