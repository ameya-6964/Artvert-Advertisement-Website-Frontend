import React from "react";
import Image from "next/image";

//! Imported Icons
import clock from "../public/clock.svg";
import diaphragm from "../public/diaphragm.svg";
import money from "../public/money.svg";
import teamwork from "../public/teamwork.svg";
import mural2 from "../public/mural2.jpg";

//! Styles
import { About, Description, StyleImage } from "@/pages/styles";
import styled from "styled-components";

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>Quality </span>Services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <Image src={clock} alt="clock" width={30} height={30} />
              <h3>Efficient</h3>
            </div>
            <p> Capture Attention Get Exposure Generate Buzz Quickly </p>
          </Card>
          <Card>
            <div className="icon">
              <Image src={diaphragm} alt="clock" width={30} height={30} />
              <h3>Skilled Artist</h3>
            </div>
            <p>Professional Artists To Deliver Complicated Projects</p>
          </Card>
          <Card>
            <div className="icon">
              <Image src={money} alt="clock" width={30} height={30} />
              <h3>Cost Efficient</h3>
            </div>
            <p>
              Monthly Fee&apos;s Which Can Be 1/3 Price of Monthly Billboard
              Fees
            </p>
          </Card>
          <Card>
            <div className="icon">
              <Image src={teamwork} alt="clock" width={30} height={30} />
              <h3>Amazing Team</h3>
            </div>
            <p>
              We Experience in Picking Best Locations For Brands Within Township
            </p>
          </Card>
        </Cards>
      </Description>
      <StyleImage>
        <Image src={mural2} alt="Guy Making Mural 2" height={500} width={400} />
      </StyleImage>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
