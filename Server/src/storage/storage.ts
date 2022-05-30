import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/test')

const db = mongoose.connection;

db.on('error', () => {
  console.log('Connection Failed')
})

db.once('open', () => {
  console.log('Connected!')
})

// Schema 생성
const userSchema = mongoose.Schema({
  name: 'string',
  age: 'number',
})

// 정의된 스키마를 객체처럼 사용할 수 있도록 변환
const User = mongoose.model('Schema', userSchema);
const newUser = new User({
  name: 'zeichi',
  age: '36'
})

// 데이터 저장
newUser.save(function(error, data){
    if (error) {
        console.log(error);
    } else {
        console.log('Saved!')
    }
});

// User 전체 데이터 가져오기
User.find(function(error, users){
    console.log('--- Read all ---');
    if(error){
        console.log(error);
    }else{
        console.log(users);
    }
})

