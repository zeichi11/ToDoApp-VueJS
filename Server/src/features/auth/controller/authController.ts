import express ,{ Request, Response } from 'express';
import { searchUser } from '../service';

const app = express();

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