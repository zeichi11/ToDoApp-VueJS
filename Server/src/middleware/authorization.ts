
import { Request, Response } from 'express'

export function isValidRequest (req: Request, res: Response, next: Function): boolean {
  // 토큰 인증 검사
  next()
  // 임시
  return true;
}