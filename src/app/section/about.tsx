"use client";

import React from "react";
import { Card, CardBody } from "@heroui/react"; // Importing Hero UI Card
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiPhp,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { ImPointRight } from "react-icons/im";
import GitHubCalendar from "react-github-calendar";

const techIcons = [
  { icon: <CgCPlusPlus />, name: "C++" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <DiReact />, name: "React/React Native" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <DiGit />, name: "Git" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <DiPython />, name: "Python" },
  { icon: <DiJava />, name: "Java" },
  { icon: <DiPhp />, name: "PHP"},
];

const interestList = [
  "Playing Games", "Badminton", "Sleep", "Anything can make money"
];

const Description = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-6">Know About Me</h2>
      <Card className="p-6 bg-gray-800 text-white rounded-xl shadow-lg w-3/4 mx-auto">
        <CardBody>
          <p className="text-justify text-lg">
            Hi Everyone, I am{" "}
            <span className="text-purple-400 font-semibold">Bernard Hwang</span>{" "}
            from{" "}
            <span className="text-purple-400 font-semibold">Malaysia.</span>
            <br />
            I'm a Y3 Software Engineering student and currently Studying UTAR Sg Long.<br />
            I can speak fluently in multiple languages, including Cantonese, Chinese, English, and Malay.<br />
            Experienced in hackathons and international programs, with a passion for problem-solving and effective communication.<br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>

          <ul className="mt-4 space-y-2">
            {interestList.map((interest, index) => (
              <li className="flex items-center gap-2 text-lg" key={index}>
                <ImPointRight className="text-purple-400" /> {interest}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-purple-300 text-xl italic text-center">
            "Life is a journey, not a destination."
          </p>
          <footer className="mt-2 text-center text-gray-400 text-lg">
            — T.S. Eliot
          </footer>
        </CardBody>
      </Card>
    </section>
  );
};

const Techstack = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {techIcons.map((tech, index) => (
          <Card
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-gray-800 hover:bg-gray-700 transition rounded-lg shadow-lg"
          >
            <span className="text-5xl">{tech.icon}</span>
            <p className="mt-2 text-lg font-semibold">{tech.name}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

const GitTrack = () => {
  return (
    <section className="flex flex-col items-center bg-gray-900 justify-center">
      <h1 className="text-3xl font-bold text-white mb-6">
        Days I <span className="text-purple-400">Code</span>
      </h1>
      <GitHubCalendar
        username="BernardHwang"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
    </section>
  );
};

export const About = () => {
  return (
    <>
      <section className="mb-10">
        <Description />
      </section>
      <section className="my-10">
        <Techstack />
      </section>
      <section className="mt-10">
        <GitTrack />
      </section>
    </>
  );
};
