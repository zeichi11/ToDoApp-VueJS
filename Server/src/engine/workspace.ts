import Board from './board'

export default class Workspace {
  _spaceId: string | null = null
  _board: Board | null = null

  constructor(spaceId: string) {
    this._spaceId = spaceId
  }

  /**
   * open
   */
  open(boardId: string) {
    this._board = new Board(boardId)
  }

  /**
   * save
   */
  save(): boolean {
    return this._board && this._board.save()
  }

  /**
   * do command
   */
  doCommand(command: Command): boolean {
    return this._board && this._board.executeCommand(command)
  }

  /**
   * close
   */
  close() {
    this._board && this._board.close()
  }
}