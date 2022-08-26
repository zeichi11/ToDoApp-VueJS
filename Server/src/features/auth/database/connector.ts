import { Pool } from 'pg'
import { env } from 'process'

export const connection = new Pool({
  host: env.sql.host,                             // 'localhost'
  database: env.sql.database,                     // 'auth'
  user: env.sql.user,                             // 'root'
  password: env.sql.password,                     // 'root'
  port: env.sql.port,                             // 5432
  max: env.sql.maxPoolSize,                       // 20
  idleTimeoutMillis: env.sql.idleTimeout,         // 30000
  connectionTimeoutMillis: env.sql.timeoutMillis  // 2000
})