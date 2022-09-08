// socket 통신을 위한 채널 모듈

import { Server, Socket } from 'socket.io'
import { Express } from 'express'
import type { Server as HTTPSServer } from "https";
import ActionController from '../controller/actionController'

let _socket: Socket | null = null 

/**
 * send remote Action.
 */
function _sendAction (action: string) {
  if (_socket) {
    _socket.emit('remoteAction', action)
  }
}

/**
 * send Acknowledgement message.
 */
function _sendAck() {
  // action revision 관리 구현 필요
  if (_socket) {
    _socket.emit('ack', 'Acknowledgement message.')
  }
}

/**
 * handle Action.
 */
function _onAction(action: string) {
  console.dir(action)
  
  if (action) {
    _sendAck()

    // const resultAction: string = ActionController.patch(action)
    // _sendAction(resultAction)
  }
}

/**
 * handle socket disconnection.
 */
function _disconnect(reason: string) {
  console.log(`Socket disconnected. ${reason}`)
}

/**
 * handle socket connection.
 */
function _connection(socket: Socket) {
  console.log('Socket connected to client.')
  // namespace, room join 처리 필요
  
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
  initialize: function (httpServer: HTTPSServer) {
    const socketServer = new Server(httpServer)
    socketServer.on('connection', _connection)
  }
}