// write the component code here
import React from "react";

const Usercard = () => {
  // Dummy static user details
  const profilePhoto = "https://via.placeholder.com/100"; // Placeholder image
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 234 567 890";
  const address = "123 Main St, Springfield, USA";

  return (
    <div className="p-4 border rounded-lg shadow-lg w-64 bg-white">
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-20 h-20 rounded-full mx-auto"
      />
      <h2 className="text-xl font-bold text-center mt-2">{name}</h2>
      <p className="text-gray-600 text-center">{email}</p>
      <p className="text-gray-600 text-center">{phone}</p>
      <p className="text-gray-600 text-center">{address}</p>
    </div>
  );
};

export default Usercard;
