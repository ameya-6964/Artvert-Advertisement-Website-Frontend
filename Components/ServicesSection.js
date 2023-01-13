import React from "react";
import Image from "next/image";

//! Imported Icons
import clock from "../public/clock.svg";
import diaphragm from "../public/diaphragm.svg";
import money from "../public/money.svg";
import teamwork from "../public/teamwork.svg";
import mural2 from "../public/mural2.jpg";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>Quality</span>Services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <Image src={clock} alt="clock" width={30} height={30} />
              <h3>Efficient</h3>
            </div>
            <p> Lorem ipsum dolor sit amet. </p>
          </div>
          <div className="card">
            <div className="icon">
              <Image src={diaphragm} alt="clock" width={30} height={30} />
              <h3>Skilled Artist</h3>
            </div>
            <p> Lorem ipsum dolor sit amet. </p>
          </div>
          <div className="card">
            <div className="icon">
              <Image src={money} alt="clock" width={30} height={30} />
              <h3>Cost Efficient</h3>
            </div>
            <p> Lorem ipsum dolor sit amet. </p>
          </div>
          <div className="card">
            <div className="icon">
              <Image src={teamwork} alt="clock" width={30} height={30} />
              <h3>Amazing Team</h3>
            </div>
            <p> Lorem ipsum dolor sit amet. </p>
          </div>
        </div>
      </div>
      <div className="image">
        <Image src={mural2} alt="Guy Making Mural 2" height={500} width={400} />
      </div>
    </div>
  );
};

export default ServicesSection;
