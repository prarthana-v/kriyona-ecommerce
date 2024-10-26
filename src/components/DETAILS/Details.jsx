import React from 'react';
import './Details.css'; // Custom styles for about page if needed
import '../../universalstyle.css'; // General reusable styles

const Details = () => {
  return (
    <div className="details">
      <div className="container my-80 ">
        <div className="row br- bl- bu- bg-gradient-pink">
          <div className="col-12 px-0 text-center">
            <h2 className="montserrat fw-500 fs-42 text-b1 pb-4 pt-5">About Us</h2>
            <p className="courier fs-16 fw-400 text-b1 py-3 px-5 bd- mb-0">
              <span className='pb-4 w-90 d-inline-block'>
                At Kriyona, we are passionate about delivering cutting-edge E-com solutions to transform your digital experience. Our team is dedicated to bringing the best in  markeitng , branding , and e-commerce services.
              </span>
            </p>
          </div>
        </div>

        <div className="d-none d-md-flex row align-items-center bl- br- bd- bg-gradient-pink">
          <div className="col-12 col-lg-6 text-center br- px-0">
            <div className="truck mx-auto mx-lg-0">
              <img
                src="images/aaa.png"
                alt="About Us"
                className="img-fluid vector"

              />
            </div>
          </div>

          <div className="col-12 col-lg-6 ps-4">
            <h3 className="montserrat fw-500 fs-23 text-b1">Our Vision</h3>
            <p className="courier vision fs-16 fw-400 text-b2">
              Our vision is to empower businesses with innovative digital solutions that drive growth and efficiency. We believe in the power of technology to enhance user experiences and streamline business operations.
            </p>

            <h3 className="montserrat fw-500 fs-23 text-b1 mt-4">Our Mission</h3>
            <p className="courier fs-16 fw-400 text-b2">
              To deliver top-notch services with a focus on quality, user-centric design, and customer satisfaction. Whether you are a small business or a large enterprise, Kriyona is here to support your journey to success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
