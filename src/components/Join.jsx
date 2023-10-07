import React from 'react'
import { Form, Button } from 'react-bootstrap';

const Join = () => {

  const handleJoin=()=>{
    console.log('handleJoin Router!')
  }

  const checkId=()=>{
    console.log('handleJoin Router!')
  }


  return (
    <div>
      <h1>회원가입</h1>
      <hr />
      <Form onSubmit={handleJoin}>
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Enter Id" />
        </Form.Group>

        <div className='d-grid gap-2 mb-3'>
        <Button variant='light' onClick={checkId}>중복체크</Button>
          <span  style = {{color : 'red'}}></span>

        </div>
        <Form.Group className="mb-3" controlId="formBasicPw1">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="Enter Password"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPw2">
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
          <span style = {{color : 'red'}}></span>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일주소</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>

        <div className='d-grid gap-2 mb-3'>
        <Button variant='info' type='submit'>회원가입</Button>
        </div>

      </Form>
    </div>
  )
}

export default Join