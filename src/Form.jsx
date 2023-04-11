import React from 'react';
import { useState } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function App() {

    let [firstName, SetFirstname]=useState("")
    let [lastName, SetLastname]=useState("")
    let [email, SetEmail]=useState("")
    let [password, SetPassword]=useState("")

    const header={"Access-Control-Allow-Origin":"*"};

    let navigate=useNavigate()
    let handlesubmit=(e)=>{
        e.preventDefault();
        axios.post('https://642a6fc900dfa3b54745b08d.mockapi.io/Crud_learn',
            {firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
            header
            })

    //         .then(()=> {
            
    // }
    // )
    };
    let handleshow=(e)=>{
        e.preventDefault()
        navigate("/Read")
    }
  return (
    <div className='maindiv'>
    <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form3Example1' label='First name' onChange={(e)=>{SetFirstname(e.target.value)}} />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' label='Last name' onChange={(e)=>{SetLastname(e.target.value)}} />
        </MDBCol>
      </MDBRow>
      <MDBInput className='mb-4' type='email' id='form3Example3' label='Email address' onChange={(e)=>{SetEmail(e.target.value)}} />
      <MDBInput className='mb-4' type='password' id='form3Example4' label='Password' onChange={(e)=>{SetPassword(e.target.value)}} />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form3Example5'
        label='Subscribe to our newsletter'
        defaultChecked
      />

      <MDBBtn type='submit' className='mb-4' block onClick={handlesubmit}>
        Submit
      </MDBBtn>
      <MDBBtn type='submit' className='mb-4' block onClick={handleshow}>
        show-Data
      </MDBBtn>

      <div className='text-center'>
        <p>
          Not a member? <a href='#!'>Register</a>
        </p>
        <p>or sign up with:</p>

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