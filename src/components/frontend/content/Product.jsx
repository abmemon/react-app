import React, { useEffect, useState } from 'react'

function Product() {
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json() )
        .then(jsonData => setData(jsonData))
        //.then(setIsok(true))
    },[])

  return (
   <>
   <div>
    {
      data.map((character)=> (
        <div>
          {character.title}
        </div>
      ))
    }
   </div>
   </>
  )
}

export default Product