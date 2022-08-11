// import PRESET from './Preset.js'
import { LABEL_STR } from '../nls/General.js'
import IconData from '../googleIcon/MaterialSymbolOutlined.js'

export default {
  NAVIGATOR: {
    layouts: [
      {
        classList: ['navivator-menu__left-container'],
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
          }
        ]
      },
      {
        classList: ['navivator-menu__right-container'],
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
                  value: IconData.account
                }
              }
            ]
          }
        ]
      }
    ]
  }
}
