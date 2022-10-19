import { connection } from '../database/connector'
import MybatisMapper from 'mybatis-mapper'
import { USER } from '../database/sql/sqlQuery'

MybatisMapper.createMapper(['../database/sql/sql.xml'])
const queryFormat = { language: 'sql', indet: '  ' }

export async function initUser () {
    // const  
}

export async function createUserTable () {
  const postdb = await connection.connect()
  const param = { query: USER.CREATE_TABLE };
  const query = MybatisMapper.getStatement('userTable', 'createUserTable', param, queryFormat)

  try {
    return new Promise((resolve, rejects) => {
      postdb.query(query, params, (err, res) => {
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

export async function findUserTable (email: String, pwd: String, userName: String) {
  const postdb = await connection.connect()
  const query = ""
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
  const params = { email }
  const query = MybatisMapper.getStatement('userTable', 'selectUserByEmail', params, queryFormat)
  
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
  const query = ""
  const params = []

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