import { CommandType, ValueType } from './command.type'

export default class Command {
  _commandModel: CommandType | null = null
  
  constructor(commandStr: string) {
    this._commandModel = JSON.parse(commandStr)
  }

  /**
   * get command type
   */
  getType(): string {
    return this._commandModel? this._commandModel.type : ''
  }

  /**
   * get list index
   */
  getListIndex(): number {
    return this._commandModel? this._commandModel.listIndex : -1
  }

  /**
   * get command value
   */
  getCommandValue(): ValueType {
    return this._commandModel ? this._commandModel.value : {
      v: ''
    }
  }
}