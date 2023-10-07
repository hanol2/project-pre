/* User와 관련된 Router 모음 
    - DB와 연결 가능 
    - 기능 : 회원가입, 아이디 중복체크, 로그인, 회원탈퇴, 로그아웃, 회원 검색
    - 작성자 : 김한솔 (23. 09. 19) v11
*/

const express = require('express');
const router = express.Router();
const conn = require('../config/database');

//  회원가입 시 ID 중복체크 
router.post('/checkid', (req, res) => {
    console.log('checkId Router!', req.body);

})

// 회원가입 라우터
router.post('/join', (req, res) => {
    console.log('Join Router!', req.body)

})

module.exports = router; 