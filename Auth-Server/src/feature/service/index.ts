import { connection } from '../database/connector'

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
  const search_User_SQL = "select * from test_user where user_email = $1 and user_password = $2 and user_name = $3"
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