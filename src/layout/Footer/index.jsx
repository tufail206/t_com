import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-3 lg:px-0 flex justify-between   text-white flex-wrap gap-3">
        <div className="footer_box w-[90%] md:w-[44%] lg:w-[19%]">
          <p className="text-3xl my-2 ">Exclusive</p>
          <button className='my-2'>Subscribe</button>
          <input type="email" className='outline outline-white p-2 rounded border-none' placeholder="enter your email" />
        </div>
        <div className="footer_box w-[90%] md:w-[44%] lg:w-[19%]">
          <p className="text-3xl my-2 ">Supports</p>
          <p className='my-2'>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <a href="#" className="block">
            exclusive@gmail.com
          </a>
          <a href="#" className="block">
            +88015-88888-9999
          </a>
        </div>
        <div className="footer_box w-[90%] md:w-[44%] lg:w-[19%]">
          <p className="text-3xl my-2 ">Account</p>
          <p className='my-2'>My Account</p>
          <p>Terms Of Use</p>
          <p className='my-2'>Login / Register</p>
          <p>Cart</p>
        </div>
        <div className="footer_box w-[90%] md:w-[44%] lg:w-[19%]">
          <p className="text-3xl my-2 ">Quick Link</p>
          <p className='my-2'>Privacy Policy</p>
          <p>Terms Of Use</p>
        </div>
        <div className="footer_box w-[90%] md:w-[44%] lg:w-[19%]">
          <p className="text-3xl my-2 ">Download App</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;