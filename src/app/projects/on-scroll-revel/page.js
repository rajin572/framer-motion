/* eslint-disable react/no-unescaped-entities */
import Revel from "@/components/ui/Revel";
import React from "react";

const page = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="max-w-5xl">
          <div className=" mb-5">
            <Revel>
              <h1 className="text-7xl text-white py-5 font-bold w-fit">
                HI! I AM RAJIN
              </h1>
            </Revel>
          </div>
          <div className=" mb-10">
            <Revel>
              <h3 className="text-4xl text-slate-300 font-semibold ">
                A Frontend Developer
              </h3>
            </Revel>
          </div>
          <Revel>
            <p className="text-2xl text-slate-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              fugiat porro odit rem veritatis doloremque, maxime, eligendi
              labore unde perferendis quae debitis ratione necessitatibus
              doloribus at magnam vel. Cumque nihil nemo dolorum at pariatur
              porro corrupti quaerat? Commodi aliquid necessitatibus laudantium
              eligendi distinctio deserunt nesciunt ut. Necessitatibus,
              inventore sunt! Pariatur?
            </p>
          </Revel>
        </div>
      </div>
      <div className=" h-screen flex flex-col justify-center items-center">
        <div className="container mx-auto grid grid-cols-3 justify-items-center">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="max-w-md mx-auto h-fit bg-gray-900 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative">
                  {/* Image or Video Placeholder */}
                  <div className="bg-gray-700 h-48 flex justify-center items-center">
                    <span className="text-white text-lg font-semibold">
                      Your Project Here 🙂
                    </span>
                  </div>

                  {/* Sign In / Sign Up links */}
                  <div className="absolute top-2 right-4 flex space-x-2">
                    <a href="#" className="text-white text-sm">
                      Sign In
                    </a>
                    <a
                      href="#"
                      className="text-white bg-gray-800 px-2 py-1 rounded text-sm"
                    >
                      Sign Up
                    </a>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="mb-3">
                    <Revel>
                      <h3 className="text-lg text-white font-semibold">
                        Paint Reference 4
                      </h3>
                    </Revel>
                  </div>

                  <div className="mb-1">
                    <Revel>
                      <p className="text-sm text-green-400 mb-2">
                        Python - FastAPI - SQLAlchemy
                      </p>
                    </Revel>
                  </div>
                  <div className="mb-2">
                    <Revel>
                      <p className="text-gray-400 text-sm">
                        I couldn't think of another paint reference app, so here
                        we are. I think you get the idea, right? Use your
                        imagination and create something beautiful.
                      </p>
                    </Revel>
                  </div>

                  {/* Learn More Link */}
                  <div className="">
                    <Revel>
                      <a
                        href="#"
                        className="text-green-400 text-sm hover:underline"
                      >
                        Learn more →
                      </a>
                    </Revel>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default page;
