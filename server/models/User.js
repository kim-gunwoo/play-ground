const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');



const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0 
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})


userSchema.pre('save', function (next) {
    var user = this;
    if (user.isModified('password')) {
        //비밀번호를 암호화 
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err)

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err)
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
})

userSchema.methods.comparePassword = function(pwd, callbackFunc){
    bcrypt.compare(pwd, this.password, function(err, isMatched) {
        if(err) return callbackFunc(err)
        callbackFunc(null, isMatched)
    })
}

userSchema.methods.generateToken = function(callbackFunc){
    
    var user = this;

    // jsonwebtoken 으로 token 생성
    var token = jwt.sign(user._id.toHexString(), 'secretToken')

    user.token = token;
    user.save(function(err, user){
        if(err) return callbackFunc(err)
        callbackFunc(null, user)
    })
}

userSchema.statics.findByToken = function(token, callbackFunc){
    var user = this;

    // 토큰을 디코드
    jwt.verify(token, 'secretToken', function(err, decoded){
        // 유저 아이디 이용
        // 클라이언트 토큰과 데이터베이스 토큰과 일치하는지 확인
        user.findOne({"_id": decoded, "token": token}, function (err, user) {
            if(err) return callbackFunc(err);
            callbackFunc(null, user);
        })
    })
}

const User = mongoose.model('User' , userSchema)

module.exports = { User }


