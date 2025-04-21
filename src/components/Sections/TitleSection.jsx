import Image from "next/image";
import VolunterImg from "@/../public/volunter-img1.jpeg";
import React from "react";

function TitleSection() {
  return (
    <>
      <section className="bg-white py-[150px]">
        <div className="min-container px-4 flex flex-col md:gap-[50px] md:flex-row items-center justify-between">
          {/* Left column with text */}
          <div className="w-full md:w-[400px] pr-0 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-3">
              <span className="text-green-800">Neighborhood</span>{" "}
              <span className="text-yellow-500">Bible</span>{" "}
              <span className="text-green-800">Tranchaslation Initiative</span>
            </h1>
            <p className="text-gray-700 mb-6">
              Our Mission Is To Translate The Bible Into The Languages Of
              Nations In Order To Transform Lives And Bring Unity To People.
            </p>
            <button className="bg-green-800 text-white px-6 py-2 rounded flex items-center">
              Get Started
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Stats section */}
            <div className="flex mt-12 border-t border-gray-200 pt-6">
              <div className="mr-12">
                <p className="text-yellow-500 font-bold text-2xl">900+</p>
                <p className="text-gray-600">Donors</p>
              </div>
              <div className="mr-12 border-l border-gray-200 pl-12">
                <p className="text-yellow-500 font-bold text-2xl">15k</p>
                <p className="text-gray-600">Volunteers</p>
              </div>
              <div className="border-l border-gray-200 pl-12">
                <p className="text-yellow-500 font-bold text-2xl">$10k</p>
                <p className="text-gray-600">Raised</p>
              </div>
            </div>
          </div>

          {/* Right column with image */}
          <div className="w-full md:w-1/2">
            <div className="rounded-tr-[250px] rounded-bl-[250px] overflow-hidden">
              <Image
                className="w-full h-auto object-cover"
                src={VolunterImg}
                alt="People reading the Bible together"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TitleSection;
