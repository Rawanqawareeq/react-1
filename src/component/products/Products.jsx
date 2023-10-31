import React,{useEffect, useState ,Component } from 'react'


function Products() {
    let [Products,setProducts]=useState([]);
    
    const getProducts= async()=>{
        let reponse = await fetch("https://fakestoreapi.com/products");
        let data = await reponse.json();
        setProducts(data);
       
    }
    useEffect( ()=>{
        getProducts();
    },[])
   
  return (
    <div className='row me-0'>
        {Products.map( (ele)=>{
            return <div className='col-md-4 p-5 e' key={ele.id}>
                <h2>{ele.title}</h2>
              
                <img src={ele.image} className='w-100' alt={ele.title} />


            </div>

        }

        )
    }

    </div>
   
  )
}

export default Products
