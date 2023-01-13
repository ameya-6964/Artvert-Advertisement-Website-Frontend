import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We Work To Make</h2>
          </div>
          <div className="hide">
            <h2>
              Your <span>Brand</span> and <span> Art</span>
            </h2>
          </div>
          <div className="hide">
            <h2> Get Proper Advertised </h2>
          </div>
        </div>
        <p>
          Contact Us For Any Brand Advertisement Or Painting High Quality
          Murals, We Work With Professional Graffiti And Street Artists.
        </p>
        <button> Contact Us </button>
      </div>
      <div className="image">
        <Image
          src="/mural.jpg"
          alt="guy Making Mural"
          height={500}
          width={400}
        />
      </div>
    </div>
  );
};

export default AboutSection;
