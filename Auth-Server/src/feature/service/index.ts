import { connection } from '../database/connector'
import MybatisMapper from 'mybatis-mapper'

MybatisMapper.createMapper(['../database/sql/sql.xml'])
const queryFormat = { language: 'sql', indet: '  ' }

export async function initUser () {
    // const  
}

export async function findUserTable (email: String, pwd: String, userName: String) {
  const postdb = await connection.connect()
  const search_User_SQL = ""
  const params = [ email, pwd, userName ]
  try {
    return new Promise((resolve, rejects) => {
      postdb.query(search_User_SQL, params, (err, res) => {
        if (err) {
          rejects(err)
        }
        resolve(res)
      })
    })
  } catch (err) {
    throw err
  } finally {
    postdb.release()
  }
}

export async function findUser (email: String, pwd: String, userName: String) {
  const postdb = await connection.connect()
  const params = { email, pwd, userName }
  const searchUserSQL = MybatisMapper.getStatement('userTable', 'selectUserByEmail', params, queryFormat)
  
  try {
    return new Promise((resolve, rejects) => {
      postdb.query(search_User_SQL, params, (err, res) => {
        if (err) {
          rejects(err)
        }
        resolve(res)
      })
    })
  } catch (err) {
    throw err
  } finally {
    postdb.release()
  }
}

export async function createUser (email: String, pwd: String, userName: String) {
  const postdb = await connection.connect()
  const create_User_SQL = ""
  const params = [email, pwd, userName]

  try {
    return new Promise((resolve, rejects) => {
      postdb.query(create_User_SQL, params, (err, res) => {
        if (err) {
          rejects(err)
        }
        resolve(res)
      })
    })
  } catch (err) {
    throw err
  } finally {
    postdb.release()
  }
}