import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { Link } from 'react-router-dom';
import Favicon from '../Images/Favicon.png';

export default function Profile() {
    const [avatar, setAvatar] = useState(null);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-8 py-6 bg-white" style={{ width: '100%', height: '100vh' }}>

            {/* Logo */}
            <img src={Favicon} alt="Logo" className="w-22 h-20 absolute top-0 left-0 mt-2 ml-4" />
            {/* Main Content Box */}
            <div className="w-full md:w-5/5 lg:w-4/5 xl:w-3/5 h-auto md:h-auto lg:h-auto xl:h-auto mx-auto p-8">
                <h1 className="text-5xl font-bold text-left mb-4">Welcome! Let's create your profile</h1>
                <p className="text-sm text-gray-500 text-left mb-8">Let others get to know you better! You can do these later</p>

                {/* Avatar Section */}
                <div className="mb-12">
                    <p className="text-lg text-left font-bold mb-4">Add Avatar</p>
                    <div className="flex items-center mb-6">
                        <label htmlFor="avatar" className="mr-4">
                            {avatar ? (
                                <img src={URL.createObjectURL(avatar)} alt="Avatar Preview" className="w-32 h-32 rounded-full" />
                            ) : (
                                <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center mr-2">
                                    <CameraIcon className="text-gray-400 text-2xl" />
                                </div>
                            )}
                        </label>
                        <input type="file" id="avatar" accept="image/*" onChange={handleAvatarChange} className="hidden" />
                        <button onClick={() => document.getElementById('avatar').click()} className="border border-gray-400 px-4 py-2 rounded-md">Choose Image</button>
                        
                    </div>
                   
                </div>

                <div className="flex flex-col  mb-8">
                    <h2 className="text-lg text-left font-semibold mb-2">Add your location</h2>
                    <Input className="border-gray-300 mb-2" placeholder="Enter a location" />
                </div>
                <Link to="/card">
                    <Button className="text-white rounded-md py-2 px-4 mb-9 w-48 mt-8">Next</Button>
                </Link>
                <Link to="/">
                <p className="text-sm text-gray-500">or Press RETURN</p>
                </Link>
            </div>
        </div>
    );
}

function CameraIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
