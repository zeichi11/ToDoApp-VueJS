import express ,{ Request, Response } from 'express';
import AuthService from '../service';

const app = express();

/**
 * get
 * @param req 
 * @param res 
 */
export async function get (req: Request, res: Response): Promise<void> {
  const email: String = req.query.user_email as String
  const userName: String = req.query.user_name as String
  let result: boolean = false
  let statusCode: number = 200

  try {
    if (userName && email) {
      result = await AuthService.get(email, userName)
    } else {
      console.error('[Auth-Server] Request data error.')
      statusCode = 500
    }
  } catch (e) {
    console.error(`[Auth-Server] Server Error. ${e.message}`)
    statusCode = 500

  } finally {
    res.status(statusCode).send({
      result
    })
  }
}

export async function info (req: Request, res: Response): Promise<void> {
  // info
}

export async function singIn (req: Request, res: Response): Promise<void> {
  const email: String = req.query.user_email as String
  const pwd: String = req.query.user_password as String
  const nickName: String = req.query.user_name as String
  let result: any = false
  let statusCode: number = 200

  try {
    if (nickName && email && pwd) {
      result = await AuthService.signUp(email, pwd, nickName)
    } else {
      console.error('[Auth-Server] Request data error.')
      statusCode = 500
    }
  } catch (e) {
    console.error(`[Auth-Server] Server Error. ${e.message}`)
    statusCode = 500

  } finally {
    res.status(statusCode).send({
      result
    })
  }
}

/**
 * sign up
 * @param req 
 * @param res 
 */
export async function signUp (req: Request, res: Response): Promise<void> {
  const email: String = req.query.user_email as String
  const pwd: String = req.query.user_password as String
  const nickName: String = req.query.user_name as String
  let result: any = false
  let statusCode: number = 200

  try {
    if (nickName && email && pwd) {
      result = await AuthService.signUp(email, pwd, nickName)
    } else {
      console.error('[Auth-Server] Request data error.')
      statusCode = 500
    }
  } catch (e) {
    console.error(`[Auth-Server] Server Error. ${e.message}`)
    statusCode = 500

  } finally {
    res.status(statusCode).send({
      result
    })
  }
}
  

app.post('/test', async(req: Request, res: Response)=>{    
    const userName: String = req.query.user_name as String;
    const userEmail: String = req.body.user_email;
    const userPassword: String = req.body.user_password;
    
    try {
        const result:any = await searchUser(userEmail, userPassword, userName)
        // console.log(result.rows);
        // console.log(result.rowCount);
        if(result.rowCount > 0){
            res.status(200).send({
                success: true,
                result : result.rows
            })
        }else{
            res.status(400).send({
                success: false,
                message: "Resource Null"
            })
        } 
    } catch (err) {      
        console.error("post /test",err);
        res.status(500).send({
            success: false,
            message: "Server Error"
        })
    }
})