import React from "react";

const ContactPage = () => {
  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=1234567890", "_blank");
  };

  return (
    <div className="flex-grow mx-auto py-16">
      <h1 className="text-3xl font-extrabold text-center mb-8">Contact Me</h1>
      <div className="flex justify-center">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleWhatsApp}
        >
          Contact via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
