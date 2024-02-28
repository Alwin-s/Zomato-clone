import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';


function Footer() {
  return (
    <>
  <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between ms-5 p-4'>
        <div className='d-none d-lg-block'>
          <span><img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" width={"132px"} height={"28px"} className='ms-4' /></span>
        </div>

        <div>
        <Button variant="outline-secondary" className='bg-white text-secondary ' style={{marginLeft:"-40%"}}> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/2560px-Flag_of_India.png" alt="" width={"20px"} height={"15px"} style={{marginTop:"-4%"}}/>  India <i class="fa-solid fa-caret-down"></i></Button>
        <Button variant="outline-secondary" className='bg-white text-secondary ms-3'><i class="fa-solid fa-globe"></i> English <i class="fa-solid fa-caret-down"></i></Button>
        </div>
       
      </section>

      <section className='border-bottom'>
        <MDBContainer className='text-center text-md-start mt-3'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4 para'>
              <h6 className='text-uppercase fw- text-black mb-4'>
              ABOUT ZOMATO
              </h6>
              <p>Who We Are</p>
              <p>Blog</p>
              <p>Work With Us</p>
              <p>Investor Relations</p>
              <p>Report Fraud</p>
              <p>Press Kit</p>
              <p>Contact Us</p>
            </MDBCol>
            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4 para'>
              <h6 className='text-uppercase fw- text-black mb-4'>
              ZOMAVERSE
              </h6>
              <p>Zomato</p>
              <p>Blinkit</p>
              <p>Feeding India</p>
              <p>Hyperpure</p>
              <p>Zomaland</p>
            </MDBCol>
            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4 para'>
              <h6 className='text-uppercase fw- text-black mb-4'>
              FOR RESTAURANTS
              </h6>
            <p>Partner With Us</p>
            <p>Apps For You</p>
            <br />
            <h6 className='text-uppercase fw- text-black mb-4'>
              FOR ENTERPRISES
              </h6>
              <p>Zomato For Enterprise</p>

            </MDBCol>
            <MDBCol md='4' lg='2' xl='2' className='mx-auto mb-4 para'>
              <h6 className='text-uppercase fw- text-black mb-4'>
            Learn More
              </h6>
            <p>Privacy</p>
            <p>Security</p>
            <p>Terms</p>
            <p>Sitemap</p>
         

            </MDBCol>
            <MDBCol md='4' lg='2' xl='2' className='mx-auto mb-4 para'>
              <h6 className='text-uppercase fw- text-black mb-4'>
           Social Links
              </h6>
            <div className='d-flex  icons'>
            <MDBIcon fab icon="linkedin" />
            <MDBIcon fab icon="instagram"  className='ms-2'/>
            <MDBIcon fab icon="twitter"  className='ms-2'/>
            <MDBIcon fab icon="youtube"  className='ms-2'/>
            <MDBIcon fab icon="facebook-f" className='ms-2' />
            </div>
            <br />
            <div>
              <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"width={"137px"} height={"40px"} alt="" />

              <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" width={"137px"} height={"40px"}  className='mt-3'/>
            </div>
         

            </MDBCol>
            
        
          </MDBRow>
        </MDBContainer>
      </section>

      <div className=' fw-light p-4 ms-5'>
       <p style={{fontSize:"15px",color:"#4F4F4F"}}>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008- <br />2024 © Zomato™ Ltd. All rights reserved.</p>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer