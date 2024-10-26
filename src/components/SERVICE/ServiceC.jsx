import React from 'react'
import servicesData from './ServicesData.js';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import './ServiceC.css'

const Service = () => {
  return (
    <div>

      <div className="container our-services my-80">
        <div className="row services-row bb- br- bl- bg-gradient-2">
          <h3 className='text-center s-title pt-4 mb-0 courier fw-600 fs-33 text-b2'>Our Services</h3>
          <p className='text-center grey-200 mb-4 montserrat'>Personalized solutions and services to boost your online business.</p>
        </div>
        <div className="row services-row bl- br- bd- pb-0 bg-gradient-2 ">
          {
            servicesData.map(val => (
              <div className="col-12 col-lg-4 d-flex border">

                <div className="col-2">
                  <div className="service-icon my-4 ps-3">
                    <img src={val.image} className='img-fluid mb-2 p-1 pt-0' alt="" />
                  </div>
                </div>
                <div className={`col-10 ps-3 pe-3 `}>

                  <div className="service-detail mt-4">
                    <p className='text-left fw-700 roboto name fs-18 mb-0 pb-3 text-b2 text-uppercase'>{val.name}</p>
                    <p className='grey-200 fs-14 mb-0 roboto des'>{val.description}</p>
                  </div>
                  <div className="mb-4 pt-2">
                    <Link to={val.link}>
                      <span className='text-b1 fw-500 roboto'>Know more <FaArrowRight /></span>
                    </Link>
                  </div>
                </div>

              </div>
            ))
          }



        </div>
      </div>
    </div>
  )
}

export default Service
