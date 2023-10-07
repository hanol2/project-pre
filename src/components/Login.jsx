import React from 'react'
import { Form, Button } from 'react-bootstrap';

const Login = () => {

  /** 로그인 로직 실행 함수 */


        /*sessionStorage 
        원래 로그인을 할 때는 보안상 서버에 있는 세션을 이용하는게 좋음 
        axios.post ==> session File 생성 ===> 

        다만, sessionStorage를 아직 사용해보지 않아서, 한번 사용해보고자 여기서는 session을 sessionStorage로 사용할거임 

        난이도로 따지면 
        서버 세션 > sessionStorage 

        보안 
        서버 세션 > sessionStorage 

        프로젝트때, 급함 => sessionStorage 
        현업에 나가서? XXXXXX
        
        1) 세션에 값 등록 : sessionStorage.setItem('key', 'value')
        2) 세션에 있는 값 가져오기 : sessionStorage.getItem('key')
        3) 세션 값 삭제하기 : sessionStorage.removeItem('key')

        1-2) 세션에 값을 객체형태로 등록하기 : 
            sessionStorage.setItem('key', JSON.stringify(object));

        2-2) 세션에 있는 객체를 가져오기 :
            JSON.parse(sessionStorage.getItem('key'));
        */
        
  return (
    <div>
      <h1>로그인</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicID">
          <Form.Label>ID</Form.Label>
          <Form.Control type="id" placeholder="Enter id"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>


        <div className='d-grid gap mb-3'>
          <Button variant="info" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Login