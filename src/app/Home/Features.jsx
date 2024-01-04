import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className=" bg-midnight py-5">
      <div className=" md:w-5/6 w-full mx-auto  ">
        <p className=" text-5xl font-bold my-4 mb-6 text-white ">
          AI Powered Solution
        </p>
        <div className="flex flex-wrap gap-10 justify-center mx-2">
          <div className=" w-full sm:w-3/12 h-[150px] rounded-lg bg-semi-blue flex-row items-center justify-center hover:scale-105  hover:-translate-y-1 transition-transform hover:-translate-x-1">
            <div className=" text-center">
              <lord-icon
                src="https://cdn.lordicon.com/pdsourfn.json"
                trigger="loop"
                delay="2000"
                style={{ width: "100px", height: "100px" }}></lord-icon>
            </div>
            <p className=" text-center text-xl font-bold text-midnight ">
              Personalized Healthcare
            </p>
          </div>
          <div className=" w-full sm:w-3/12 h-[150px] rounded-lg bg-semi-blue flex-row items-center justify-center hover:scale-105  hover:-translate-y-1 transition-transform hover:-translate-x-1">
            <div className=" text-center">
              <lord-icon
                 src="https://cdn.lordicon.com/kiynvdns.json"
                 trigger="loop"
                 delay="2000"
                style={{ width: "100px", height: "100px" }}></lord-icon>
            </div>
            <p className=" text-center text-xl font-bold text-midnight ">
              Mental Health Support
            </p>
          </div>
          <div className="hover:scale-105  hover:-translate-y-1 transition-transform hover:-translate-x-1 w-full sm:w-3/12 h-[150px] rounded-lg bg-semi-blue flex-row items-center justify-center">
            <div className=" text-center">
              <lord-icon
                  src="https://cdn.lordicon.com/rymzvwiu.json"
                  trigger="loop"
                  delay="2000"
                style={{ width: "100px", height: "100px" }}></lord-icon>
            </div>
            <p className=" text-center text-xl font-bold text-midnight ">
              Remote Patient Monitoring
            </p>
          </div>
          <div className="hover:scale-105  hover:-translate-y-1 transition-transform hover:-translate-x-1 w-full sm:w-3/12 h-[150px] rounded-lg bg-semi-blue flex-row items-center justify-center">
            <div className=" text-center">
              <lord-icon
                  src="https://cdn.lordicon.com/btwwvffp.json"
                  trigger="loop"
                  delay="2000"
                style={{ width: "100px", height: "100px" }}></lord-icon>
            </div>
            <p className=" text-center text-xl font-bold text-midnight ">
              Health Equity
            </p>
          </div>
          <div className="hover:scale-105  hover:-translate-y-1 transition-transform hover:-translate-x-1 w-full sm:w-3/12 h-[150px] rounded-lg bg-semi-blue flex-row items-center justify-center">
            <div className=" text-center">
              <lord-icon
                  src="https://cdn.lordicon.com/rmdufxni.json"
                  trigger="loop"
                  delay="2000"
                style={{ width: "100px", height: "100px" }}></lord-icon>
            </div>
            <p className=" text-center text-xl font-bold text-midnight ">
              Wellness Promotion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
