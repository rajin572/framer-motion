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
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="max-w-5xl">
          <Revel>
            <h1 className="text-7xl text-white font-bold mb-5">
              HI! I AM RAJIN
            </h1>
          </Revel>
          <h3 className="text-4xl text-slate-300 font-semibold  mb-10">
            A Frontend Developer
          </h3>
          <p className="text-2xl text-slate-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugiat
            porro odit rem veritatis doloremque, maxime, eligendi labore unde
            perferendis quae debitis ratione necessitatibus doloribus at magnam
            vel. Cumque nihil nemo dolorum at pariatur porro corrupti quaerat?
            Commodi aliquid necessitatibus laudantium eligendi distinctio
            deserunt nesciunt ut. Necessitatibus, inventore sunt! Pariatur?
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
