import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-dark text-white'>
      <section id='footer' className='background-dark'>
        <div className='container'>
          <ul className='nav pt-2 justify-content-center'>
            <li className='nav-item'>
              <Link className='nav-link text-white fw-bold' to='/'>
                Spacebook
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link text-white' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-white' to='/about'>
                About
              </Link>
            </li>
          </ul>
          <ul className='nav pt-2 justify-content-center'>
            <li className='nav-item active'>
              <a
                className='nav-link text-white'
                href='https://zacharyeilers.com/'
              >
                Personal Site
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link text-white'
                href='https://zacharyeilers.com/'
              >
                Personal Site
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link text-white'
                href='https://github.com/ZacharyEilers'
              >
                Github
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link text-white'
                href='https://www.linkedin.com/in/zachary-eilers-207309168/'
              >
                LinkedIn
              </a>
            </li>
          </ul>

          <ul className='nav pb-2 justify-content-center'>
            <li className='nav-item'>
              <p className='nav-link text-light m-0'>
                Copyright Zachary Eilers 2022
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Footer;
