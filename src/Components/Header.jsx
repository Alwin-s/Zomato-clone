import React, { useEffect, useState } from 'react'
import "./header.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Header() {

  const [show,setShow]=useState(false)
 
  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY>230){
        setShow(true)
      }else{
        setShow(false)
      }
    })
  })



  return (
    <>
        <nav className='p-3 d-flex ms-5'>
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" className='img'/>
            <Form.Group className="ms-5 d-flex" controlId="exampleForm.ControlInput1">
              <div style={{position:"relative"}}>
                <i class="fa-solid fa-location-dot fa-xl q mt-4 ms-3"></i>
        <Form.Control type="text" placeholder="Ahamadabad" className='text-center tex shadow-none ' readOnly />
        </div>
      </Form.Group>
            <Form.Group className=" d-flex" controlId="exampleForm.ControlInput1">
              <div style={{position:"relative"}}>
            <i class="fa-solid fa-magnifying-glass w fa-lg mt-4 ms-3"></i>
              
        <Form.Control type="text" placeholder="Search for restaurant, cuisine or a dish" className='text-center tx shadow-none ' />
        </div>
      </Form.Group>
      
     <div className='d-flex mt-2 ss ms-5'>
        <p>Login</p>
        <p className='ms-5'>Sign Up</p>
     </div>
        </nav>


        <div className='p-4 ms-5'>
            <div className='d-flex' style={{cursor:"pointer"}}>
              <div className="backscooter">
                <img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp" alt="" className='scooter'/>
                </div>
              
                <p className='text-danger ms-3 mt-3 fs-5'>Delivery</p>
                  

                <div className='ms-5 d-flex'>
                    <img src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp" alt=""  width={40} height={40} className='ms-3 mt-2'/>
                    <p className=' ms-2 mt-3 fs-5'>Dining Out</p>
                </div>
          
        </div>
        <div className='underline mt-3'>
        </div>
        <hr className='hr' style={{position:"relative"}}/>
        </div>
       

        <div className={`${show && 'buttn-black'}  buttn`}>
          <div className='ms-4 padd p-3'>
        <Button variant="outline-secondary" className='bg-white text-secondary ms-3'> <i class="fa-solid fa-sliders"></i> Filtres</Button>
        <Button variant="outline-secondary" className='bg-white text-secondary ms-3'>Rating: 4.0+</Button>
        <Button variant="outline-secondary" className='bg-white text-secondary ms-3'>  Pure Veg</Button>
        <Button variant="outline-secondary" className='bg-white text-secondary ms-3'>Cuisines <i class="fa-solid fa-caret-down"></i> </Button>
        </div>
        </div>


    </>
  )
}

export default Header