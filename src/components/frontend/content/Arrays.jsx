import React, { useEffect, useState } from 'react'


function Arrays() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    //const [isOK, setIsok] = useState(false);


    useEffect(()=>{
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(response => response.json() )
        // .then(jsonData => setData(jsonData))
        //.then(setIsok(true))

        const fetchProducts = async () => {
          try{
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            if(response.ok){
              const res = await response.json();
              setData(res);
            }

          }
          catch(err)
          {
              console.error(err);
          }
          finally{
            setLoading(false)
          }

        }
        fetchProducts()
    },[])
    
      
      

  return (
    <>
        <div>Arrays</div>
    </>
  )
  
}

export default Arrays