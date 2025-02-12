"use client";

import React, { useRef } from "react";
import { Landing } from "./section/landing";
import { About } from "./section/about";
import { Projects } from "./section/projects";

const sections: any = [
  { id: "landing", component: Landing },
  { id: "about", component: About },
  { id: "projects", component: Projects },
];

export const Home = () => {
  const sectionRefs = useRef<any[]>([]);

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
