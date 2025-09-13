import React from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineDocumentText,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <section className="bg-gray-900 text-white font-space">
      <div className="max-w-2xl mx-auto text-center py-20 px-4 flex flex-col items-center space-y-8">
        <h2 className="text-4xl font-bold tracking-tight">Contact</h2>

        <p className="text-lg text-gray-300">
          Interested in working together? <br /> Let's have a conversation.
        </p>

        <div className="flex items-center gap-2 text-gray-400">
          <HiOutlineLocationMarker className="w-5 h-5" />
          <span>Ibadan, OYO STATE</span>
        </div>

        {/* --- Buttons --- */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
            href="mailto:adebiyiridwan91@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Ridwan,%0D%0AI'd%20like%20to%20discuss%20a%20project%20with%20you."
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
          >
            <HiOutlineMail className="w-5 h-5" />
            <span>Get in Touch</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1gH03WCGuvbk5WpN-ilVKrn-mWhIUOmWg/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-gray-500 text-gray-200 font-semibold hover:bg-gray-800 hover:border-gray-400 transition-colors duration-300"
          >
            <HiOutlineDocumentText className="w-5 h-5" />
            <span>View Resume</span>
          </a>
        </div>
        <div className="flex flex-col gap-5 items-center lg:items-starttext-gray-300 ">
          <div className="grid grid-cols-4 gap-6 ">
            <NavLink
              to="https://github.com/donrealex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl" />
            </NavLink>
            <NavLink
              to="https://linkedin.com/in/adebiyi-ridwan-b09705232/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl" />
            </NavLink>
            <NavLink
              to="https://x.com/donrealex1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="text-2xl" />
            </NavLink>
          </div>
          <p className="text-sm  mt-4">
            Copyright © {new Date().getFullYear()} Portfolio.
            <br /> All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
