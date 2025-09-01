import React, { useEffect, useState } from "react";

const titles = [
  "AI Enthusiast",
  "Web Developer",
  "Python Programmer",
  "Bug Bounty Hunter",
  "Future Data Scientist",
  "Tech Explorer",
  "Ethical Hacking Learner",
  "DSA Aspirant"
];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index];
    let speed = isDeleting ? 100 : 150;

    if (!isDeleting && text === current) {
      speed = 2000;
      setTimeout(() => setIsDeleting(true), speed);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
    }

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? current.substring(0, text.length - 1)
          : current.substring(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white"
    >
      <h1 className="text-4xl font-bold">Hi, I'm Urvil Patel</h1>
      <h2 className="text-2xl mt-4">{text}</h2>
    </section>
  );
};

export default Hero;
