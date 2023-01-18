import React from 'react';
import AppBar from './AppBar';
import '../styles/payment.css';
import axios from '../api/axios';
import { useState } from 'react'
const BOOKING_URL='/api/book/haircut';
const Payment = () => {

  const [noOfStations,setNoOfStations] = useState();
  const [phone,setPhone] = useState();
  const handleSubmit = async (e)=> {
        e.preventDefault();
      
          const response = axios.post(BOOKING_URL,
            JSON.stringify({noOfStations}),
            {
              headers:{'Content-Type':'application/json'},
              withCredentials:true
            });
         
          console.log(JSON.stringify(response));
          
               
        
    }
  return (
      <React.Fragment>
      <AppBar />
      <h2 className="pay-header">Complete Booking</h2>
        <form action="">
  <div class="input-group">
    <label for="Mpesa">No. Of stations to reserve</label>
    <input id="Mpesa" type="number" onChange={(e)=> setNoOfStations(e.target.value)}/>
  </div> 
  <div class="input-group">
    <label for="number">Phone Number</label>
    <input id="number" type="number" onChange={(e)=> setPhone(e.target.value)}/>
  </div>
  <button type="submit" onClick={handleSubmit}>Pay Via Mpesa</button>
</form>
      </React.Fragment>
    );
}

export default Payment;