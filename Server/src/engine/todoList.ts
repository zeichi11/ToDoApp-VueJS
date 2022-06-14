import ListModel from ''


export default class TodoList {
  _listIndex: number = -1
  _listModel: ListModel | null = null

  constructor(listIndex: number) {
    this._listIndex = listIndex
  }

  addItem(content: string) {

  }

  deleteItem (itemIndex: number) {

  }

  modifyItem () {

  }

  changeItemState () {

  }
}