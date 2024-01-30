import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { loginUser } from "../actions/userActions";
import Error from '../components/Error';
import Loading from '../components/Loading';

export default function LoginScreen() {
  const[email, getEmail] = useState('')
  const[password, getPassword] = useState('')
  const dispatch = useDispatch()
  const loginstate = useSelector(state => state.loginUserReducer)
  const {error,loading} = loginstate

  useEffect(()=>{
      if(localStorage.getItem('currentUser'))
      {
        window.location.href='/'
      }
  },[])

  function login(){
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
    const user={email,password}
      console.log(user);
      dispatch(loginUser(user))
  }
  return (
    <div>
      <div className="reg-screen row">
        <div className="col-md-5 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
        {loading && (<Loading/>)}
        {error && (<Error error='Please try again !'/>)}
        <h2 className='text-center'style={{fontSize:'35px'}}>LOG IN</h2>
        <div>
        <input required type="text" placeholder="Enter your Email" className="form-control" value={email} onChange={(e)=>{getEmail(e.target.value)}}/>
        <input required type="text" placeholder="Enter your Password" className="form-control" value={password} onChange={(e)=>{getPassword(e.target.value)}}/>
        <a className='anchor-tag' href='/register'>Click here to Register</a>
        <button onClick={login} className="btn mt-3">LOG IN</button>
        </div>
        </div>
      </div>
    </div>
  )
}
