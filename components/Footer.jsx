import React from 'react';
import { AiFillInstagram, AiOutlineFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Clay By Zuly - All Rights Reserved </p>
      <p className='icons'>
        <a href='https://www.instagram.com/claybyzuly/'>
          <AiFillInstagram />
        </a>
        <a href='https://www.facebook.com/claybyzuly/'>
          <AiOutlineFacebook />
        </a>
      </p>
    </div>
  )
}

export default Footer