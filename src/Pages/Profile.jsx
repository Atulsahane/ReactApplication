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

    const CameraIcon = ({ onClick }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400 text-xl md:text-2xl cursor-pointer"
            onClick={onClick}
        >
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
        </svg>
    );

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-8 py-6 bg-white" style={{ width: '100%', minHeight: '100vh' }}>
            {/* Logo */}
            <img src={Favicon} alt="Logo" className="w-32 md:w-40 h-auto absolute top-0 left-0 mt-2 ml-4" />
            {/* Main Content Box */}
            <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 h-auto mx-auto p-4 md:p-8">
                <h1 className="text-3xl md:text-5xl font-bold text-left mb-4">Welcome! Let's create your profile</h1>
                <p className="text-sm md:text-base text-gray-500 text-left mb-8">Let others get to know you better! You can do these later</p>

                {/* Avatar Section */}
                <div className="mb-8 md:mb-12 relative flex flex-col md:flex-row items-center">
                    <div className="w-32 md:w-40 h-32 md:h-40 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center mb-4 md:mb-0 mr-0 md:mr-2">
                        {avatar ? (
                            <img src={URL.createObjectURL(avatar)} alt="Avatar Preview" className="w-full h-full rounded-full object-cover" />
                        ) : (
                            <CameraIcon onClick={() => document.getElementById('avatar').click()} />
                        )}
                    </div>
                    <div className="flex flex-col md:flex-row items-center">
                        <input type="file" id="avatar" accept="image/*" onChange={handleAvatarChange} className="hidden" />
                        <button onClick={() => document.getElementById('avatar').click()} className="border border-gray-400 px-4 py-2 rounded-md mb-2 md:mb-0 md:ml-2">Choose Image</button>
                    </div>
                </div>

                <div className="flex flex-col mb-8">
                    <h2 className="text-lg text-left font-semibold mb-2">Add your location</h2>
                    <Input className="border-gray-300 mb-2" placeholder="Enter a location" />
                </div>
                <Link to="/card">
                    <Button className="text-white rounded-md py-2 px-4 mb-9 w-32 md:w-48 mt-2">Next</Button>
                </Link>
                <Link to="/">
                    <p className="text-sm text-gray-500 ">or Press RETURN</p>
                </Link>
            </div>
        </div>
    );
}
