import React from "react";
import iedcLogo from "../asssets/img/iedc.png";
import iedcksum from "../asssets/img/iedcksum.png";

const Hero = () => {
  return (
    <div>
      {" "}
      <div className="relative isolate px-6  lg:px-8 md:-mt-28">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#118e8e] to-[#118e8e] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-18 sm:py-48 lg:py-48">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">

          </div> */}
          <div className=" flex flex-col text-center justify-center items-center">
            {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              IEDC CUSAT
            </h1> */}
            <img className="w-28 md:w-[250px]" src={iedcLogo} alt="" />
            <p className=" text-xl leading-8 text-gray-600 -mt-9">
              Innovation and Entrepreneurship Development Cell, CUSAT
            </p>
            <div className="flex flex-row gap-10 justify-center items-center">
              <a href="https://iedc.startupmission.in/">
                <img className="w-32 md:w-[250px]" src={iedcksum} alt="" />
              </a>
              <a href="https://cittic.cusat.ac.in/">
                <img
                  className=" my-auto w-32 md:w-[250px]"
                  src="./citticlogo.svg"
                  alt=""
                />
              </a>
            </div>
            {/* <div className="mt-2 flex items-center justify-center gap-x-48">
              <button className="rounded-md bg-[#00062f] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#118e8e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                About IEDC
              </button>
              <button className="rounded-md bg-[#00062f] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#118e8e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                About CITTIC
              </button>
            </div> */}
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#118e8e] to-[#118e8e] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
