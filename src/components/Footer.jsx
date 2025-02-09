import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTelegram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();
  const Links = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About Us',
      path: '/aboutus'
    },
    {
      name: 'Our Projects',
      path: '/projects'
    },
    {
      name: 'Get Involved',
      path: '/getinvolved'
    },
    {
      name: 'Blogs',
      path: '/blogs'
    },
    {
      name:'Contact Us',
      path:'/contacts'
    }
  ];
  return (
    <footer>
      <div className="border-b-2 border-green-500"></div>
      <div className="flex  flex-col p-[10px] lg:flex-row">
        <div className="lg:w-1/3 p-12">
          <div className="w-1/2">
            <span>PO Box:10987</span><br />
            <span>Biratnagar, Nepal</span><br />
            <span>+977984f9a992</span><br />
            <span>WHATSAPP</span><br />
            <span>98f98u984u</span><br />
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMSpFqbHCQFhvVGFbbpwCgdzndqbSTkjRxXPPjgprPfPtQVczdpHsthChdDZRtGfHxvKld" target="_blank" className="text-[#60bb46]">climatecarenetwork@gmail.com</a>
          </div>
        </div>
        <div className="lg:w-1/3 p-12">
          <span className="text-xl">General</span><br />
          {Links.map((link, index) => (
            <Link href={link.path} key={index}>
              <span className="flex flex-col gap-8">{link.name}</span>
            </Link>
          ))}
        </div>
        <div className='p-12'>
          <span className="text-xl mb-5">We Are Available on</span><br />
          <div className="lg:w-1/3 py-[10px] text-center flex gap-5">
            <span>
              <a href="" className="text-3xl text-center">
                <FaFacebook />
              </a>
            </span>
            <span>
              <a href="" className="text-3xl">
                <FaInstagram />
              </a>
            </span>
            <span>
              <a href="" className="text-3xl">
                <FaLinkedin />
              </a>
            </span>
            <span>
              <a href="" className="text-3xl">
                <FaTelegram />
              </a>
            </span>
          </div>
          <Image src="/images/Logo.png" alt="Logo" width={150} height={50} className="py-[10px]" />
        </div>
      </div>
      <div className="text-center">
        <div className="border-b-2 border-gray-300"></div>
        <span>{`Copyright ©${date} Climate Care Network. All rights reserved.`}</span>
      </div>
    </footer>
  );
};

export default Footer;
