const { User } = require('../models/User');

let auth =(req, res, next) => {
 
    // 인증 처리
     
    // 클라이언트 쿠키 토큰
    let token = req.cookies.x_auth;
    // 토큰 복호화 유저 검색
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) throw res.json({isAuth: false, error: true })

        req.token = token;
        req.user = user;
        next();
    })
    // 유저 존재 인증

    // 유지 비존재 비인증
}



module.exports = { auth };