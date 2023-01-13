import React from "react";
import Image from "next/image";
import mural from "../public/mural.jpg";

//! Styling
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We Work To Make</h2>
          </Hide>
          <Hide>
            <h2>
              Your <span>Brand</span> and <span> Art</span>
            </h2>
          </Hide>
          <Hide>
            <h2> Get Properly Advertised </h2>
          </Hide>
        </div>
        <p>
          Contact Us For Any Brand Advertisement Or Painting High Quality
          Murals, We Work With Professional Graffiti And Street Artists.
        </p>
        <button> Contact Us </button>
      </Description>
      <StyledImage>
        <Image src={mural} alt="guy Making Mural" height={500} width={400} />
      </StyledImage>
    </About>
  );
};
//Styled Components
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
