import React from "react";

const SocialLink = ({ icon, href, className }) => {
  return (
    <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center text-gray-600 hover:text-gray-900 hover:underline transition duration-300 ${className}`}
  >
    {icon}
  </a>
  );
};

export default SocialLink;