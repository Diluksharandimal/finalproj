import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-blue-400">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-300 mx-1.5 text-xl text-black hover:text-gray-100 hover:bg-blue-600
        duration-300 "
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
