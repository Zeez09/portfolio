import React from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("jukeboxx", "template_gdihhri", e.target, "w1pYAtaZ4DLFFD1Kt")
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email, please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="max-w-6xl flex flex-col justify-center items-center bg-[#1e1e1e] text-white"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-6xl font-bold">Say hello</h1>
        <h3 className="text-lg md:text-2xl mt-5 max-w-2xl mx-auto">
          Have any project in mind? Shoot me a message — let's work together!
        </h3>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={sendEmail}
        className="w-full  flex flex-col items-center gap-5 p-8 bg-[#0b0b0b]/80 border border-violet-500/30 rounded-2xl shadow-[0_0_30px_5px_rgba(139,92,246,0.25)]"
      >
        {/* Name & Email */}
        <div className="flex flex-col sm:flex-row w-full justify-center gap-4">
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="w-full sm:w-1/2 border border-gray-700 bg-transparent text-white placeholder-gray-400 p-2 sm:p-3 text-sm sm:text-base rounded-lg focus:outline-none focus:border-violet-500"
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="w-full sm:w-1/2 border border-gray-700 bg-transparent text-white placeholder-gray-400 p-2 sm:p-3 text-sm sm:text-base rounded-lg focus:outline-none focus:border-violet-500"
  />
</div>

{/* Message */}
<textarea
  name="message"
  placeholder="Your Message"
  required
  className="w-full border border-gray-700 bg-transparent text-white placeholder-gray-400 p-2 sm:p-3 text-sm sm:text-base rounded-lg focus:outline-none focus:border-violet-500 resize-none h-28 sm:h-36 mt-4"
></textarea>

{/* Submit Button */}
<button
  type="submit"
  className="bg-violet-600 text-white px-5 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-violet-700 transition font-medium sm:font-semibold mt-4 text-sm sm:text-base"
>
  Send
</button>

      </form>
    </section>
  );
};

export default ContactForm;
