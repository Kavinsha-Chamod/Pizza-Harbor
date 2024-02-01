import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { loginUser } from "../actions/userActions";
import Error from '../components/Error';
import Loading from '../components/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function LoginScreen() {
  const[email, getEmail] = useState('')
  const[password, getPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()
  const [aerror, setError] = useState('');
  const loginstate = useSelector(state => state.loginUserReducer)
  const {error,loading} = loginstate

  useEffect(()=>{
      if(localStorage.getItem('currentUser'))
      {
        window.location.href='/'
      }
  },[])

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const validateForm = () => {
    if (!email || !password) {
      setError('Please fill in all fields.');
      return false;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    setError('');
    return true;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const login = () => {
    if (validateForm()) {
      const user={email,password}
      console.log(user);
      dispatch(loginUser(user))
    }
  };

  return (
    <div>
      <div className="reg-screen row">
        <div className="col-md-5 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
         <h2 className='text-center'style={{fontSize:'35px'}}>LOG IN</h2>
         {loading && (<Loading/>)}
        {aerror && <Error error={aerror} />}
        {error && (<Error error='Invalid Credentials !'/>)}
        <div>
        <div>
        <input required type="text" placeholder="Enter your Email" className="form-control" value={email} onChange={(e)=>{getEmail(e.target.value)}}/>
        <input required type={showPassword ? 'text' : 'password'} placeholder="Enter your Password" className="form-control" value={password} onChange={(e)=>{getPassword(e.target.value)}}/>
        <FontAwesomeIcon className='fa-icon' icon={showPassword ? faEyeSlash : faEye} onClick={togglePasswordVisibility} />
        </div>
        <a className='anchor-tag' href='/register'>Click here to Register</a>
        <button onClick={login} className="btn mt-3">LOG IN</button>
        </div>
        </div>
      </div>
    </div>
  )
}
