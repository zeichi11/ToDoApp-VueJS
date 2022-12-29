import Engine from '../core/engine'
import ActionCommand from '../action/actionCommand'

function _executeAction (actionCommand: ActionCommand) {
  const boardId = actionCommand.getBoardId()
  const engine = new Engine(boardId, actionCommand)

  try {
    engine.doWork()
  } catch (e: any) {
    console.error('[ActionController] executeAction error.')    
  }
}

export default {
  patch: function (action: any) {
    action && _executeAction(action)
  }
}