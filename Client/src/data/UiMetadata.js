export default {
  navigator: {
    layouts: [
      {
        name: 'leftNavContainer',
        list: [
          //home button
          {
            ui: 'button',
            type: 'label',
            labelStr: 'TodoApp'
          },
          //workspace dropdown menu
          {
            ui: 'button',
            type: 'labelDropdown',
            labelStr: 'Workspace'
          },
          //reccent dropdown menu
          {
            ui: 'button',
            type: 'labelDropdown',
            labelStr: 'Recent'
          },
          //template dropdown menu
          {
            ui: 'button',
            type: 'labelDropdown',
            labelStr: 'Template'
          },
          //create label button
          {
            ui: 'button',
            type: 'label',
            labelStr: 'Create'
          }
        ]
      },
      {
        name: 'rightNavContainer',
        list: [
          // searchBar
          {
            ui: 'searchBar',
            labelStr: 'Search'
          },
          // user Button
          {
            ui: 'button',
            type: 'icon',
            iconSrc: 'url'
          }
        ]
      }
    ]
  },
  boardHeader: {
    layouts: [
      {
        name: 'letfBoardMenuContainer',
        list: [
          //board name button - 클릭 시 보드 이름 편집 모드(input)
          {
            ui: 'button',
            type: 'label',
            labelStr: '$$BoardName$$'
          },
          //bookmark button - 즐겨찾기
          {
            ui: 'button',
            type: 'icon',
            icon: {
              type: 'template',
              template: '<span class="material-symbols-outlined">bookmark</span>'
            }
            // icon: {
            //   type: 'url',
            //   src: 'https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/bookmark/default/48px.svg'
            // }
          },
          //private button
          {
            ui: 'button',
            type: 'iconLabel',
            icon: {
              type: 'template',
              template: '<span class="material-symbols-outlined">lock</span>'
            },
            labelStr: 'Private'
          },
          //share to other user button(user+)
          {
            ui: 'button',
            type: 'iconLabel',
            iconSrc: 'url',
            labelStr: 'Share'
          },
          // share button(make url link)
          {
            ui: 'button',
            type: 'icon',
            iconSrc: 'url'
          }
        ]
      },
      {
        list: [
          //filter button
          {
            ui: 'button',
            type: 'iconLabel',
            iconSrc: 'url',
            labelStr: 'filter'
          },
          // show menu button(보드 배경색 및 색상 편집, 최근 편집 내역,  )
          {
            ui: 'button',
            type: 'iconLabel',
            iconSrc: 'url',
            labelStr: 'Show menu'
          }
        ]
      }
    ]
  },

  sidebar: {
    layouts: [
      {
        // name: 'menuContainer',
        list: [
          //workspace button
          {
            ui: 'button',
            type: 'iconLabel',
            iconSrc: 'url',
            labelStr: 'Workspace'
          },
          // members button
          {
            ui: 'button',
            type: 'iconLabelAdd',
            iconSrc: 'url',
            labelStr: 'Members'
          },
          // settings button
          {
            type: 'iconLabel',
            iconSrc: 'url',
            labelStr: 'Settings'
          }
        ]
      }
    ]
  }
}

// workspaceBtn() {
//   return {
//     type: 'iconLabel'
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
//   }
// },
// membersBtn () {
//   return {
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
//   }
// },
// settingsBtn () {
//   return {
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