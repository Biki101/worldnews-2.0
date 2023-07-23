import React from "react";
import NewsTitle from "../Components/NewsTitle/NewsTitle";

const About = () => {
  return (
    <div className="w-[1080px] m-auto p-5">
      <NewsTitle title="About US" />
      <div className="about-container flex mt-10">
        <div className="about-content">
          Welcome to our news website! We are dedicated to providing accurate
          and up-to-date information to our readers. Our team of experienced
          journalists and editors work around the clock to bring you the latest
          news from around the world, covering a wide range of topics including
          politics, business, technology, sports, and more.
          <br />
          <br />
          We believe in transparency and fairness in our reporting, and strive
          to provide balanced and impartial coverage of events. Our goal is to
          inform and educate, and we aim to do so in an engaging and accessible
          manner.
          <br />
          <br />
          We value the opinions of our readers and welcome feedback and
          suggestions. Our website is designed to be user-friendly and
          accessible, making it easy for you to stay informed and connected with
          the world.
          <br />
          <br />
          Thank you for choosing us as your source of news and information. We
          are committed to delivering high-quality journalism and hope you will
          join us on this journey.
        </div>
        <div className="our-location">
          <div className="gmap_canvas">
            <iframe
              width="350"
              height="500"
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

export default About;
