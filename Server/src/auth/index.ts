import * as pg from pg'

const { Poool } = pg 
let _pool = null
let _client = null

async function init () {
  try {
    _pool = new Pool(
      host: 'localhost',
      user: 'root',
      password: 'test',
      database: 'auth',
      port: 5432,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    )
    if (_pool) {
      _client = await _pool.connect((err) => {
        if (err) {
          console.error('Error acquiring client', err.stack)
        }
      })
      if (_client) {
        await _client.query('SELECT NOW()')
        _client.release()
      }
    }
  } catch (e: any) {
    console.error(e);
  }
}

export default {

}



