import { COMMAND } from '../../common/constants'

export default function (workspaceModel, board, todoList, command) {
  const { type, value } = command
  if (!type || !value) {
    return;
  }

  switch (type) {
    case COMMAND.TYPE_BOARD:
      break
    case COMMAND.TYPE_TODO_LIST:
      break
    case COMMAND.TYPE_TODO_ITEM:
      break
  }
}