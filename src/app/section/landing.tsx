"use client";

import Typewriter from "typewriter-effect";
import React from "react";
import Image from "next/image"; // Next.js optimized image component
import me from "../bernard.png"

export const Landing = () => {
  return (
    <section className="flex items-center justify-center w-full bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center max-w-5xl w-full px-6">
        
        {/* Left Section (Text) */}
        <section className="w-full md:w-1/2 text-left">
          <h1 className="text-4xl font-bold">
            Hi There!{" "}
            <span className="wave text-5xl" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <h2 className="mt-4 text-3xl font-semibold">
            I'M{" "} <br />
            <div className="inline-block w-[500px]"> {/* Fixed width for Typewriter */}
              <Typewriter
                options={{
                  strings: [
                    "Bernard Hwang",
                    "A Software Engineering Student",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>
          </h2>
        </section>

        {/* Right Section (Image) */}
        <section className="mt-8 md:mt-0 w-full md:w-1/2 flex justify-center">
          <Image
            src={me}// Use correct image path
            alt="Bernard Hwang"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </section>
      </div>
    </section>
  )
}