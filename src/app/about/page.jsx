import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const About = () => {
  return (
    <div data-aos="fade-up">
      <div className="left w-[50%] gap-3 flex flex-col">
        {" "}
        <h1 className="text-4xl">
          Hello I’am <strong> Ilyos Suyunov</strong>
        </h1>
        <h1 className="text-4xl">
          <strong>Frontend </strong>Developer
        </h1>
        <h1 className="text-4xl">
          <strong>Web </strong>Designer
        </h1>
        <p className="text-#71717A">
          I`m Evren Shah Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry`s standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to specimen book.
        </p>
      </div>
    </div>
  );
};

export default About;
