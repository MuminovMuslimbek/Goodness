import Image from "next/image";
import React from "react";
import AboutImage from "@/../public/about-img.png";

function About() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Dotted globe background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-center opacity-10"
        style={{ backgroundImage: "url('/dotted-globe.png')" }}
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left column with images */}
          <div className="w-full md:w-1/2 relative mb-8 md:mb-0">
            {/* Main image with frame */}
            <Image src={AboutImage} alt="AboutImage" />
            {/* Thumbs up icon */}
            <div className="absolute bottom-12 left-0">
              <div className="bg-yellow-500 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right column with text content */}
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="flex items-center text-yellow-500 font-medium mb-4">
              ABOUT US
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-gray-700 mb-4">
              We believe Bible translation is central to spreading the Gospel
            </h2>

            <p className="text-gray-600 mb-8">
              Every nation, tribe, people, and language should have access to
              God's word in their heart language. We hope to eliminate any
              barriers that may prevent people from understanding and accepting
              the message of the Bible.
            </p>

            {/* Services grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="bg-gray-100 p-3 rounded-lg mb-2">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="text-xs text-gray-600">
                  Audio and Video Production
                </span>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="bg-gray-100 p-3 rounded-lg mb-2">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 14l9-5-9-5-9 5 9 5z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-xs text-gray-600">Language Research</span>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="bg-gray-100 p-3 rounded-lg mb-2">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-xs text-gray-600">
                  Publication Services
                </span>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="bg-gray-100 p-3 rounded-lg mb-2">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-xs text-gray-600">
                  Translation Services
                </span>
              </div>
            </div>

            <button className="bg-green-800 text-white px-6 py-2 rounded flex items-center text-sm">
              Read More
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
