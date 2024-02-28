import React, { useState } from 'react'
import Cards from './Cards'
import FoodSlider from './FoodSlider'




function Main() {
   
  return (
    <>

    <div>
    <h2 className='text-dark p-2 mt-4 ms-5' style={{fontWeight:"400"}}>Inspiration for your first order</h2>
    </div>

    <div>
      <FoodSlider/>
    </div>

    <div>
        <h2 className='text-dark p-2 mt-5 ms-5' style={{fontWeight:"400"}}>Best Food in Ahmedabad</h2>
    </div>

    <div className="row  p-4  d-flex justify-content-around align-items-center" style={{marginTop:"-1%"}}> 
        <Cards/>
    </div>


    </>
  )
}

export default Main