import React from 'react';
import web from '../src/images/web.jpg';
import app from '../src/images/app.png';
import soft from '../src/images/software.png';
import dig from '../src/images/digital.jpeg';
import and from '../src/images/android.jpg';
import mar from '../src/images/Marketing.jpeg';
import {NavLink} from 'react-router-dom';


const Service = () => {
   return (
       <>
    <div className="my-5">
        <h1 className="text-center">Our Services </h1>
    </div>
    <div className="container-fluid mb-5">
           <div className="row">
              <div className="col-10 mx-auto">
                  <div className="row gy-4">
                      <div className="col-md-4 col-10 mx-auto">
                      <div class="card">
  <img src={web} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title font-weight-bold">Web Development</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
                      </div>
                      <div className="col-md-4 col-10 mx-auto">
                      <div className="card">
                    <img src= {app} className="card-img-top" alt="..." /> 
  <div className="card-body">
    <h5 className="card-title font-weight-bold">App Development</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
                      </div>
                      <div className="col-md-4 col-10 mx-auto">
                      <div class="card">
  <img src={soft} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title font-weight-bold">Software Development</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
                      </div>
                     
                      <div className="col-md-4 col-10 mx-auto">
                      <div className="card">
  <img src={and} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title font-weight-bold ">Android Development</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
                      </div>
                      <div className="col-md-4 col-10 mx-auto">
                      <div className="card">
  <img src={dig} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title font-weight-bold ">Digital Marketingt</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
                      </div>
                      <div className="col-md-4 col-10 mx-auto">
                      <div className="card">
  <img src={mar} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title font-weight-bold ">Marketing</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
 </div>
                  </div>
              </div>
           </div>
       </div>
       </>
   )
}


export default Service;