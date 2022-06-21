// socket 통신을 위한 채널 모듈

import { Server } from 'socket.io'
import ActionController from '../controller/actionController'

const _socket = null 

/**
 * send remote Action.
 */
function _sendAction(action) {
  _socket.emit('remoteAction', action)
}

/**
 * send Acknowledgement message.
 */
function _sendAck() {
  // action revision 관리 구현 필요
  _socket.emit('ack', 'Acknowledgement message.')
}

/**
 * handle Action.
 */
function _onAction(action) {
  console.dir(action)
  
  if (action) {
    _sendAck()

    const resultAction = ActionController.patch(action)
    _sendAction(resultAction)
  }
}

/**
 * handle socket disconnection.
 */
function _disconnect(reason) {
  console.log(`Socket disconnected. ${reason}`)
}

/**
 * handle socket connection.
 */
function _connection(socket) {
  console.log('Socket connected to client.')
  
  _socket = socket
  _socket.on('disconnect', _disconnect)
  _socket.on('action', _onAction)
}

/**
 * Bind socket event handler.
 */
function _bindEvent(socketServer: Server) {
  socketServer.on('connection', _connection)
}

export default {
  initialize: function (httpServer) {
    const socketServer = new Server(httpServer)
    socketServer.on('connection', _connection)
  }
}