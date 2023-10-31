import React, { useEffect, useState } from 'react'

export default function Onion() {

    
    let [Restaurant,setRestaurant]=useState([]);
    const getRestaurant = async()=>{
      let reponse = await fetch("https://forkify-api.herokuapp.com/api/search?q=Onion");
      let data = await reponse.json();
      setRestaurant(data.recipes);
      console.log(data.recipes)
    }
    useEffect(()=>{
      getRestaurant();
    },[])
   
    return (
      <div className='row me-0'>
        <h2 className='text-center'>Onion</h2>
          {
          Restaurant.map((ele)=>{
            return <div className='col-md-4 ' key={ele.recipe_id}>
              <h3>{ele.title}</h3>
              <img src={ele.image_url} width='300px' height='250px' alt={ele.title} />
  
            </div>
          })
        }
      </div>)
}
