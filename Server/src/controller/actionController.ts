import WorkspaceController from '../../controller/workspaceController'

function _executeAction(action) {
  WorkspaceController.execute(action)
}

function _patch(action) {
  action && _executeAction(action)
}

export default {
  patch: function (action) {
    _patch(action)
  }
}