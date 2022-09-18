import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Navigate, useNavigate } from 'react-router-dom'
// import ReactDOM from 'react-dom'

 function Protected(props) {

    let Cmp = props.Cmp


 const history = useNavigate();
  useEffect(() =>{
    if(!(localStorage.getItem('user-info') || sessionStorage.getItem('manager-info')))
    {
      // history.push("/show")
      // navigate('/create');
      // history("/create");
      history("/login");
    }
}, [])





return (
    <div>
        <Cmp />
    </div>
)

 }

export default Protected