
import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="bg-[#010851] text-white absolute w-full">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#0c0e6d] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-blue-600">Get the</span> experience of e-license.
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your ph.no"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-black hover:text-white md:w-auto w-full"
          >
            Send
          </button>
        </div>
      </div>
     
     <center> <ItemsContainer /></center>


     
     <hr/>
     
      

     
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-12 "
      >
        <span>© 2023 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
       
      </div>

    </footer>
  );
};

export default Footer;