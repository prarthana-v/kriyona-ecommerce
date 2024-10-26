import React from 'react';
import { useState, useEffect } from 'react';
import './header.css'
import '../../universalstyle.css';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <header className={` header mb-5 bd- bg-gradient-pink ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="row align-items-center justify-content-between px-5 px-sm-0 px-md-0 justify-content-md-flex py-4">
            <div className="col-6 col-md-3">
              {/* Logo */}
              <div className="logo">
                <h2><Link to={'/'} className='text-b1 montserrat'>Kriyona</Link></h2>
              </div>
            </div>
            <div className="col-1  d-md-none">
              {/* Toggle button for small screens */}
              <button className="nav-toggle" onClick={handleToggle}>
                &#9776;
              </button>

            </div>
            <div className="col-8 d-flex justify-content-end">
              {/* Navigation Links */}
              <nav className={`nav-links ${isOpen ? "open" : ""}`}>
                <ul className='d-md-flex ps-0 mb-0'>
                  <li>
                    <Link className='text-b1 fw-500 mx-4 text-capitalize montserrat' to={'/'}>Home</Link>
                  </li>
                  <li>
                    <Link className='text-b1 fw-500 mx-4 text-capitalize montserrat' to={'/about'}>about</Link>
                  </li>
                  <li>
                    <Link className='text-b1 fw-500 mx-4 text-capitalize montserrat' to={'/services'}>Services</Link>
                  </li>
                  <li>
                    <Link className='text-b1 fw-500 mx-4 text-capitalize montserrat' to={'/contact'}>Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>


          </div>

        </div>
      </header>
    </>
  );
};

export default Header;
