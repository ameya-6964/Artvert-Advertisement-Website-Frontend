//Import Images
import mainBanner from "./img/banner.jpg";
import secondBanner from "./img/banner2.PNG";
import thirdBanner from "./img/banner3.PNG";
import vid from "../src/img/movie.MOV";
import reel from "../src/img/reel.mp4";

export const MovieState = () => {
  return [
    {
      title: "Rohit Shetty's Cirkus",
      mainImg: mainBanner,
      thirdImage: thirdBanner,
      cinema: vid,
      cinematic: reel,
      secondaryImg: secondBanner,
      url: "/work/cirkus-project",
      awards: [
        {
          title: "Truly A Masterpiece",
          description:
            "“The CIRKUS movie mural advertisement is a visually stunning piece of art that was created by a team of professional artists.”",
        },
        {
          title: "Location and Purpose.",
          description:
            "“Located near the Western Express Highway and airport road, it serves as an eye-catching promotion for the film..”",
        },
        {
          title: "Final Impression.",
          description:
            "“The mural was executed in just a few days, with a focus on safety and precision. The end result is a beautiful and impactful ad that is sure to leave a lasting impression on those who see it..”",
        },
      ],
    },
  ];
};
