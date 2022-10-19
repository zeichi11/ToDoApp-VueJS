
const USER = {
  CREATE_TABLE: `CREATE TABLE user (
    user_idx int primary key auto_increment,
    email varchar(300) unique not null,
    pwd varchar(300) not null,
    nickname varchar(300) not null,
    regdate datetime default now()
  )`
}

const LOG = {
  CREATE_TABLE: `CREATE TABLE log (
    user_idx int primary key
    last_login_date datetime default now() 
  )`
}


export { USER, LOG }