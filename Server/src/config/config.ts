import dotenv from 'dotenv'
import path from 'path'
import { configType } from './config.type'

const env = process.env.NODE_ENV || "development"
const configFileName = env === "development" ? "dev" : "prod"
const result = dotenv.config({
  path: path.join(__dirname, '../config', `${configFileName}.config.env`)
})

if (result.parsed == undefined) { // .env 파일 parsing 성공 여부 확인
    throw new Error("Cannot loaded environment variables file.") // parsing 실패 시 Throwing
}

const ENV = {
  SERVER: {
    PORT: process.env.PORT,
    CONTEXT: process.env.CONTEXT
  },

  MONGO: {
    PROTOCOL: process.env.MONGO_PROTOCOL,
    HOST: process.env.MONGO_HOST,
    PORT: process.env.MONGO_PORT,
    CONTEXT: process.env.MONGO_CONTEXT,
    USER: process.env.MONGO_USER,
    PASSWORD: process.env.MONGO_PROCESS
  },
  
  PGSQL: {
    HOST: process.env.PGSQL_HOST,
    PORT: process.env.PGSQL_PORT,
    USER: process.env.PGSQL_USER,
    PASSWORD: process.env.PGSQL_PASSWORD,
    AUTH_DB: process.env.PGSQL_AUTH_DB,
    MAX_POOL_SIZE: process.env.PGSQL_MAX_POOL_SIZE,
    IDEL_TIMEOUT_MILLIS: process.env.PGSQL_IDEL_TIMEOUT_MILLIS,
    TIMEOUT_MILLIS: process.env.PGSQL_TIMEOUT_MILLIS
  }
}

export { ENV }


// import path from 'path'
// import fs from 'fs'
// import { configType } from '../interface'

// const DEFAULT_CONFIG: configType = {
//   port: '8080'
// }

// let _configRoot: string,
//   _configPath: string,
//   _env: string | undefined

// /**
//  * init
//  */
// function initialize() {
//   _env = process.env.NODE_ENV
//   _configRoot = path.join(process.cwd(), '../config')
//   _configPath = path.join(_configRoot, `${_env}.config.json`)
// }

// /**
//  * load config json
//  * @returns configType
//  */
// function loadConfig(): configType {
//   initialize()

//   let configData = DEFAULT_CONFIG;

//   if (_configPath) {
//     if (fs.existsSync(_configPath)) {
//       const configFile = fs.readFileSync(_configPath, 'utf8')
//       configData = JSON.parse(configFile)
//     }
//   }
//   return configData
// }

// export default loadConfig()
