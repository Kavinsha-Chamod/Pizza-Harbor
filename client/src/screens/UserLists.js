import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {deleteUser, getAllUsers} from '../actions/userActions'
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function UserLists() {

  const dispatch = useDispatch()
  const userstate = useSelector(state => state.getAllUsersReducer)
  const {error, loading, users} = userstate
  useEffect(() =>{
    dispatch(getAllUsers())
  },[])
  return (
    <div>
      <h2>USERS LIST</h2>
     <div className='ttable'>
     <table className='table table-border'>
     <thead>
     <tr>
     <th>User Id</th>
     <th>Name</th>
     <th>Email</th>
     <th>Delete</th>
     </tr>
     </thead>
     <tbody>
     {users && users.map(user=>{
      return <tr>
      <td>{user._id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td><i className='fa fa-trash' onClick={()=>dispatch(deleteUser(user._id))}></i></td>
      </tr>
     })}
     </tbody>
     </table>
     </div>
     {loading && (<Loading/>)}
     {error && (<Error error="Something went wrong !"/>)}
    </div>
  )
}
