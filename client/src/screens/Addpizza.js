import React, { useState } from 'react'
import { addPizza } from '../actions/pizzaActions'
import {useDispatch, useSelector} from 'react-redux';
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

export default function Addpizza() {
  const[name,setName] = useState('')
  const[regularPrice,setRegularPrice] = useState('')
  const[mediumPrice,setMediumPrice] = useState('')
  const[largePrice,setLargePrice] = useState('')
  const[image,setImage] =useState('')
  const[description,setDescription] =useState('')
  const[category,setCategory] =useState('')

  const dispatch = useDispatch()
  const addpizzastate = useSelector(state=>state.addPizzasReducer)
  const {success,error,loading} = addpizzastate

function formHandler(e){
  e.preventDefault()

  const pizza ={name,image,description,category,prices:{Regular : regularPrice, Medium : mediumPrice, Large : largePrice}
}
console.log(pizza);
dispatch(addPizza(pizza))
}


  return (
    <div>
      <div className='text-right'>
      <h1>Add Pizza</h1>
      <form onSubmit={formHandler} >
      {loading && (<Loading/>)}
      {error && (<Error error='Something went worng !'/>)}
      {success && (<Success success='New Pizza added !'/>)}
      <input className='form-control'  type='text' placeholder='name' value={name} onChange={(e)=>{setName(e.target.value.toUpperCase())}} />
      <input className='form-control' type='text' placeholder='small varient price' value={regularPrice} onChange={(e)=>{setRegularPrice(e.target.value)}} />
      <input className='form-control' type='text' placeholder='medium varient price' value={mediumPrice} onChange={(e)=>{setMediumPrice(e.target.value)}} />
      <input className='form-control' type='text' placeholder='large varient price' value={largePrice} onChange={(e)=>{setLargePrice(e.target.value)}} />
      <input className='form-control' type='text' placeholder='category' value={category} onChange={(e)=>{setCategory(e.target.value)}} />
      <input className='form-control' type='text' placeholder='description' value={description} onChange={(e)=>{setDescription(e.target.value)}} />
      <input className='form-control' type='text' placeholder='image' value={image} onChange={(e)=>{setImage(e.target.value)}} />
      <button className='btn mt-3' type='submit'>Add Pizza</button>
      </form>
      </div>
    </div>
  )
}
