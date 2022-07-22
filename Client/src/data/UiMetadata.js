import { LABEL_STR } from './nls/General.js'
import IconData from './googleIcon/MaterialSymbolOutlined.js'

const NAVIGATOR = {
  layouts: [
    {
      name: 'leftNavContainer',
      lists: [
        // home button
        {
          ui: 'button',
          type: 'label',
          label: LABEL_STR.HOME
        },
        // workspace dropdown menu
        {
          ui: 'button',
          type: 'labelDropdown',
          label: LABEL_STR.WORKSPACE
        },
        // reccent dropdown menu
        {
          ui: 'button',
          type: 'labelDropdown',
          label: LABEL_STR.RECENT
        },
        // template dropdown menu
        {
          ui: 'button',
          type: 'labelDropdown',
          label: LABEL_STR.TEMPLATE
        },
        // create label button
        {
          ui: 'button',
          type: 'label',
          label: LABEL_STR.CREATE
        }
      ]
    },
    {
      name: 'rightNavContainer',
      lists: [
        // searchBar
        {
          ui: 'searchBar',
          label: LABEL_STR.SEARCH
        },
        // user Button
        {
          ui: 'button',
          type: 'icon',
          icon: {
            type: IconData.type,
            value: IconData.account
          }
        }
      ]
    }
  ]
}

const BOARD_HEADER = {
  layouts: [
    {
      name: 'letfBoardMenuContainer',
      lists: [
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
      name: 'rightBoardMenuContainer',
      lists: [
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
      name: 'sidebar-menu-container',
      lists: [
        // workspace button
        {
          name: 'sidebar-menu__workspace',
          ui: 'button',
          type: 'iconLabel',
          icon: {
            type: IconData.type,
            value: IconData.workspace
          },
          label: LABEL_STR.WORKSPACE
        },
        // members button
        {
          name: 'sidebar-menu__members',
          ui: 'button',
          type: 'iconLabelAdd',
          icon: {
            type: IconData.type,
            value: IconData.members
          },
          label: LABEL_STR.MEMBERS
        },
        // settings button
        {
          name: 'sidebar-menu__settings',
          type: 'iconLabel',
          icon: {
            type: IconData.type,
            value: IconData.settings
          },
          label: LABEL_STR.SETTINGS
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
