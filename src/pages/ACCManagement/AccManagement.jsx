import React from 'react'
import Header from '../../components/HEADER/header'
import Footer from '../../components/FOOTER/footer'
import accManData from './AMData.js'
import { BsDot } from "react-icons/bs";
import '../../universalstyle.css'
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './AccManagement.css'

const AccManagement = () => {
  return (
    <>
      <Header />
      <div className="my-80">
        <div className="container">
          <div className="row bb- br- bl- bg-com py-5">
            <div className="col-12 col-lg-4">
              <div className="commerce">
                <div className="commerce-img text-center ">
                  <img src="/images/afm/commerce.webp" className='shadow-lg' alt="" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8 d-flex justify-content-center align-items-center">

              <div className="service-ctn p-4">
                <h3 className='montserrat fs-21 fw-600  text-b2 pb-4' >Is Your Business Truly Taking Advantage of Marketplace Opportunities?</h3>
                <p className='roboto fs-14 grey-200 ls-5 pb-4'>
                  Over 70% of online shoppers start their search on platforms like Amazon and Flipkart, but many sellers miss out on optimizing their presence. With expert account management, you can enhance your visibility, boost sales, and tap into untapped growth potential.
                </p>
                <button className='btn bg-gradient-b b-black' onClick={() => document.getElementById('price-section').scrollIntoView({ behavior: 'smooth' })}>
                  <span className='fw-500 fs-15 grey-200'>Check Our Packages</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div >

      <div className="acc-mana-serv my-80">
        <div className="container">
          <div className="row bu- br- bl- d-flex justify-content border-center ">
            <div className="col-11">
              <h2 className="bg-gradient-text my-4 courier text-center text-capitalize fs-33 fw-600 ">Seller Account Management Service Provided by Kriyona Ecommerce Manages End To End Ecommerce Operations</h2>
            </div>

          </div>
          <div className="row bg-gradient-mint bu- bd- br-">

            {
              accManData.map((item, i) => {
                return (
                  <div className="col-12 border-top border-end br- bl- px-4" key={i}>
                    <div className="ecom-card py-3">
                      <div className="col-12 d-flex ailgn-items-center">
                        <div className="w-1 d-flex align-items-start">
                          <p className='fw-800'><BsDot /></p>
                        </div>
                        <div className="w-99">
                          <h3 className='text-b2 fs-18 mb-0 pt-1 fw-500 ls-5 montserrat'>{item.service}</h3>
                          <p className='grey-200 fs-14 mb-0 roboto pt-2 ls-1'>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>

      <div className="a-f-m my-80">
        <div className="container">
          <div className="row bb- br- bl- ">
            <div className="col-12 d-flex">
              <div className="col-6">
                <div className="parallex- p-2 ps-0">
                  <div className="parallex amazon">

                  </div>
                </div>
              </div>
              <div className="col-6 ">
                <div className="content border p-3 ps-4 pt-4 bg-gradient-blue">
                  <h4 className='fs-22 roboto ls-2 fw-700 text-b1'>Amazon</h4>
                  <h5 className='grey-100 montserrat fs-15 fw-400 ls-5 py-2'>Service to grow your business on Amazon.</h5>
                  <p className='fs-14 roboto grey-200 ls-5'>
                    With 100 million registered users, Amazon marketplace is one of the largest ecommerce platforms in India. The right place to sell and improve your business. Our expert team of experienced account managers will provide round the clock account management services to grow your business on Amazon.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="col-6 ">
                <div className="content border p-3 ps-4 pt-4 bg-gradient-blue">
                  <h4 className='fs-22 roboto ls-2 fw-700 text-b1'>Meesho</h4>
                  <h5 className='grey-100 montserrat fs-15 fw-400 ls-5 py-2'>Grow your sales on Meesho with our experienced team.</h5>
                  <p className='fs-14 roboto grey-200 ls-5'>
                    Meesho is India’s first social commerce app with more than 125 million active users. It has taken over Amazon and Flipkart in terms of user penetration in tier 2 to tier 4 cities of India. With 0% commission rate Meesho is an ideal place to grow your business online and get the most profit from sales. At Kriyona Ecommerce , we help you onboard and grow your sales on Meesho with our experienced team.
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="parallex- p-2 pe-0">
                  <div className="parallex meesho">

                  </div>
                </div>
              </div>

            </div>
            <div className="col-12 d-flex">
              <div className="col-6">
                <div className="parallex- p-2 ps-0">
                  <div className="parallex flipkart">
                  </div>
                </div>
              </div>
              <div className="col-6 ">
                <div className="content border p-3 ps-4 pt-4 bg-gradient-blue">
                  <h4 className='fs-22 roboto ls-2 fw-700 text-b1'>Flipkart</h4>
                  <h5 className='grey-100 montserrat fs-15 fw-400 ls-5 py-2'>We are certified Flipkart Marketplace Advertiser..</h5>
                  <p className='fs-14 roboto grey-200 ls-5'>
                    Flipkart is an Indian pioneer in the e-commerce industry. With more than 200 million monthly active users, Flipkart is the best marketplace to grow your business. Our account managers have extensive knowledge in growing sales on Flipkart and we are a certified Flipkart Marketplace Advertiser.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-model my-80 " id='price-section'>
        <div className="container">
          <div className="row bb- bl- br- bg-gradient-bblue">
            <div className="col-12">
              <p className='montserrat fs-13 grey-200 text-uppercase text-center mb-0 mt-4'>What we offer</p>
              <h1 className='fs-35 fw-600 courier text-center mt-0 mb-4'>
                Pakages & Prices
              </h1>
            </div>
          </div>
          <div className="row bd- br- bl- d-flex">
            <div className="col-12 my-2 px-2 d-flex">
              <div className="col-4 p-2 ">
                <div className="price-card border p-4 bg-gradient-bblue">
                  <h2 className='montserrat fs-17 text-b1'>1. Starter Package</h2>
                  <div className='circle border bg-gradient-bred'>
                    <span className='pt-3 pe-1 fs-20 '>Rs.3999</span>
                  </div>
                  <ul>
                    <li className='my-3'>
                      <span className='pe-3'><FaCircleCheck /></span>Growth Strategy & Guidance
                    </li>
                    <li className='my-3'>
                      <span className='pe-3'><FaCircleCheck /></span>Sales Performance Analysis
                    </li>
                    <li className='my-3'>
                      <span className='pe-3'><FaCircleCheck /></span>Advertising & Promotions Management
                    </li>
                    <li className='my-3'>
                      <span className='pe-3'><FaRegCircleCheck /></span>Customer Feedback & Review Management
                    </li>

                  </ul>
                  <div className="bt- pt-3 ms-3">
                    <Link to={'/contact'} className="btn btn-dark">
                      Buy this
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-4 p-2">
                <div className="price-card border p-4 bg-gradient-bblue">
                  <h2 className='montserrat fs-17 text-b1'>1. Starter Package</h2>
                  <div className='circle border bg-gradient-bred'>
                    <span className='pt-3 pe-1 fs-20 '>Rs.3999</span>
                  </div>
                  <ul>
                    <li className='my-3'>
                      <span className='pe-3'><FaCircleCheck /></span>Growth Strategy & Guidance
                    </li>
                    <li className='my-3'>
                      <span className='pe-3'><FaCircleCheck /></span>Sales Performance Analysis
                    </li>
                    <li className='my-3'>
                      <span className='pe-3'><FaCircleCheck /></span>Advertising & Promotions Management
                    </li>
                    <li className='my-3'>
                      <span className='pe-3'><FaRegCircleCheck /></span>Customer Feedback & Review Management
                    </li>

                  </ul>
                  <div className="bt- pt-3 ms-3">
                    <button className="btn btn-dark">
                      Buy this
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-4 p-2">
                <div className="price-card border p-4 bg-gradient-bblue">
                  <h2 className='montserrat fs-17 text-b1'>1. Starter Package</h2>
                  <div className='circle border bg-gradient-bred'>
                    <span className='pt-3 pe-1 fs-20 '>Rs.3999</span>
                  </div>
                  <ul>
                    <li className='my-3'>
                      <span className='pe-3'><FaCircleCheck /></span>Growth Strategy & Guidance
                    </li>
                    <li className='my-3'>
                      <span className='pe-3'><FaCircleCheck /></span>Sales Performance Analysis
                    </li>
                    <li className='my-3'>
                      <span className='pe-3'><FaCircleCheck /></span>Advertising & Promotions Management
                    </li>
                    <li className='my-3'>
                      <span className='pe-3'><FaRegCircleCheck /></span>Customer Feedback & Review Management
                    </li>

                  </ul>
                  <div className="bt- pt-3 ms-3">
                    <button className="btn btn-dark">
                      Buy this
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AccManagement
