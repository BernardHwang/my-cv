"use client";

import React, { useRef } from "react";
import { Landing } from "./section/landing";
import { About } from "./section/about";
import { Projects } from "./section/projects";

type Section = {
  id: string;
  component: React.FC;
};

const sections: Section[] = [
  { id: "landing", component: Landing },
  { id: "about", component: About },
  { id: "projects", component: Projects },
];

const Home = () => {
  const sectionRefs = useRef([]);

  return (
    <>
      {sections.map(({ id, component: Section }, index) => (
        <section
          key={id}
          ref={(el) => (sectionRefs.current[index] = el)}
          id={id}
          className="my-10"
        >
          <Section />
        </section>
      ))}
    </>
  );
}

export default Home;
