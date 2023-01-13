import React from "react";
import styled from "styled-components";
import { About } from "@/pages/styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>What Is Artvert ? 🤔 </h4>
        <div className="answer">
          <p>
            ARTVERT Is a Unique Hand-Painted Advertising Agency Based In MUMBAI,
            Painting High Quality Murals.
          </p>
          <p>
            We Work With Professional Graffiti And Street Artists From Over
            INDIA To Deliver Complicated Projects For All Our Partners, From Big
            Brands To Local Councils.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>How Do We Work 😀</h4>
        <div className="answer">
          <p>Step 1 - We Understand and Discover Your Brand 🤝 </p>
          <p>
            Which Includes Knowing about your business, Site visit, Research,
            Brief.
          </p>
          <p>Step 2 - We Make Prototype Design 🧮✏️ </p>
          <p>
            Which Includes Initial Concept Design, Choosing The Right Design and
            Finalise The Design.
          </p>
          <p>Step 3 - Execution 👨‍💻 </p>
          <p>
            We Start Executing Professional And Versatile Design Specially Made
            For You
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>How It Will Benefit You 📈</h4>
        <div className="answer">
          <p>
            The goal of advertising is to capture attention. Running a
            successful campaign begins with posting something that people
            can&apos;t help but glance at. And you can tell you have a winner
            when an advertisement resembles a work of art rather than a giant
            &quot;buy me&quot; sign.
          </p>
          <p>
            Mural Advertising Appeals To So Many Advertisers Because Of This. It
            Provides A Means Of Artistically And Strikingly Encapsulating The
            Spirit Of The Brand. Due Of Their Ability To Go Viral, These Painted
            Advertisements Can Be Just As Successful As Billboards, If Not More
            So.
          </p>
          <p>
            Monthly Fee&apos;s Which Can Be As Much As 1/3 The Price Of The
            Monthly Billboard Fees.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Why Do You Need ARTVERT 💚</h4>
        <div className="answer">
          <p>
            Which Can Be As Much As 1/3 The Price Of The Monthly Billboard
            Fees.wall Murals Transform Into Points Of Interest In Townships,
            Where Commuters May Utilise Them To Identify Specific Locations,
            Meetup Spots, Or Drop-off Sites, As LANDMARK.
          </p>
          <p>
            Our Experience In Picking The Best Locations For Brands Within The
            Townships.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
