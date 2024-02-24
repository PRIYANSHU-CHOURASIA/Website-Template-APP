import logo from './logo.svg';
import './App.css';
import left_img from "./1815.jpg";
import right_img from "./1895.jpg";
import innovation from "./innovation.jpg";
import landscape from "./landscape.jpg";


function App() {
  return (
    <div> {/* main view port  */}
      
      <div className='mx-4 p-2'> {/* navigation bar */}
        <div className='d-flex flex-wrap justify-content-between'> {/* first line*/}
          <div>
            <h3>website<label className='text-warning fw-bolder'>.</label>com</h3>
          </div>
          <div className='nav-links-first'>
            <a href="">CONTACT US</a>
            <a href="">WEBMAIL</a>
            <a href="">LOG IN</a>
            <button >SIGN UP</button>
          </div>
        </div>
        <div className='d-flex flex-wrap'> {/* second line */}
          <div className='nav-links-second'>
            <a href="">FREE WEBSITES</a>
            <a href="">ONLINE STORES</a>
            <a href="">DOMAIN NAMES</a>
            <a href="">EMAIL</a>
            <a href="">TEMPLATES</a>
            <a href="">PRICING</a>
            <a href="">RESOURSES</a>
          </div>  
        </div>
      </div>
      <div className='home'> {/*Home*/}
        <div className='mx-4 p-4'>
          <div className='text-center'><h5>Your Online Journey Starts Here:</h5></div>
          <div className=' text-center fs-1 fw-bold'><p>Domain, Emails, Websites, Done Right.</p></div>
          <div className='d-flex justify-content-evenly flex-wrap'>
            <div className="card mb-3" style={{width:"15%"}}> {/*1st card */}
              <div className="card-body border border-dark border-3 rounded-0 p-3" style={{boxShadow:"10px 10px"}}>
                <div>
                  <p className="card-text text-danger">Domain</p>
                </div>
               <small className="card-title fs-1 fw-bold">$0.01</small>
               <small className="mb-4 fw-bold">/1st yr</small>
               <br/>
               <a href="#" class="btn btn-primary" style={{width:"100%"}}>Buy Domain</a>
              </div>
            </div>
            <div className="card mb-3" style={{width:"15%"}}> {/*2nd card */}
              <div className="card-body border border-dark border-3 rounded-0 p-3" style={{boxShadow:"10px 10px"}}>
                <div>
                  <p className="card-text text-danger">Email@YourDomain</p>
                </div>
               <small className="card-title fs-1 fw-bold">$1</small>
               <small className="mb-4 fw-bold">/month</small>
               <br/>
               <a href="#" className="btn btn-primary" style={{width:"100%"}}>Get Email</a>
              </div>
            </div>
            <div className="card mb-3" style={{width:"15%"}}> {/*3rd card */}
              <div className="card-body border border-dark border-3 rounded-0 p-3" style={{boxShadow:"10px 10px"}}>
                <div>
                  <p className="card-text text-danger">Easy Site Builder</p>
                </div>
               <small className="card-title fs-1 fw-bold">$0</small>
               <small className="mb-4 fw-bold"> & up</small>
               <br/>
               <a href="#" class="btn btn-primary" style={{width:"100%"}}>Start For Free</a>
              </div>
            </div>
            <div className="card mb-3" style={{width:"15%"}}> {/*4th card */}
              <div className="card-body border border-dark border-3 rounded-0 p-3" style={{boxShadow:"10px 10px"}}>
                <div>
                  <p className="card-text text-danger">Online Store</p>
                </div>
               <small className="card-title fs-1 fw-bold">$10</small>
               <small className="mb-4 fw-bold">/month</small>
               <br/>
               <a href="#" class="btn btn-primary" style={{width:"100%"}}>Sell Products</a>
              </div>
            </div>
            <div className="card mb-3" style={{width:"15%"}}> {/*5th card */}
              <div className="card-body border border-dark border-3 rounded-0 p-3" style={{boxShadow:"10px 10px"}}>
                <div>
                  <p className="card-text text-danger">Web Design</p>
                </div>
               <small className="card-title fs-1 fw-bold">$995</small>
               <small className="mb-4 fw-bold">/ & up</small>
               <br/>
               <a href="#" class="btn btn-primary" style={{width:"100%"}}>Do It For Me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-4 p-2 text-center'> {/*After Home*/}
        <h1 className='mt-4'>Website Templates, Made Easy.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, non. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <a className='link-offset-3 link-underline link-underline-opacity-25' href=''>Create Your Website Now <i class="bi bi-caret-right"></i></a>
      </div>
      <div className='d-flex justify-content-between mx-5 my-4 p-2'> {/*slide images */}
        <div className='me-2'>
          <img className='img-fluid border border-2' src={left_img}/>
          <br/>
          <small>Business</small>
        </div>
        <div className='ms-2'>
          <img className='img-fluid border border-2' src={right_img}/>
          <br/>
          <small>Store</small>
        </div>
      </div>
      <div style={{backgroundColor:"#3B516B", color:"white"}}> {/*after slide */}
        <div className='d-flex justify-content-center align-content-center flex-wrap mx-4 p-5'>
          <h1>Make Your Own Website.</h1>
          <p className='text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veritatis excepturi atque odio adipisci, aliquid officia magni aliquam beatae quaerat animi facere consequatur soluta. Rem totam magnam ex! Dolorem quos repudiandae dolorum fugit recusandae expedita! </p>
          <a className='text-white link-offset-2'> Get A Free Website Now <i class="bi bi-caret-right"></i></a>
        </div>
      </div>
      <div style={{marginTop:"3%",marginBottom: "0%",marginLeft: "15%",marginRight:"15%"}}><h1>Dream It, Build It.</h1></div>
      <div className='d-flex flex-wrap mx-4 mt-0'>
        <div style={{width:"50%"}}><img className='img-fluid' src={innovation} /></div>
        <div className='d-flex flex-wrap flex-column justify-content-center align-content-center' style={{width:"40%"}}>
            <div className='mt-5'>
              <h3>1. Start with a stunning theme</h3>
              <small>Our layouts make it simple to get started. Fresh designs make it easy to make a beautiful, responsive website for any industry.</small>
            </div>
            <div className='mt-5'>
              <h3>2. Customize with your own content</h3>
              <small>Add and customize sections. Choose font pairings, add images, and customize with your own text to make your website your own.</small>
            </div>
            <div className='mt-5'>
              <h3>3. Be found online</h3>
              <small>Grow your audience with your perfect domain name, SEO tools, social media and third party features.</small>
            </div>
            <div className='fs-5 mt-5 mb-5'>
              <a className='text-dark text-decoration-non' href="">Make Free Website Now <i class="bi bi-caret-right"></i></a>
            </div>
        </div>
      </div>
      <div className="footer bg-info"> {/*footer */}
          <div className="container text-dark p-3">     
              <div className="row">                       
                  <div className="col-lg-4 col-sm-4 col-xs-12">
                      <div className="single_footer">
                          <h4>Services</h4>
                          <ul>
                              <li><a className='text-decoration-none text-dark' href="#">Lorem Ipsum</a></li>
                              <li><a className='text-decoration-none text-dark' href="#">Simply dummy text</a></li>
                              <li><a className='text-decoration-none text-dark' href="#">The printing and typesetting </a></li>
                              <li><a className='text-decoration-none text-dark' href="#">Standard dummy text</a></li>
                              <li><a className='text-decoration-none text-dark' href="#">Type specimen book</a></li>
                          </ul>
                      </div>
                  </div> 
                  <div className="col-md-4 col-sm-4 col-xs-12">
                      <div className="single_footer single_footer_address">
                          <h4>Page Link</h4>
                          <ul>
                              <li><a className='text-decoration-none text-dark' href="#">Lorem Ipsum</a></li>
                              <li><a className='text-decoration-none text-dark' href="#">Simply dummy text</a></li>
                              <li><a className='text-decoration-none text-dark' href="#">The printing and typesetting </a></li>
                              <li><a className='text-decoration-none text-dark' href="#">Standard dummy text</a></li>
                              <li><a className='text-decoration-none text-dark' href="#">Type specimen book</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-12">
                      <div className="single_footer single_footer_address">
                          <h4>Subscribe today</h4>
                          <div className="signup_form">                           
                              <form action="#" className="">
                                  <input type="text" className="" placeholder="Enter Email Address"/>
                                  
                              </form>
                          </div>
                      </div>
                      <div className="social_profile">
                          <ul>
                              <li><a className='text-decoration-none text-dark' href="#">Facbook</a></li>
                              <li><a className='text-decoration-none text-dark' href="#">Youtube</a></li>
                              <li><a className='text-decoration-none text-dark' href="#">Instagram</a></li>
                          </ul>
                      </div>                          
                  </div>       
              </div> 
              <div className="row">
                  <div className=" col-lg-12 col-sm-12 col-xs-12">
                      <p className="copyright">Copyright © 2019 <a className='text-decoration-none text-dark' href="#">Akdesign</a>.</p>
                  </div>                
              </div>                 
          </div>
      </div>
    </div>
  );
}

export default App;
