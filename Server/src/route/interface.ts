import { Router } from 'express'

export interface RouteTableType {
  readonly '/user': Router;
  readonly '/dashboard': Router;
  readonly '/todos': Router;
}