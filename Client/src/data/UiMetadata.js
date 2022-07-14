
workspaceBtn() {
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