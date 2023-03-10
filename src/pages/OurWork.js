import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import banner from "../img/banner.jpg";

//Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../animation";

import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const text = { fontSize: "2rem", textAlign: "center", marginTop: "10px" };
  return (
    <Work
      style={{ background: "#1b1b1b" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>
          <span>Rohit Shetty&apos;s</span> Cirkus
        </motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/cirkus-project">
          <Hide>
            <motion.img
              variants={photoAnim}
              src={banner}
              alt="Cirkus Movie Poster"
            />
          </Hide>
        </Link>
        <motion.h2 variants={fade} style={text}>
          Click On Photo To Know More
        </motion.h2>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  span {
    color: white;
  }

  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0rem;
    color: white;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    border-radius: 20px;
  }
  //! Media Queries For Image

  @media all and (max-width: 1000px) {
    min-height: 50vh;

    img {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }
  }
  @media all and (max-width: 900px) {
    min-height: 50vh;

    img {
      width: 100%;
      height: 50vh;
      object-fit: cover;
      border-radius: 20px;
    }
  }
  @media all and (max-width: 800px) {
    min-height: 50vh;

    img {
      width: 100%;
      height: 40vh;
      object-fit: cover;
      border-radius: 20px;
    }
  }
  @media all and (max-width: 700px) {
    min-height: 50vh;

    img {
      width: 100%;
      height: 40vh;
      object-fit: cover;
      border-radius: 20px;
    }
  }
  @media all and (max-width: 600px) {
    min-height: 50vh;

    img {
      width: 100%;
      height: 40vh;
      object-fit: contain;
    }
  }
  @media all and (max-width: 500px) {
    min-height: 50vh;

    img {
      width: 100%;
      height: 30vh;
      object-fit: contain;
    }
  }
  @media all and (max-width: 400px) {
    min-height: 50vh;

    img {
      width: 100%;
      height: 30vh;
      object-fit: contain;
    }
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
