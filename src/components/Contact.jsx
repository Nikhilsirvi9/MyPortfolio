import React, { useState } from 'react'
import Heading from './common/Heading'
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5c24f3bd-8144-41ec-b6f7-b84ab345f2fd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setLoading(false);
    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Email send successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert("Error");
      setResult(data.message);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen h-max gap-16 px-4 md:px-8" id='contact'>
      <Heading title="Get in Touch" />

      <div className="flex flex-col lg:flex-row gap-8 text-slate-300 w-full lg:w-[82%]">
        <div className="flex flex-col w-full lg:w-[45%] gap-5">
          <h1 className="text-[2rem] md:text-[3rem] font-josephin font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Let's Talk
          </h1>
          <p className="text-sm md:text-base">
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex gap-4 items-center">
              <div className="text-[1.5rem]">
                <MdEmail />
              </div>
              <div className="text-[1rem] md:text-[1.1rem]">nikhilsirvi9@gmail.com</div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="text-[1.5rem]">
                <FaPhoneVolume />
              </div>
              <div className="text-[1rem] md:text-[1.1rem]">+91 8817057601</div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="text-[1.5rem]">
                <FaLocationDot />
              </div>
              <div className="text-[1rem] md:text-[1.1rem]">Indore, Madhya Pradesh</div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[55%]">
          <form onSubmit={onSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="text-base md:text-xl">
                Your Name
              </label>
              <input
                className="w-full h-[3rem] md:h-[3.8rem] rounded-md bg-zinc-700 pl-4"
                placeholder="Enter your name"
                type="text"
                id="name"
                name="name"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-base md:text-xl">
                Your Email
              </label>
              <input
                className="w-full h-[3rem] md:h-[3.8rem] text-white rounded-md bg-zinc-700 pl-4"
                placeholder="Enter your Email"
                id="email"
                type="text"
                name="email"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="message" className="text-base md:text-xl">
                Write your message here
              </label>
              <textarea
                className="w-full h-[5rem] md:h-[6.5rem] rounded-md text-white bg-zinc-700 pl-4 pt-4"
                placeholder="Enter your message"
                name="message"
                id="message"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`bg-gradient-to-r from-indigo-500 to-pink-500 w-36 h-12 md:h-14 py-3 rounded-3xl cursor-pointer border-black hover:scale-110 transition-transform duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Submitting..." : "Submit now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;