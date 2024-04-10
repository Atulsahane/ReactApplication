// SignInPage.js
import React, { useState } from 'react';
import Favicon from '../Images/Favicon.png';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform authentication logic
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative">
      <img src={Favicon} alt="Logo" className="w-22 h-20 absolute top-0 left-0 mt-2 ml-4" />
      <div className="max-w-md w-full space-y-8">
        <div className="flex justify-between">
          <h2 className="text-center text-3xl font-semibold text-gray-900 ml-14">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-4" // added mb-4 for margin bottom
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" // Reduced padding and font size
            >
              Sign in
            </button>
          </div>

          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">Don't have an account?</span>{' '}
            <a href="/" className="text-sm text-pink-500 hover:underline">Create New Account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;