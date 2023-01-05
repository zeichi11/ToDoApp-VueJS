export default class ActionCommand {
  _action: any
  
  constructor(actionStr: string) {
    actionStr.length && (this._action = JSON.parse(actionStr))
  }

  get boardId () {
    return this._action.boardId
  }

  get listId () {
    return this._action.listId
  }

  get cmd () {
    return this._action.cmd
  }

  get type () {
    return this._action.type
  }

  get value () {
    return this._action.value
  }

  // offset : 배열 형태의 card 위치 [listIndex, cardIndex] - ex) [3, 5]
  get offset () {
    return this._action.offset
  }
}