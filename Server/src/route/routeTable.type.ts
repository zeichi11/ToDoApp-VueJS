import { Router } from 'express'

export interface RouteTableType {
  [key: string]: Router;
  readonly '/user': Router;
  readonly '/workspace': Router;
  readonly '/todos': Router;
}