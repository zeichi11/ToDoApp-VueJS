import { connection } from './connector'

export const searchUser = async(userEmail: String, userPwd: String, userName: String) => {
    const postdb = await connection.connect();
  	const search_User_SQL = "select * from test_user where user_email = $1 and user_password = $2 and user_name = $3";
    const params = [userEmail, userPwd, userName];
    try {        
        return new Promise((resolve, rejects)=>{
            postdb.query(search_User_SQL, params, (err, res)=>{
                if(err){
                    rejects(err);
                }
                resolve(res);
            });
        })
    } catch (err) {
        throw err;
    } finally {
        postdb.release();
    }
}