import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';


function Cards() {

    const [food,setFood]=useState([]);


    const base_url=`https://www.themealdb.com/api/json/v1/1/search.php?f=c`


const fetchData=async()=>{
 
    const response=await fetch(base_url)
    const data= await response.json()

    setFood(data.meals);

}
// console.log(food);


useEffect(()=>{
fetchData()
},[])


  return (
    <>
      {food.map((meal) => (
        <Card key={meal.idMeal} style={{ width: '22rem',border:"none" }} className='card mb-1'>
          <Card.Img variant="top" className='cd' src={meal.strMealThumb}  style={{position:"relative"}}/>
          <p className='offer' style={{position:"absolute"}}>30% OFF</p>
          <div className="card-body">
            <div className="upper-data d-flex justify-content-between align-items-center">
              <h4>{meal.strMeal}</h4>
              <span>3.5★</span>
              
            </div >
            <div className="lower-data d-flex justify-content-between mt-">
              <h5>{meal.strCategory}</h5>
              <span>{meal.strArea}</span>
            </div>
            <div className="d-flex justify-content-end align-items-center text-dark " style={{fontSize:"12px",fontWeight:"500"}}>
              24 min
            </div>
            <div className="extra">
                
            </div>
            <div className="image d-flex justify-content-between mt-2">
            <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt="" style={{width:"48px",height:"18px"}} className='mt-2'/>
            <p style={{fontSize:"12px",color:"#828282"}} className='ms-2'>Follows all Max Safety measures to ensure your food is safe</p>
            </div>
          </div>
        </Card>
      ))}











    
  
             
    
 
    </>
  )
}

export default Cards


// 3ba41f2d

// d54fd9043736749026070ac5f3f06e96	
