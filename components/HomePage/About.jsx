import React from "react";
import Section from "../UI/Section";

const About = ({ setPopup }) => {
  return (
    <Section
      padding={"70px 0"}
      background={"none"}
      title={
        <>
          Australia’s <span className="titleBackground">Fastest Growing</span> Digital Marketing Agency
        </>
      }
    >
      <p className="subtitle">
        We are an all-around digital marketing agency focused on your success. Skyward Digital offers detailed and transparent reporting to measure our strategy in real time so that you can see the
        impact of our marketing tactics as it happens.
        <br />
        <br />
        Don’t leave your revenue goals drifting through the universe to infinity and beyond. Instead, transform your business with a clear digital strategy (think: battle plan). Then, fuel your
        pipeline by attracting and converting the right clients.
      </p>
      <button className={`my-button my-button-center`} onClick={() => setPopup(true)}>
        Get in Touch
      </button>
    </Section>
  );
};

export default About;
