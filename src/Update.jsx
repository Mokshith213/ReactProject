import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function App(props) {
  let navigate=useNavigate();

  let [firstName,SetFirstName]=useState("")
  let[lastName,SetLastname]=useState("")
  let [email,SetEmail]=useState("")
  let [password,SetPassword]=useState("")
  let [id , Setid]=useState(localStorage.getItem("id"))

  useEffect(()=>{
    SetFirstName(localStorage.getItem("firstName"))
    SetLastname(localStorage.getItem("lastName"))
    SetEmail(localStorage.getItem("email"))
    SetPassword(localStorage.getItem("password"))

  },[])

  // const header={"Access-Control-Allow-Origin":"*"};

  let handleupdate=(e)=>{
    e.preventDefault()
    axios.put(`https://642a6fc900dfa3b54745b08d.mockapi.io/Crud_learn/${id}`,
    {firstName:firstName,
    lastName:lastName,
    email:email,
    password:password,
    // header
    })

    .then(()=> {
    navigate("/Read");
});
  };

  return (

    <div className='maindiv2'>

    {/* <div>{firstName}</div> */}
    <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form3Example1' label='First name' value={firstName} 
          onChange={(e)=>{SetFirstName(e.target.value)}}/>
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' label='Last name' value={lastName} 
          onChange={(e)=>{SetLastname(e.target.value)}}/>
        </MDBCol>
      </MDBRow>
      <MDBInput className='mb-4' type='email' id='form3Example3' label='Email address' value={email}
      onChange={(e)=>{SetEmail(e.target.value)}}/>
      <MDBInput className='mb-4' type='password' id='form3Example4' label='Password' value={password} 
      onChange={(e)=>{SetPassword(e.target.value)}}/>



      <MDBBtn type='submit' className='mb-4' block onClick={handleupdate}>
        Update
      </MDBBtn>

      <div className='text-center'>
        {/* <p>
          Not a member? <a href='#!'>Register</a>
        </p>
        <p>or sign up with:</p> */}

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='google' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </div>
    </form>
    </div>
  );
}