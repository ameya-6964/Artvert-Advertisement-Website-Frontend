import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";

//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
    console.log(setMovies);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <VideoDisplay>
            <video
              src={movie.cinematic}
              alt="movie"
              autoPlay
              muted
              controls
              loop
            />
          </VideoDisplay>
          <VideoDisplay>
            <iframe
              src="https://www.youtube.com/embed/wLkTOqwtyBE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </VideoDisplay>
          {/* <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay> */}
          {/* <VideoDisplay>
            <video src={movie.cinema} alt="movie" autoPlay muted controls />
          </VideoDisplay> */}
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
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
    h2 {
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      font-size: xx-large;
    }

    img {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }
  }
  @media all and (max-width: 900px) {
    min-height: 50vh;
    h2 {
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      font-size: xx-large;
    }

    img {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }
  }
  @media all and (max-width: 800px) {
    min-height: 50vh;
    h2 {
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      font-size: xx-large;
    }

    img {
      width: 100%;
      height: 40vh;
      object-fit: cover;
    }
  }
  @media all and (max-width: 700px) {
    min-height: 50vh;
    h2 {
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      font-size: xx-large;
    }

    img {
      width: 100%;
      height: 30vh;
      object-fit: cover;
    }
  }
  @media all and (max-width: 600px) {
    min-height: 50vh;
    h2 {
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      font-size: xx-large;
    }

    img {
      width: 100%;
      height: 30vh;
      //object-fit: contain;
    }
  }
  @media all and (max-width: 500px) {
    min-height: 50vh;
    h2 {
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      font-size: xx-large;
    }

    img {
      width: 100%;
      height: 30vh;
      // object-fit: contain;
    }
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
  @media (min-width: 750px) {
    p {
      padding: 2rem 0rem;
      font-size: 1.8rem;
    }
  }
`;

//? If You Want Second Image Import This File
/* const ImageDisplay = styled.div`
  min-height: 40vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    margin: 1rem 0rem;
    padding: 2rem 0rem;
  }
  @media all and (max-width: 1000px) {
    min-height: 50vh;
    h2 {
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      font-size: xx-large;
    }

    img {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }
  }
  @media all and (max-width: 900px) {
    min-height: 50vh;
    h2 {
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      font-size: xx-large;
    }

    img {
      width: 100%;
      height: 50vh;
      object-fit: contain;
    }
  }
  @media all and (max-width: 800px) {
    min-height: 50vh;
    h2 {
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      font-size: xx-large;
    }

    img {
      width: 100%;
      height: 40vh;
      object-fit: contain;
    }
  }
  @media all and (max-width: 700px) {
    min-height: 50vh;
    h2 {
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      font-size: xx-large;
    }

    img {
      width: 100%;
      height: 30vh;
      object-fit: contain;
    }
  }
  @media all and (max-width: 600px) {
    min-height: 50vh;
    h2 {
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      font-size: xx-large;
    }

    img {
      width: 100%;
      height: 30vh;
      object-fit: contain;
    }
  }
  @media all and (max-width: 500px) {
    min-height: 50vh;
    h2 {
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      font-size: xx-large;
    }

    img {
      width: 100%;
      height: 30vh;
      object-fit: contain;
    }
  }
`; */

const VideoDisplay = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  margin: 1rem 0rem;
  padding: 2rem 0rem;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    border-radius: 20px;
  }
  iframe {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    border-radius: 20px;
  }
  @media all and (max-width: 1000px) {
    min-height: 50vh;
    h2 {
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      font-size: xx-large;
    }

    video {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }
    iframe {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }
  }
  @media all and (max-width: 900px) {
    min-height: 50vh;
    h2 {
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      font-size: xx-large;
    }

    video {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }
    iframe {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }
  }
  @media all and (max-width: 800px) {
    min-height: 50vh;
    h2 {
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      font-size: xx-large;
    }

    video {
      width: 100%;
      height: 40vh;
      object-fit: cover;
    }
    iframe {
      width: 100%;
      height: 40vh;
      object-fit: cover;
    }
  }
  @media all and (max-width: 700px) {
    min-height: 50vh;
    h2 {
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      font-size: xx-large;
    }

    video {
      width: 100%;
      height: 30vh;
      object-fit: cover;
    }
    iframe {
      width: 100%;
      height: 30vh;
      object-fit: cover;
    }
  }
  @media all and (max-width: 600px) {
    min-height: 50vh;
    h2 {
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      font-size: xx-large;
    }

    video {
      width: 100%;
      height: 30vh;
      object-fit: cover;
    }
    iframe {
      width: 100%;
      height: 30vh;
      object-fit: cover;
    }
  }
  @media all and (max-width: 500px) {
    min-height: 50vh;
    h2 {
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      font-size: xx-large;
    }

    video {
      width: 100%;
      height: 30vh;
      object-fit: cover;
    }
    iframe {
      width: 100%;
      height: 30vh;
      object-fit: cover;
    }
  }
  @media all and (max-width: 400px) {
    min-height: 40vh;
    h2 {
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      font-size: xx-large;
    }

    video {
      width: 100%;
      height: 30vh;
      object-fit: cover;
    }
    iframe {
      width: 100%;
      height: 30vh;
      object-fit: cover;
    }
  }
  @media all and (max-width: 300px) {
    min-height: 30vh;
    h2 {
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      font-size: xx-large;
    }

    video {
      width: 100%;
      height: 30vh;
      object-fit: contain;
    }
    iframe {
      width: 100%;
      height: 30vh;
      object-fit: cover;
    }
  }
`;

//Award Component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetail;

/* @media all and (min-width: 1024px) and (max-width: 1280px) { }

@media all and (min-width: 768px) and (max-width: 1024px) { }

@media all and (min-width: 480px) and (max-width: 768px) { }

@media all and (max-width: 480px) { } */
