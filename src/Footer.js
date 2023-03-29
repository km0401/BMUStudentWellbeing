import React from 'react'
import './Footer.css'
import {AiOutlineInstagram} from 'react-icons/ai';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='row'>
        <div className='column'>
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            metus euismod, faucibus metus ut, semper nibh. Aenean euismod justo
            eu enim dapibus suscipit.
          </p>
        </div>

        <div className='column'>
          <h4>Quick Links</h4>

          <ul>
            <li>
              <a href='/'>
                <i className='fa fa-angle-right'></i> Subscription
              </a>
            </li>

            <li>
              <a href='/'>
                <i className='fa fa-angle-right'></i> Contact us
              </a>
            </li>

            <li>
              <a href='/'>
                <i className='fa fa-angle-right'></i> Bug report
              </a>
            </li>
          </ul>
        </div>

        <div className='column'>
          <h4>Connect with Us</h4>

          <ul className='social-icons'>
            <li>
              <a href='/'>
                <AiOutlineInstagram style={{fontSize:"2rem"}}/>
              </a>
            </li>

            <li>
              <a href='/'>
                <i className='fa-brands fa-instagram'></i>
              </a>
            </li>

            <li>
              <a href='/'>
                <i className='fa-brands fa-twitter'></i>
              </a>
            </li>

            <li>
              <a href='/'>
                <i className='fa-brands fa-github'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className='copyright'>© 2023 All Rights Reserved</p>
    </div>
  )
}
export default Footer
