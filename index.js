const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const { User } = require('./models/User')
const config = require('./config/key')

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('Mongo DB Connected...')).catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello World! 머리가 존나게 아프다'))


app.post('/register', (req, res) => {
    

    // 회원가입정보를 client에서 가져오면 Database에 넣어준다.
    const user = new User(req.body)

    user.save((err, doc) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
        user.comparePassword(req.body.password, (err, isMatch) => {

        })
    })
})

app.post('/login', (req, res) => {

    // 요청된 이메일을 데이터베이스에서 있는지 찾는다
    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user){
            return res.json({
                loginSuccess: false,
                message: '제공된 이메일에 해당하는 유저가 없습니다.'
            })
        }
    })

    // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
        if(!isMatch) return res.json({ loginSuccess: false, message: '비밀번호가 틀렸습니다.' })

        // 비밀번호가 맞다면 토큰을 생성하기
        user.generateToken((err, user) => {
            
        })
    })


})


app.listen(port, () => console.log(`Example app listening on port ${port}`))