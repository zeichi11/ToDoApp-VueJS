import WorkspaceController from '../../workspace/controller/workspaceController'

function _executeAction(action: any) {
  WorkspaceController.execute(action)
}

function _patch(action: any) {
  action && _executeAction(action)
}

export default {
  patch: function (action: any) {
    _patch(action)
  }
}