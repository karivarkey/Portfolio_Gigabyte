import React from "react";
import InfiniteMovingCardsDemo from "../components/InfiniteMovingCardsDemo";

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-6 py-24 bg-[#0c0c1b] text-white flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        <p className="text-lg md:text-xl text-neutral-300">
          I'm <span className="text-white font-semibold">GigaByte</span>, a Computer Science graduate
          who designs and builds smooth, user-first interfaces. Whether it's an
          elegant website or a responsive application, I love turning complex ideas
          into beautiful, functional products.
        </p>
        <p className="text-lg md:text-xl text-neutral-300">
            With a background in CSE and a passion for design, I specialize in
            creating intuitive user experiences. My journey has taken me from graphic design
            to UI/UX design, and now to front-end development.
        </p>
      </div>

      <div className="mt-0 w-full pb-0 mb-0">
        <InfiniteMovingCardsDemo />
      </div>
    </section>
  );
};

export default About;
