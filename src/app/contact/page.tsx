import React from "react";
import { IoIosSend } from "react-icons/io";
import NewsTitle from "../Components/NewsTitle/NewsTitle";

const Contact = () => {
  const inputStyle =
    "outline-none border-[1px] border-black p-2 w-full lg:w-3/4";
  return (
    <div className="w-full lg:w-[1080px] m-auto p-5">
      <NewsTitle title="Contact US" />
      <div className="contact-container flex flex-col lg:flex-row mt-10 gap-5">
        <form className="contact-form w-full flex flex-col gap-3">
          {/* --------Name ---------- */}
          <span className="flex flex-col">
            <label className="mb-2" htmlFor="name">
              Enter Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              minLength={3}
              className={`${inputStyle}`}
            />
          </span>
          {/* --------Name End---------- */}
          {/* --------Email ---------- */}
          <span className="flex flex-col">
            <label className="mb-2" htmlFor="email">
              Enter Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className={`${inputStyle}`}
            />
          </span>
          {/* --------Email End ---------- */}
          {/* -------- Subject ---------- */}
          <span className="flex flex-col">
            <label className="mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              className={`${inputStyle}`}
            />
          </span>
          {/* --------Subject End ---------- */}
          {/* -------- Message ---------- */}
          <span className="flex flex-col">
            <label className="mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={7}
              placeholder="Message"
              className={`${inputStyle}`}
            ></textarea>
          </span>
          {/* --------Subject End ---------- */}
          {/* -------Send Button ------- */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-800 w-[150px] text-white p-3 px-8 flex items-center gap-3"
          >
            Submit
            <div className="text-xl">
              <IoIosSend className="text-white" />
            </div>
          </button>
          {/* -------Send Button End ------- */}
        </form>
        <div className="our-location flex justify-center">
          <div className="gmap_canvas">
            <iframe
              width="350"
              height="550"
              title="our-location"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Bhaktapur Nepal&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
