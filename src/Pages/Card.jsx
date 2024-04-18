import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Imgfirst from '../Images/Imgfirst.png';
import Imgsecond from '../Images/Imgsecond.png';
import Imgthird from '../Images/Imgthird.png';
import { FaCheck } from 'react-icons/fa';

export default function Component() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="container-fluid bg-white py-5">
      <div className="container">
        <div className="row justify-content-between align-items-center mb-4">
          <Link to="/profile" className="text-gray-400 cursor-pointer col-auto">
            <BackArrowIcon className="text-gray-400 cursor-pointer" />
          </Link>
          <div className="col-auto">
            <DribbbleIcon className="text-pink-500 text-4xl" />
          </div>
        </div>
        <h1 className="text-center mb-4">What brings you to Dribbble?</h1>
        <p className="text-center mb-5">
          Select the options that best describe you. Don’t worry, you can explore other options later.
        </p>
        <div className="row row-cols-1 row-cols-md-4 gap-4 mb-5 justify-content-center">
          {/* Added justify-content-center class to align cards in the center */}
          <OptionCard
            image={Imgfirst}
            alt="Alt text for image 1"
            title="I’m a designer looking to share my work"
            description="Hundreds of millions of people look for design inspiration and feedback on Dribbble."
            setShowText={setShowText}
          />
          <OptionCard
            image={Imgsecond}
            alt="Alt text for image 2"
            title="I’m looking to hire a good designer"
            description="Dribbble is the leading destination to find & showcase creative work and home to the world's best design professionals."
            setShowText={setShowText}
          />
          <OptionCard
            image={Imgthird}
            alt="Alt text for image 3"
            title="I’m looking for design inspiration"
            description="With over 7 million shots from a vast community of designers, Dribble is the leading source for design inspiration."
            setShowText={setShowText}
          />
        </div>
        <div className="text-center">
          {showText && <p className="mb-4">Anything else? You can select multiple</p>}
          <Link to="/email">
            <Button className="text-white rounded-md py-2 px-4 w-32 md:w-48">Finish</Button>
          </Link>
          <Link to="/profile">
            <p className="text-sm text-gray-500 mt-4">or Press RETURN</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

function OptionCard({ image, alt, title, description, setShowText }) {
  const [selectedOption, setSelectedOption] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOptionSelect = () => {
    setSelectedOption(!selectedOption);
    setShowText(true);
  };

  const handleUnselect = () => {
    setSelectedOption(false);
    setShowText(false);
  };

  return (
    <div
      className={`border-4 p-4 rounded-lg text-center transition duration-300 transform ${
        isHovered ? 'hover:shadow-lg hover:-translate-y-1 border-pink-500' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ maxWidth: '250px' }} // Adjust max-width to decrease card size
    >
      <img src={image} alt={alt} className="h-32 w-auto object-cover mx-auto mb-4" /> {/* Adjust image size */}
      <h2 className="font-semibold mt-2 mb-2 text-sm">{title}</h2> {/* Adjust font size */}
      {selectedOption && <p className="text-xs mt-2">{description}</p>} {/* Adjust font size */}
      <div className="flex justify-center">
        <TextboxSelector isSelected={selectedOption} onClick={selectedOption ? handleUnselect : handleOptionSelect} />
      </div>
    </div>
  );
}

function TextboxSelector({ isSelected, onClick }) {
  return (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center border border-pink-500 cursor-pointer ${
        isSelected ? 'bg-pink-500 text-white' : ''
      }`}
      onClick={onClick}
    >
      {isSelected && <FaCheck className="text-white" />}
    </div>
  );
}

function BackArrowIcon(props) {
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
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function DribbbleIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  );
}
