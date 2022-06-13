import Command from './command'
import Workspace from './workspace'

export default class Worker {
  _spaceId: string | null = null
  _command: Command | null = null

  constructor(spaceId: string, commandStr: string) {
    this._spaceId = spaceId
    this._command = new Command(commandStr)
  }

  /**
   * do work
   */
  doWork() {
    if (this._spaceId !== null && this._command !== null) {
      const workspace = new Workspace(this._spaceId)
      if (workspace) {
        try {
          workspace.doCommand(this._command) && workspace.save()
        } catch (e) {
          console.error(e.message)
        }
      }
    }
  }
}

