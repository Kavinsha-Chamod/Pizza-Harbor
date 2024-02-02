
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, Route, Router} from 'react-router-dom';
import Editpizza from './Editpizza';


export default function PrivateScreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(()=>{
    if(!currentUser.isAdmin)
    {
      window.location.href='/'
    }
  },[])
  return (
    <div>
    <div className='row'>
    <div className='col-md-10'>
    
    <h2 style={{fontSize:'35px'}}>ADMIN PANEL</h2>
    <ul className='adminfunctions'>
    <li><a href='/admin/addpizza'>ADD NEW PIZZA</a></li>
      <li><a href='/admin/userslist'>USER LIST</a></li>
      <li><a href='/admin/pizzaslist'>PIZZAS LIST</a></li>
      <li><a href='/admin/orderslist'>ORDERS LIST</a></li>
    </ul>
    </div>
    </div>
    </div>
  )
}
