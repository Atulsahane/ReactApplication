// ProfileImage.js

import React from 'react';

const ProfileImage = ({ imageUrl, onClick }) => {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden">
      <img src={imageUrl} alt="Profile" className="w-full h-full object-cover" />
    </div>
  );
}

export default ProfileImage;
