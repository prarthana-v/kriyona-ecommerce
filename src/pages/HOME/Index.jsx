import React from 'react'
import Header from '../../components/HEADER/header';
import '../../universalstyle.css';
import './home.css';
import Footer from '../../components/FOOTER/footer';
import Details from '../../components/DETAILS/Details';

const Index = () => {

  return (
    <>
      <div className="seller-acc">
        <div className="container">
          <div className="row">

          </div>
        </div>
      </div>
      <Header />
      <div className="hero-section" >
        <div className="container px-sm-0">
          <div className="row mx-11">
            <div className="bg-gradient-2 bb- br- bl-">

              <div className="col-12 text-center ">
                <p className=' fs-17 roboto pt-5 '>Welcome ! Start Growing Your Buisness Today.</p>
                <h1 className=' fw-600 montserrat hero-title fs-69 py-4'>Drive Sales, Boost Growth, <br />Succeed Online</h1>
                <p className='roboto pb-5 pt-4'>We are Kriyona ecommerce , an E-commerce Marketing Company.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
      <Details />
      <Footer />
    </>
  )
}

export default Index
