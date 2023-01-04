import ActionCommand from '../../action/actionCommand'
import { CommandType, ValueType } from './command.type'

export default class Command {
  _actionCommand: ActionCommand | null = null
  _listId: string = ''
  _type: string = ''
  _value: any = {}
  _offset: [number] = [-1. -1]
  
  constructor(actionCommand: ActionCommand) {
    if (!actionCommand) {
      throw new Error(`[Todo-server] Command constructor. invalid actionCommand.`)
    }

    this._actionCommand = actionCommand
    this._listId = actionCommand.listId
    this._type = actionCommand.type
    this._value = actionCommand.value
    this._offset = actionCommand.offset
  }

  execute () {
    console.error('[Todo-Server] Command.execute function must be override.')
  }
}