import React from 'react';
import './footer.css';
import '../../universalstyle.css'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="b-lg-u">
      <div className="container ">
        <div className="row py-4 pt-5 footer bg-gradient-r justify-content-around">
          <div className="footer-1 col-12 col-lg-3 py-5 py-lg-0">
            <h3 className='montserrat fw-500 kriyona '>Kriyona.</h3>
            <p className='fs-16 pt-lg-4 roboto'>
              We are Kriyona ecommerce , An E-commerce Marketing Company.
            </p>
          </div>

          <div className="footer-2 col-12 py-4 py-lg-0 col-lg-2">
            <h3 className='courier fs-20 fw-bold'>Company</h3>
            <ul className='ps-0 d-flex ul-quick-links pt-2 pt-lg-0'>
              <li className='mb-3 fs-16 roboto me-3'><a className='text-b1' href="/about">About</a></li>
              <li className='mb-3 fs-16 roboto me-3'><a className='text-b1' href="/services">Services</a></li>
              <li className='mb-3 fs-16 roboto me-3'><a className='text-b1' href="/contact">Contact</a></li>
              <li className='mb-3 fs-16 roboto '><a className='text-b1' href="/faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-column pb-5 pb-sm-0 col-12 col-sm-6 col-lg-3">
            <h3 className='courier fs-20  fw-bold'>Contact Us</h3>
            <p className='roboto fs-16'>Email: info@company.com</p>
            <p className='roboto fs-16'>Phone: +123 456 789</p>
            <p className='roboto fs-16'>Address: 1234 Street Name, City, Country</p>
          </div>
          <div className="footer-column pb-5 pb-sm-0  col-12 col-sm-6 col-lg-3">
            <h3 className='courier fs-20 fw-bold'>Know Us More ! </h3>
            <ul className="m-0 p-0 d-flex flex-wrap">
              <li className="mx-2 bg-transparent rounded-circle hw-50">
                <a href="#" className="text-darkgreen fs-4 grey-200">
                  <IoIosMail />
                </a>
              </li>
              <li className="mx-2 bg-transparent rounded-circle hw-50">
                <a href="#" className="text-darkgreen fs-4 grey-200">
                  <FaInstagram />
                </a>
              </li>
              <li className="mx-2 bg-transparent rounded-circle hw-50">
                <a href="#" className="text-darkgreen fs-4 grey-200">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="mx-2 bg-transparent rounded-circle hw-50">
                <a href="#" className="text-darkgreen fs-4 grey-200">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom text-center pt-lg-5  mb-0">
            <p>© 2024 Kriyona ecommerce. All Rights Reserved.</p>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
