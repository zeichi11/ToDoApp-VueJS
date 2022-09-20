import { Pool } from 'pg'
import { ENV } from '../../../config/config'

const {
  HOST, AUTH_DB, USER, PASSWORD, PORT,
  MAX_POOL_SIZE, IDEL_TIMEOUT_MILLIS, TIMEOUT_MILLIS
} = ENV.PGSQL

export const connection = new Pool({
  host: HOST,
  database: AUTH_DB,
  user: USER,
  password: PASSWORD,
  port: Number(PORT),
  max: Number(MAX_POOL_SIZE),
  idleTimeoutMillis: Number(IDEL_TIMEOUT_MILLIS),
  connectionTimeoutMillis: Number(TIMEOUT_MILLIS)
})