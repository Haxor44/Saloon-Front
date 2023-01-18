import React from 'react';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AppBar from './AppBar';
import '../App.css';
import axios from '../api/axios';


const REGISTER_URL = '/api/auth/register';

const Register = () =>{


		const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [cpassword,setCpassword] = useState('');

    const handleSubmit = async (e)=>{
      e.preventDefault();
      //console.log(fname,lname,email,password,cpassword);

      const response = await axios.post(REGISTER_URL, 
        JSON.stringify({fname,lname,email,password}), 
        {
          headers:{'Content-Type':'application/json'},
          withCredentials:true});
      console.log(JSON.stringify(response));
    }

		return(
				<React.Fragment>
				<AppBar/>
				<h2 className="pay-header">Register</h2>
				<Form className="forms">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your first name" onChange={(e)=> setFname(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your last name" onChange={(e)=> setLname(e.target.value)} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword2">
        <Form.Label> Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=> setCpassword  (e.target.value)} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </React.Fragment>
			);
	
}

export default Register;