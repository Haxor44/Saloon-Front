import React from 'react';
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AppBar from './AppBar';
import axios from '../api/axios';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const LOGIN_URL='/api/auth/login';

 const Login = () =>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const {setAuth} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
   

    const handleSubmit1 = async (e)=> {
        e.preventDefault();
      
          const response = axios.post(LOGIN_URL,
            JSON.stringify({email,password}),
            {
              headers:{'Content-Type':'application/json'},
              withCredentials:true
            });
          console.log(email);
          console.log(JSON.stringify(response));
          setAuth({email,password});
               
        
    }

    
    return(
        <React.Fragment>
        <AppBar/>
        <h2 className="pay-header">Login</h2>
        <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(e)=> setPassword(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit1}>
        Submit
      </Button>
    </Form>
    </React.Fragment>
      );
  
}

export default Login;