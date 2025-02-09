import React from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer'; // Assuming you have a Footer component
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneMissed } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Climate Care Network</title>
        <link rel="icon" href="/images/Logo.png" />
      </Head>

      {/* Main Content Section */}
      <main className="min-h-screen bg-gray-50 font-poppins text-gray-900">

        {/* Header Section with Hollow Typography */}
        <header className="bg-gradient-to-r from-green-400 to-green-600 py-16">
          <div className="max-w-screen-lg mx-auto text-center text-white">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="Hollow">C</span>
              <span className="Hollow">O</span>
              <span className="Hollow">N</span>
              <span className="Hollow">T</span>
              <span className="Hollow">A</span>
              <span className="Hollow">C</span>
              <span className="Hollow">T</span><br />
              <span className="Hollow" style={{
                WebkitTextStroke: '2px black',
                color: 'transparent',
              }}>
                US
              </span><br />
              <span className="smallHollow">Connecting with You</span>
            </div>
            <p className="mt-4 text-xl font-medium opacity-80">We would love to hear from you!</p>
          </div>
        </header>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className=" max-w-screen-lg mx-auto flex flex-col lg:flex-row justify-between items-center px-6 space-y-12 lg:space-y-0">
            {/* Address Section */}
            <div className="flex flex-col items-center text-center bg-green-50 p-8 rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-xl transform hover:scale-105">
              <FaLocationDot className="text-4xl text-green-600" />
              <h2 className="mt-4 text-2xl font-semibold text-gray-800">Address</h2>
              <p className="mt-2 text-gray-600">123 Green Earth Avenue, Sustainability City, 56789</p>
            </div>

            {/* Phone Section */}
            <div className=" flex flex-col items-center text-center bg-green-50 p-8 rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-xl transform hover:scale-105">
              <MdOutlinePhoneMissed className="text-4xl text-green-600" />
              <h2 className="mt-4 text-2xl font-semibold text-gray-800">Phone</h2>
              <p className="mt-2 text-gray-600">+1 (234) 567-8900</p>
            </div>

            {/* Email Section */}
            <div className="flex flex-col items-center text-center bg-green-50 p-11 rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-xl transform hover:scale-105">
              <MdEmail className="text-4xl text-green-600" />
              <h2 className="mt-4 text-2xl font-semibold text-gray-800">Email</h2>
              <p className="mt-2 text-gray-600">contact@climatecarenetwork.org</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="max-w-screen-lg mx-auto text-center text-gray-900">
            <h2 className="text-3xl font-semibold text-green-800">Send Us a Message</h2>
            <p className="mt-4 mb-10 text-lg text-gray-700">We'd love to hear your feedback, questions, or suggestions.</p>
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-4 rounded-md text-gray-900 w-full md:w-1/2 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-4 rounded-md text-gray-900 w-full md:w-1/2 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                  required
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="p-4 rounded-md text-gray-900 w-full h-40 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                required
              />
              <button
                type="submit"
                className="w-full py-3 mt-6 text-white text-xl font-semibold bg-green-600 rounded-md hover:bg-green-700 transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default ContactPage;
