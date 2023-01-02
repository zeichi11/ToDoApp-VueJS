import ActionCommand from '../../action/actionCommand'
import { COMMAND } from '../../common/constants'

interface ActionProps {
  listId: string,
  type: string,
  value: any,
  offset: [number, number]
}

export default function (actionCommand: ActionCommand) {
  const { listId, type, value, offset }:  = actionCommand

  if (!type || !value) {
    return false
  }

  try {
    switch (type) {
      case COMMAND.TYPE_BOARD:
        break
      case COMMAND.TYPE_TODO_LIST:
        break
      case COMMAND.TYPE_TODO_ITEM:
        break
    }
  } catch (e) {
    console.error(`[Todo-Server: updateCommand] ${actionCommand.toString()}`)
    return false
  } 
  
  return true
}