import React, { useState } from 'react';

import Button from "../components/ui/Button";
import DribbbleIcon from "../components/icons/DribbbleIcon";
import FacebookIcon from "../components/icons/FacebookIcon";
import InstagramIcon from "../components/icons/InstagramIcon";
import MailIcon from "../components/icons/MailIcon";
import SearchIcon from "../components/icons/SearchIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import Favicon from '../Images/Favicon.png';


export default function Email() {
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
          <img src={Favicon} alt="Logo" className="w-22 h-14" style={{ zIndex: 999 }} /> {/* Increased size */}
          <div className="flex space-x-4">
            <a className="text-gray-600 hover:text-gray-800" href="#">
              Inspiration
            </a>
            <a className="text-gray-600 hover:text-gray-800" href="#">
              Find Work
            </a>
            <a className="text-gray-600 hover:text-gray-800" href="#">
              Learn Design
            </a>
            <a className="text-gray-600 hover:text-gray-800" href="#">
              Go Pro
            </a>
            <a className="text-gray-600 hover:text-gray-800" href="#">
              Hire Designers
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input className="border rounded-md py-2 px-4" placeholder="Search..." type="text" />
              <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div className="flex items-center mb-0">
                        <label htmlFor="avatar" className="mr-4">
                            {avatar ? (
                                <img src={URL.createObjectURL(avatar)} alt="Avatar Preview" className="w-20 h-20 rounded-full" />
                            ) : (
                                <div className="w-12 h-12 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center mr-2">
                                    <CameraIcon className="text-gray-400 text-2xl" />
                                </div>
                            )}
                        </label>
                        <input type="file" id="avatar" accept="image/*" onChange={handleAvatarChange} className="hidden" />
                        <button onClick={() => document.getElementById('avatar').click()} className="border border-gray-400 px-4 py-2 rounded-md bg-pink-500 hover:bg-pink-600 text-white">Upload</button>
                        
                    </div>
            {/* <Button className="bg-pink-500 hover:bg-pink-600 text-white">Upload</Button> */}
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

function CameraIcon(props) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
      </svg>
  );
}
   