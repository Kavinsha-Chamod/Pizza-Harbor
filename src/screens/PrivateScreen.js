import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';


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
    </div>
    <h2 style={{fontSize:'35px'}}>Admin Panel</h2>
    <ul className='adminfunctions'>
    <li><Link to='/admin/addpizza'>ADD NEW PIZZA</Link></li>
      <li><Link to='/admin/userslist'>USER LIST</Link></li>
      <li><Link to='/admin/pizzaslist'>PIZZAS LIST</Link></li>
      <li><Link to='/admin/orderslist'>ORDERS LIST</Link></li>
    </ul>
    </div>
    </div>
    
    
  )
}
