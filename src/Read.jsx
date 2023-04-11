import React,{useState,useEffect, Component} from 'react';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Update from './Update';

export default function Read() {

   let navigate=useNavigate()
    const [Data, setData] = useState([]);

    function datafun(){
        axios.get( "https://642a6fc900dfa3b54745b08d.mockapi.io/Crud_learn")
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        })}

        

        function dete(id){
            
            axios.delete(`https://642a6fc900dfa3b54745b08d.mockapi.io/Crud_learn/${id}`)
                        .then(()=>{
                            datafun();
                        })
        }
        useEffect(() => {
            datafun();
        }, [Data]);

  return (
    <div className='read'>
    <MDBTable>
      <MDBTableHead>
        <tr className='headder'>
          <th scope='col'>#ID</th>
          <th scope='col'>First_Name</th>
          <th scope='col'>Last_Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Password</th>
          <th scope='col'></th>
          <th scope='col'></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
            Data.map((e)=>{
                return(
                    <tr>
                    <th scope='row'>{e.id}</th>
                    <td>{e.firstName}</td>
                    <td>{e.lastName}</td>
                    <td>{e.email}</td>
                    <td>{e.password}</td>
                    <td><button className='edit' onClick={(f)=>{
                        f.preventDefault();
                        // <Update data={"hiii"}/>
                       navigate("/Update")
                        localStorage.setItem('firstName',e.firstName)
                        localStorage.setItem("lastName",e.lastName)
                        localStorage.setItem("email",e.email)
                        localStorage.setItem("password",e.password)
                        localStorage.setItem("id",e.id)
                    }}>Edit</button></td>

                    <td><button className='delete' onClick={(rt)=>{
                        rt.preventDefault()
                            dete(e.id)
                    } }>Delete</button></td>
                  </tr>
                );
            })
        }
      </MDBTableBody>
    </MDBTable>
    </div>
  );
}