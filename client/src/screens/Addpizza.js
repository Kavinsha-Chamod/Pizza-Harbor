import React, { useState } from 'react'
import { addPizza } from '../actions/pizzaActions'
import {useDispatch, useSelector} from 'react-redux';
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";
import { Dropdown } from 'react-bootstrap';


export default function Addpizza() {
  const[name,setName] = useState('')
  const[regularPrice,setRegularPrice] = useState('')
  const[mediumPrice,setMediumPrice] = useState('')
  const[largePrice,setLargePrice] = useState('')
  const[image,setImage] =useState('')
  const[description,setDescription] =useState('')
  const[category,setCategory] =useState('')
  const [aerror, setError] = useState('');

  const dispatch = useDispatch()
  const addpizzastate = useSelector(state=>state.addPizzasReducer)
  const {success,error,loading} = addpizzastate

  const handleCategoryChange = (selectedCategory) => {
    // Validate the selected category
    if (selectedCategory === "Veg" || selectedCategory === "Non Veg") {
      setCategory(selectedCategory);
    } else {
      // Handle invalid category selection (you can show an error message, etc.)
      console.error("Invalid category selected");
    }
  };

  function formHandler(e){
  e.preventDefault()

  if (!name || !regularPrice || !mediumPrice || !largePrice || !category || !description || !image) {
    setError('Please fill in all fields.');
    return;
  }

  if (isNaN(Number(regularPrice)) || isNaN(Number(mediumPrice)) || isNaN(Number(largePrice))) {
    setError('Prices must be valid numbers.');
    return;
  }

  const pizza ={name,image,description,category,prices:{Regular : regularPrice, Medium : mediumPrice, Large : largePrice}
}

   dispatch(addPizza(pizza))
}


  return (
    <div>
    <div className='add-pizza'>
      <div className='text-right'>
      <h2>ADD PIZZA</h2>
      <form onSubmit={formHandler} >
      {loading && (<Loading/>)}
      {aerror && <Error error={aerror} />}
      {error && (<Error error='Something went worng !'/>)}
      {success && (<Success success='New Pizza added !'/>)}
      <input className='form-control'  type='text' placeholder='Enter New Pizza Name' value={name} onChange={(e)=>{setName(e.target.value.toUpperCase())}} />
      <input className='form-control' type='text' placeholder='Enter New Small Pizza Price' value={regularPrice} onChange={(e)=>{setRegularPrice(e.target.value)}} />
      <input className='form-control' type='text' placeholder='Enter New Medium Pizza Price' value={mediumPrice} onChange={(e)=>{setMediumPrice(e.target.value)}} />
      <input className='form-control' type='text' placeholder='Enter New Large Pizza Price' value={largePrice} onChange={(e)=>{setLargePrice(e.target.value)}} />

      <Dropdown onSelect={handleCategoryChange}>
        <Dropdown.Toggle variant="success" id="category-dropdown" className='form-control'>
          {category || 'Select Category'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item className='dropdown-selector' eventKey="Veg">Veg</Dropdown.Item>
          <Dropdown.Item className='dropdown-selector' eventKey="Non Veg">Non Veg</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <input className='form-control' type='text' placeholder='Enter New Pizza Description' value={description} onChange={(e)=>{setDescription(e.target.value)}} />
      <input className='form-control' type='text' placeholder='Enter New Pizza Image URL' value={image} onChange={(e)=>{setImage(e.target.value)}} />
      <button className='btn mt-3' type='submit'>Add Pizza</button>
      </form>
      </div>
      </div>
    </div>
  )
}
