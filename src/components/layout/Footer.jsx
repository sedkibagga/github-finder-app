import React from 'react';
import { ImSvg } from 'react-icons/im';

const footerYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      <div>
        <ImSvg /> {/* Replace ImSvg with the specific icon component you want to use */}
        <p> copyright ; {footerYear} all rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
