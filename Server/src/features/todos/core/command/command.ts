import { CommandType, ValueType } from './command.type'

export default class Command {
  _commandModel: CommandType | null = null

  constructor(commandStr: string) {
    this._commandModel = JSON.parse(commandStr)
  }

  /**
   * get command
   */
  get cmd(): string {
    return this._commandModel? this._commandModel.cmd : ''
  }

  /**
   * get command type
   */
  get type(): string {
    return this._commandModel? this._commandModel.type : ''
  }

  /**
   * get list index
   */
  get listIndex(): number {
    return this._commandModel? this._commandModel.listIndex : -1
  }

  /**
   * get value
   */
  get value(): ValueType {
    return this._commandModel ? this._commandModel.value : {
      v: ''
    }
  }
}