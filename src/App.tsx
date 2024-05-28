import React from "react";

import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App font-custom">
      <div className="w-full sm:h-screen h-full flex flex-col sm:flex-row lg:p-12 sm:p-6 p-6">
        <div className="flex flex-col">
          <div className="bg-gray-100 text-slate-800/90 p-6 m-2 rounded-lg shadow-lg shadow-slate-600/50">
            <div className="flex-row font-custom uppercase">
              <h2 className="text-3xl text-center tracking-tighter">
                Jonathan Bui
              </h2>
              <h2 className="text-md text-center tracking-tighter leading-3">
                Software Engineer
              </h2>
            </div>
            <div className="flex flex-col">
              <div className="p-6">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl shadow-slate-700 mx-auto">
                  <img
                    src="profilepic.jpg"
                    alt="Profile"
                    className="object-cover w-full -h-1/2"
                  />
                </div>
              </div>
              <div className="flex-row mx-auto">
                <span className="flex space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 17"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>

                  <h2 className="text-sm tracking-wide">jonbui825@gmail.com</h2>
                </span>
                <span className="flex space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 23"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>

                  <h2 className="text-sm">(571) 335-3969</h2>
                </span>
                <span className="flex space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 25"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  <h2 className="text-sm">Philadelphia, PA</h2>
                </span>
              </div>
            </div>
          </div>
          <div className="">
            <div className="overflow-y-auto h-full bg-blue-700 m-2 text-gray-200 p-6 rounded-lg shadow-md shadow-slate-600/50">
              <div className="font-custom">
                <div className="mb-2">
                  <h2 className="text-md tracking-tighter uppercase">Skills</h2>
                  <ul className="ml-6 list-disc">
                    <li className="">
                      <span className="text-sm">
                        Languages: JavaScript, TypeScript
                      </span>
                    </li>
                    <li className="">
                      <span className="text-sm">
                        Frameworks: NextJS, ExpressJS
                      </span>
                    </li>
                    <li className="">
                      <span className="text-sm">
                        Libraries: ReactJS, TailwindCSS, D3
                      </span>
                    </li>
                    <li className="">
                      <span className="text-sm">
                        Languages: JavaScript, TypeScript
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-md tracking-tighter uppercase mb-1">
                    Education
                  </h2>
                  <div className="ml-3">
                    <h2 className="text-sm  tracking-wide">
                      Temple University
                    </h2>
                    <h2 className="text-sm  tracking-tighter">
                      B.S. Computer Science
                    </h2>

                    <h2 className="text-xs  tracking-tighter">
                      September 2013 - May 2017
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-screen sm:w-full overflow-y-auto m-2 bg-gray-100 shadow-lg shadow-slate-600/50 rounded-lg">
          <div className="">
            <div>
              <div className="flex-1 space-y-4 sm:p-12 p-4">
                <div className="sm:fixed lg:right-14 sm:right-8 right-8 text-center sm:rounded-none sm:rounded-l-lg rounded bg-blue-700 text-gray-300 p-2 shadow-lg shadow-slate-600/50">
                  <h2 className="text-xl uppercase tracking-tighter">
                    Work Experience
                  </h2>
                </div>
                <div className="text-slate-800/90">
                  <div>
                    <h2 className="text-lg">Software Engineer</h2>
                    <h2 className="text-md">TREND Community</h2>
                    <ul className="ml-6 list-disc">
                      <li className="">
                        <span className="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </span>
                      </li>
                      <li className="">
                        <span className="text-sm">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </span>
                      </li>
                      <li className="">
                        <span className="text-sm">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-lg">Software Engineer</h2>
                    <h2 className="text-md">TREND Community</h2>
                    <ul className="ml-6 list-disc">
                      <li className="">
                        <span className="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </span>
                      </li>
                      <li className="">
                        <span className="text-sm">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </span>
                      </li>
                      <li className="">
                        <span className="text-sm">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-lg">Software Engineer</h2>
                    <h2 className="text-md">TREND Community</h2>
                    <ul className="ml-6 list-disc">
                      <li className="">
                        <span className="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </span>
                      </li>
                      <li className="">
                        <span className="text-sm">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </span>
                      </li>
                      <li className="">
                        <span className="text-sm">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-lg">Software Engineer</h2>
                    <h2 className="text-md">TREND Community</h2>
                    <ul className="ml-6 list-disc">
                      <li className="">
                        <span className="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </span>
                      </li>
                      <li className="">
                        <span className="text-sm">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </span>
                      </li>
                      <li className="">
                        <span className="text-sm">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-lg">Software Engineer</h2>
                    <h2 className="text-md">TREND Community</h2>
                    <ul className="ml-6 list-disc">
                      <li className="">
                        <span className="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </span>
                      </li>
                      <li className="">
                        <span className="text-sm">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </span>
                      </li>
                      <li className="">
                        <span className="text-sm">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-lg">Software Engineer</h2>
                    <h2 className="text-md">TREND Community</h2>
                    <ul className="ml-6 list-disc">
                      <li className="">
                        <span className="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </span>
                      </li>
                      <li className="">
                        <span className="text-sm">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </span>
                      </li>
                      <li className="">
                        <span className="text-sm">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-lg">Software Engineer</h2>
                    <h2 className="text-md">TREND Community</h2>
                    <ul className="ml-6 list-disc">
                      <li className="">
                        <span className="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </span>
                      </li>
                      <li className="">
                        <span className="text-sm">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </span>
                      </li>
                      <li className="">
                        <span className="text-sm">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-lg">Software Engineer</h2>
                    <h2 className="text-md">TREND Community</h2>
                    <ul className="ml-6 list-disc">
                      <li className="">
                        <span className="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </span>
                      </li>
                      <li className="">
                        <span className="text-sm">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </span>
                      </li>
                      <li className="">
                        <span className="text-sm">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
