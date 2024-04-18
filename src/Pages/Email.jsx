import React, { useState } from 'react';
import Button from "../components/ui/Button";
import DribbbleIcon from "../components/icons/DribbbleIcon";
import FacebookIcon from "../components/icons/FacebookIcon";
import InstagramIcon from "../components/icons/InstagramIcon";
import MailIcon from "../components/icons/MailIcon";
import SearchIcon from "../components/icons/SearchIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import Favicon from '../Images/Favicon.png';
import CameraIcon from '../components/icons/CameraIcon'; // Import the CameraIcon component
import {Link} from 'react-router-dom';
export default function Email() {
 const [menuOpen, setMenuOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Example logic for uploading the selected file
    if (selectedFile) {
      // Here you can use APIs or functions to handle the file upload
      console.log('Selected file:', selectedFile);
      // Reset the selected file state after uploading
      setSelectedFile(null);
    }
  };

  const [avatar, setAvatar] = useState(null);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    };


  return (
    <div className="bg-white min-h-screen">
      <header className="border-b py-4 relative">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={Favicon} alt="Logo" className="w-32 md:w-40 h-12 md:h-14" style={{ zIndex: 999 }} />
        </Link>
        {/* Menu Toggle Button */}
        <button onClick={toggleMenu} className="block md:hidden text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        {/* Menu Items */}
        <div className={`absolute top-full left-0 mt-2 bg-white w-full md:w-auto md:relative md:flex md:space-x-4 md:flex md:block ${menuOpen ? 'block' : 'hidden'}`}>
          <Link to="#" className="block text-gray-600 hover:text-gray-800 py-2 px-4 md:py-1 md:px-2">
            Inspiration
          </Link>
          <Link to="#" className="block text-gray-600 hover:text-gray-800 py-2 px-4 md:py-1 md:px-2">
            Find Work
          </Link>
          <Link to="#" className="block text-gray-600 hover:text-gray-800 py-2 px-4 md:py-1 md:px-2">
            Learn Design
          </Link>
          <Link to="#" className="block text-gray-600 hover:text-gray-800 py-2 px-4 md:py-1 md:px-2">
            Go Pro
          </Link>
          <Link to="#" className="block text-gray-600 hover:text-gray-800 py-2 px-4 md:py-1 md:px-2">
            Hire Designers
          </Link>
        </div>
        <div className="flex items-center space-x-4 flex-grow">
          <div className="relative flex-grow">
            <input className="border rounded-md py-2 px-4 w-full" placeholder="Search..." type="text" />
            <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          {/* Avatar Upload */}
          <div className="flex items-center mb-0">
          <div className="w-12 md:w-14 h-12 md:h-14 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center mb-0 mt-0 md:mb-0 mr-0 md:mr-2">
                        {avatar ? (
                            <img src={URL.createObjectURL(avatar)} alt="Avatar Preview" className="w-full h-full rounded-full object-cover" />
                        ) : (
                            <CameraIcon onClick={() => document.getElementById('avatar').click()} />
                        )}
                    </div>
                    <input type="file" id="avatar" accept="image/*" onChange={handleAvatarChange} className="hidden" />
                        <button onClick={() => document.getElementById('avatar').click()} className="border border-gray-400 px-4 py-2 rounded-md mb-0 md:mb-0 md:ml-2 bg-pink-500 hover:bg-pink-600 text-white" >Upload</button>
          </div>
        </div>
      </div>
    </header>
       {/* Main content */}
       <main className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <MailIcon className="mx-auto text-pink-500 w-16 h-16" />
          <h1 className="text-3xl font-bold my-6">Please verify your email...</h1>
          <p className="text-lg mb-4">Please verify your email address. We've sent a confirmation email to:</p>
          <p className="text-lg font-medium mb-6">account@refero.design</p>
          <p className="text-lg mb-4">Click the confirmation link in that email to begin using Dribbble.</p>
          <p className="text-lg mb-4">
            Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't
            see it, you can resend the confirmation email.
          </p>
          <a className="text-pink-500 hover:text-pink-600 font-medium" href="#">
            Wrong email address? Change it.
          </a>
        </div>
      </main>
      {/* Footer */}
      <footer className="border-t py-8">
        <div className="max-w-6xl text-left mx-auto px-4 grid grid-cols-2 md:grid-cols-6 gap-8">
          <div>
            <div className="w-18 mb-4 ml-0 items-center">
              <img src={Favicon} alt="Footer Logo" />
            </div>
            <p className="text-gray-500 text-sm">
              Dribbble is the world's leading community for creatives to share, grow, and get hired.
            </p>
            <div className="flex space-x-2 mt-4">
              <a className="text-gray-500 hover:text-gray-700" href="#">
                <DribbbleIcon className="w-6 h-6" />
              </a>
              <a className="text-gray-500 hover:text-gray-700" href="#">
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a className="text-gray-500 hover:text-gray-700" href="#">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a className="text-gray-500 hover:text-gray-700" href="#">
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="text-left">
            <h6 className="font-bold mb-2 ml-0">For designers</h6>
            <ul className="space-y-1 text-gray-600 text-left">
              <li>
                <a className="hover:text-gray-800" href="#">
                  Go Pro!
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Explore design work
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Design blog
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Overtime podcast
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Playoffs
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Weekly Warm-Up
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Refer a Friend
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Code of conduct
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-2 ml-0">Hire designers</h6>
            <ul className="space-y-1 text-gray-600">
              <li>
                <a className="hover:text-gray-800" href="#">
                  Post a job opening
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Post a freelance project
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Search for designers
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Brands
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Advertise with us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-2 ml-0">Company</h6>
            <ul className="space-y-1 text-gray-600">
              <li>
                <a className="hover:text-gray-800" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Support
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Media kit
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  API
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Terms of service
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Privacy policy
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Cookie policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-2 ml-0">  Directories</h6>
            <ul className="space-y-1 text-gray-600">
              <li>
                <a className="hover:text-gray-800" href="#">
                  Design jobs
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Designers for hire
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Freelance designers for hire
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Tags
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Places
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Design assets
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Dribbble Marketplace
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Creative Market
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Fontspring
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Font Squirrel
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-2 ml-0">Design Resources</h6>
            <ul className="space-y-1 text-gray-600">
              <li>
                <a className="hover:text-gray-800" href="#">
                  Freelancing
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Design Hiring
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Design Portfolio
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Design Education
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Creative Process
                </a>
              </li>
              <li>
                <a className="hover:text-gray-800" href="#">
                  Design Industry Trends
                </a>
              </li>
            </ul>
          </div>

        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          <p>© 2023 Dribbble. All rights reserved.</p>
          <p>20,501,853 shots dribbbled</p>
        </div>
      </footer>
    </div>
  );
}








