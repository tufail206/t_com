import React, { useEffect } from 'react'
import { redirect, useLocation, useNavigate } from 'react-router-dom'

const ProductCategory = () => {
    const location=useLocation()
    const navigate=useNavigate()
    const category=location.state
    useEffect(()=>{
       if(!category){
          navigate('/')
       }
     },[category, navigate])
   
  return <div>Product  /  {category }</div>;
}

export default ProductCategory
//make todo app


