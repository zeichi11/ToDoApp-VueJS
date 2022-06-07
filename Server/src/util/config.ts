import path from 'path'
import fs from 'fs'
import { configType } from '../interface'

const DEFAULT_CONFIG: configType = {
  port: '8080'
}

let _configRoot: string,
  _configPath: string,
  _env: string | undefined

/**
 * init
 */
function initialize() {
  _env = process.env.NODE_ENV
  _configRoot = path.join(process.cwd(), '../config')
  _configPath = path.join(_configRoot, `${_env}.config.json`)
}

/**
 * load config json
 * @returns configType
 */
function loadConfig(): configType {
  initialize()

  let configData = DEFAULT_CONFIG;

  if (_configPath) {
    if (fs.existsSync(_configPath)) {
      const configFile = fs.readFileSync(_configPath, 'utf8')
      configData = JSON.parse(configFile)
    }
  }
  return configData
}

export default loadConfig()