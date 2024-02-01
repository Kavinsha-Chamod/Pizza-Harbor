import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { registerUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

export default function RegisterScreen() {

  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[cpassword, setCpassword] = useState('')
  const registerstate = useSelector(state => state.registerUserReducer)
  const {error,loading,success} = registerstate
  const dispatch = useDispatch()


  function register(){
    if(!name || !email || !password || !cpassword)
    {
      alert("Cannot be blank")
    }
    else if(password!==cpassword)
    {
      alert("Passwords not matched !")
    }
    else{
      const user={name,email,password}
      console.log(user);
      dispatch(registerUser(user))
    }
  }

  return (
    <div>
      <div className="reg-screen row">
        <div className="col-md-5 mt-2 shadow-lg p-3 mb-5 bg-white rounded">


        {loading && (<Loading/>)}
        {success && (<Success success='User Registered Successfully'/>)}
        {error && (<Error error='Email already registered'/>)}


        <h2 className='text-center'style={{fontSize:'35px'}}>REGISTER</h2>
        <div>
        <input required type="text" placeholder="Enter your Name" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input required type="text" placeholder="Enter your Email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input required type="text" placeholder="Enter your Password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <input required type="text" placeholder="Confirm Password" className="form-control" value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}}/>
        <a className="anchor-tag" href='/login'>Click here to Login</a>
        <button onClick={register} className="btn mt-3">REGISTER</button>
        </div>
        </div>
      </div>
    </div>
  );
}
