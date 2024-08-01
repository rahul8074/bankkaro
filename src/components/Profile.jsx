import React from "react";
import profilePhoto from "../assets/bankkaro/profile.png";
import signIn from "../assets/bankkaro/button.png"

const Profile = () => {
  return (
    <div className="flex items-center relative rounded-xl cursor-pointer">
    <img src={signIn} className="h-8" />
    <img
          src={profilePhoto}
          alt="Avatar"
          className="absolute w-12 h-12 rounded-full  border-4 border-lightGray -right-6"
        />
    </div>
  );
};

export default Profile;
