
import { Request, Response } from 'express'

export default function (req: Request, res: Response, next: Function) {
  // 토큰 인증 검사
  next()
}