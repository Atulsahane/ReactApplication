import React, { useState } from 'react';
import HomeImage from '../Images/HomeImage.png'; // Import the image file
import { Link } from "react-router-dom";
import Favicon from '../Images/Favicon.png';
import Button from '../components/ui/Button';

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
    <div className="container-fluid min-vh-100 d-flex flex-column">
      <div className="row">
        <div className="col-lg-6 col-md-12 bg-[#EFCCD0] p-5 position-relative overflow-auto">
          <img src={Favicon} alt="Logo" className="w-32 md:w-40 h-auto absolute top-0 left-0 mt-2 ml-4" />
          <h2 className="text-yellow-800 text-left text-3xl font-bold mt-5 mb-4">Discover the world's top Designers & Creatives</h2>
          <img src={HomeImage} alt="Image" className="w-100 mb-4" loading="lazy" />
          <p className='text-left'>Art By <b><i>Atul Sahane</i></b></p>
        </div>
        <div className="col-lg-6 col-md-12 d-flex text-left flex-column justify-content-center bg-white p-5 overflow-auto">
          <Link to="/signin" className="text-sm text-right text-[#EA4C89]">Already a member? Sign In</Link>
          <div className="mb-4">
            <h2 className="text-3xl text-left font-semibold">Sign up to Dribbble</h2>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-6 mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-sm-6 mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Your Username" onChange={handleUsernameChange} required />
              {usernameStatus && <div className="text-sm text-red-500">{usernameStatus}</div>}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="account@refero.design" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="6+ characters" required />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="terms" required />
            <label htmlFor="terms" className="form-check-label">Creating an account means you’re okay with our Terms of Service, Privacy Policy, and our default Notification Settings.</label>
          </div>
          <Link to="/profile">
            <Button className="text-white rounded-md py-2 px-4 mb-6 md:mb-9 w-full md:w-auto">Create Button</Button>
          </Link>
          <p className="text-xs text-gray-500">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
