import Image from "next/image";
import React from "react";
import GetInvoledSectionImage from "@/../public/GetInvoledSectionImage.png";

function GetInvolvedSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Dotted globe background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-center opacity-20"
        style={{ backgroundImage: "url('/dotted-globe.png')" }}
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-[150px]">
          {/* Left column with ways to get involved */}
          <div className="w-full md:w-1/2 z-10">
            <div className="flex items-center text-yellow-500 font-medium mb-4">
              GET INVOLVED
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

            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              You Too Can Make Impact
            </h2>

            {/* Donate/Sponsor */}
            <div className="mb-8">
              <div className="flex items-start">
                <div className="mr-3 bg-gray-200 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">Donate/Sponsor</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Support us financially by donating to our cause. Your
                    donation will help us in translating the Bible into more
                    languages.
                  </p>
                  <button className="text-yellow-500 text-sm font-medium">
                    Donate
                  </button>
                </div>
              </div>
            </div>

            {/* Volunteer */}
            <div className="mb-8">
              <div className="flex items-start">
                <div className="mr-3 bg-gray-200 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">Volunteer</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Join us as a volunteer and help us in our mission to spread
                    the word of God. We need translators, writers, editors, and
                    more.
                  </p>
                  <button className="text-yellow-500 text-sm font-medium flex items-center">
                    Volunteer
                    <svg
                      className="ml-1 w-4 h-4"
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

            {/* Pray for Us */}
            <div className="mb-8">
              <div className="flex items-start">
                <div className="mr-3 bg-gray-200 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">Pray for Us</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Support a Bible translation project by becoming a sponsor.
                    You can help us in funding the translation of the Bible into
                    a specific language.
                  </p>
                  <button className="text-yellow-500 text-sm font-medium">
                    Join Our Prayer Team
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right column with interactive globe and photos */}
          <div className="w-full md:w-1/2 relative">
            <Image src={GetInvoledSectionImage} alt="GetInvoledSectionImage" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInvolvedSection;
