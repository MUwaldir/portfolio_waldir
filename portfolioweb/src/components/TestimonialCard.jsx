import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="text-gray-800">{testimonial.name}</p>
          <p className="text-gray-600 text-sm">{testimonial.position}</p>
        </div>
      </div>
      <p className="text-gray-700">{testimonial.text}</p>
    </div>
  );
};

export default TestimonialCard;