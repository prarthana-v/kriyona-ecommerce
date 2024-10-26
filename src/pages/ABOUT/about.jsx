import React from 'react';
import '../../universalstyle.css'
import './about.css'; // Import your CSS file for styles
import Header from '../../components/HEADER/header';
// import TeamSlider from '../../components/TeamSlider/TeamSlider';
import TeamSlider from '../../components/TeamSlider/TeamSlider';
import Footer from '../../components/FOOTER/footer';

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row bb- br- bl- d-flex justify-content-center py-5 bgabout">
          <div className="col-11 ">
            <div className="about-us text-center montserrat">
              <p className='courier about-info fw-600 fs-26 pt-100'>
                "Kriyona E-commerce
                is an e-commerce marketing agency specializing in driving traffic and boosting online sales for your businesses."
              </p>
              <p className='pb-100 about-text'>We are committed to boost your bottom line and maximize ROI with custom marketing strategies.</p>

            </div>
          </div>
          {/* <TeamSlider /> */}
        </div>
      </div>
      <div className="our-team container my-80  bg-gradient-pink">
        <div className="row bb- br- bl- text-center">
          <h2 className='fw-bold bd- py-4'>Our Team</h2>
          <TeamSlider />
        </div>
      </div>
      <div className="looking container my-80">
        <div className="row bb- br- bl- py-60 bg-gradient-a look-row d-flex justify-content-center">
          <div className="col-10 text-center">
            <p className='montserrat fw-600 fs-26 grey-200'>Looking To Grow Your E-commerce Store But Don’t Know How?</p>

          </div>
          <div className="col-10 d-flex justify-content-center pt-4">
            <p className='d-lg-none roboto text-center para'>Kriyona E-Commerce, India's leading E-commerce marketing agency, specializes in performance-driven strategies to boost sales. We offer comprehensive services, including search marketing, social ads, paid advertising, and custom campaigns, all designed to enhance your online presence and increase revenue efficiently.</p>
            <p className='d-none d-lg-flex roboto text-center para '>
              Creating an Ecommerce store is easy, but increasing sales requires performance-focused strategies. Kriyona E-Commerce, the best E-commerce marketing agency in India with a holistic E-commerce marketing approach, will increase your figure and help you achieve high Sales without wasting time and money. Our full-fledged services, from search marketing, social ads, and paid advertising to bespoke campaigns, optimizations, and more, are focused on increasing your presence and growing revenue.
            </p>

          </div>
        </div>
      </div>

      <div className="goto-agency container my-80">
        <div className="row bb- bl- br- bg-gradient-soft-white">
          <div className="col-12 col-lg-7 pt-5 pb-3 px-5 br- goto-why">
            <p className='montserrat fw-600 fs-26 grey-200'>Why Choose Kriyona as Your E-commerce Managing Partner?</p>
            <p className='roboto fs-17 grey-200 pt-4'>
              At Kriyona, we specialize in comprehensive e-commerce solutions, <b>from account registration to full-scale account management</b>. With 13+ months of experience, we ensure that <b>your online store is set up for success and consistently optimized for growth</b>. Trusted by numerous brands across industries, we are dedicated to managing your e-commerce accounts for maximum performance.
            </p>
          </div>
          <div className="col-12 col-lg-5 px-0 py-3 align-items-center goto-special">
            <div className="feature-box">
              <div className="features pb-4 px-3 box-1  bd-">
                <div className="features-inner  d-flex align-items-center">
                  <div className="col-2">
                    <div className="feature-img w-100 text-center">
                      <img src="images/about/pipeline.png" className='img-fluid' alt="" />
                    </div>
                  </div>
                  <div className="col-10 justify-content-end">
                    <div className="feature-text align-items-center ps-4">
                      <p className='roboto fs-14 grey-200 mb-0'><b className='montserrat'>360° e-commerce support</b> with complete account management from registration to optimization.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="features pb-4 px-3 bd-">
                <div className="features-inner d-flex align-items-center">
                  <div className="col-2">
                    <div className="feature-img w-100 text-center">
                      <img src="images/about/graph.png" className='img-fluid' alt="" />
                    </div>
                  </div>
                  <div className="col-10 justify-content-end">
                    <div className="feature-text align-items-center ps-4">
                      <p className='roboto fs-14 grey-200 mb-0'><b className='montserrat'>Maximized growth</b>  through personalized e-commerce strategies.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="features pb-2 px-3">
                <div className="features-inner d-flex align-items-center">
                  <div className="col-2">
                    <div className="feature-img w-100 text-center">
                      <img src="images/about/accounting.png" className='img-fluid' alt="" />
                    </div>
                  </div>
                  <div className="col-10 justify-content-end">
                    <div className="feature-text align-items-center ps-4">
                      <p className='roboto fs-14 grey-200 mb-0'><b className='montserrat'>Enhanced performance</b> with data-driven insights and agile processes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
};

export default AboutPage;
