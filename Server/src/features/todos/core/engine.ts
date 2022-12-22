import Command from './command/command'
import Worker from '../../workspace/controller/workspace'

export default class Engine {
  _spaceId: string | null = null
  _commandStr: string | null = null

  constructor(spaceId: string, commandStr: string) {
    this._spaceId = spaceId
    this._commandStr = commandStr
  }

  /**
   * do work
   */
  doWork() {
    if (this._spaceId !== null && this._commandStr !== null) {
      const worker = new Worker(this._spaceId)
      if (worker) {
        try {
          worker.open()
          worker.doCommand(this._commandStr) && worker.save()
        } catch (e: any) {
          console.error(e.message)
        }
      }
    }
  }
}

