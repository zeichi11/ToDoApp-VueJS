import dotenv from 'dotenv'
import { configType } from './config.type'

/**
 * init
 */
function initialize() {
  // TODO 경로 script 인자로 넘길것 
  const env = process.env.NODE_ENV
  dotenv.config({ path: `/config/${env}.config.env` });
}

/**
 * generate config
 * @returns configType
 */
function generateConfig(): configType {
  initialize()

  const {
    PORT='', CONTEXT='', MONGO_HOST='', MONGO_PORT='',
    MONGO_USER='', MONGO_PASSWORD='', MONGO_CONTEXT=''
  } = process.env

  return {
    PORT, CONTEXT, MONGO_HOST, MONGO_PORT,
    MONGO_USER, MONGO_PASSWORD, MONGO_CONTEXT
  }
}

export default generateConfig()


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
