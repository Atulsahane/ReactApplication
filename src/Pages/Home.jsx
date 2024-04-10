import React, { useState } from 'react';
import HomeImage from '../Images/HomeImage.png'; // Import the image file
import { Link } from "react-router-dom";
import Favicon from '../Images/Favicon.png';

function Home() {
  const [usernameStatus, setUsernameStatus] = useState('');

  const handleUsernameChange = (event) => {
    const username = event.target.value;
    let status = '';

    if (!/[a-z]/.test(username)) {
      status += 'Use lowercase ';
    }
    if (!/[A-Z]/.test(username)) {
      status += 'uppercase ';
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(username)) {
      status += 'special character ';
    }
    if (username.length < 8) {
      status += 'at least 8 characters ';
    }

    if (status === '') {
      setUsernameStatus('');
    } else {
      setUsernameStatus(`Must contain at least one number and one uppercase and lowercase letter, and ${status}`);
    }
  };

  return (
    <div key="1" className="container-fluid min-h-screen bg-[#F4D086]">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 bg-[#F3D58C] p-12 relative">
          <img src={Favicon} alt="Logo" className="w-22 h-20 absolute top-8 left-2 mt-2 ml-4" />
          <h2 className="text-yellow-800 text-left text-3xl font-bold mt-24 ml-10 mb-6">Discover the world's top Designers & Creatives</h2>
          <img src={HomeImage} alt="Image" className="w-full mx-auto mt-6 img-fluid" />
          <p className='mt-12 text-left ml-10'>Art By Atul Sahane</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 flex flex-col justify-center bg-white p-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold">Sign up to Dribbble</h2>
            <Link to="/signin" className="text-sm text-[#EA4C89]">
              Already a member? Sign In
            </Link>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-left" htmlFor="name">
              Name
            </label>
            <input
              className="form-control text-sm rounded-md"
              id="name"
              placeholder="Your Name"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-left" htmlFor="username">
              Username
            </label>
            <input
              className="form-control text-sm rounded-md mb-1"
              id="username"
              type="text"
              placeholder="Your Username"
              onChange={handleUsernameChange}
            />
            {usernameStatus && <div className="text-sm text-red-500">{usernameStatus}</div>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-left" htmlFor="email">
              Email
            </label>
            <input
              className="form-control text-sm rounded-md"
              id="email"
              placeholder="account@refero.design"
              type="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-left" htmlFor="password">
              Password
            </label>
            <input
              className="form-control text-sm rounded-md"
              id="password"
              placeholder="6+ characters"
              type="password"
            />
          </div>
          <label htmlFor="terms" className="text-sm ml-1 text-left">
            <input className="form-check-input text-[#EA4C89] mr-2" id="terms" type="checkbox" />
            Creating an account means you’re okay with our Terms of Service, Privacy Policy, and our default Notification Settings.
          </label>
          <Link to="/profile" className="text-left">
            <button className="btn bg-[#EA4C89] btn-primary rounded-md py-2 px-4 mb-4 w-48 mt-5">Create Account</button>
          </Link>
          <p className="text-xs text-gray-500 text-left">
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
