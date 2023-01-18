import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import '../styles/home.css';



const Service = () => {

	return(
			<div>
				
				<h1 className="pay-header">Our Services</h1>
				<div className="services">
				<Card className="card" style={{ width: '18rem' }}>
      			<Card.Img variant="top" src={pic3} />
      			<Card.Body>
        			<Card.Title>Get A Clean cut</Card.Title>
        			<Card.Text>
          				Get a nice clean hair cut from our well trained professionals starting at ksk5000.
        			</Card.Text>
        			<Button variant="primary">
        				<Link className="book" to='/payment'>Book Now</Link>
        			</Button>
      			</Card.Body>
    			</Card>

    			<Card style={{ width: '18rem' }}>
      			<Card.Img variant="top" src={pic2} />
      			<Card.Body>
        			<Card.Title>Get a beard trim</Card.Title>
        			<Card.Text>
          				Get a nice beard from our well trained professionals starting at ksk3000.
        			</Card.Text>
        			<Button variant="primary" >
        				<Link className="book" to='/payment'>Book Now</Link>
        			</Button>
      			</Card.Body>
    			</Card>
    			</div>
			</div>
		);
}

export default Service