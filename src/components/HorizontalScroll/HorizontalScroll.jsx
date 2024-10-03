"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Revel from "../ui/Revel";

const cards = [
  {
    url: "https://st5.depositphotos.com/2653499/65064/i/450/depositphotos_650649570-stock-photo-peaceful-meadow-atop-hill-aglow.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://st2.depositphotos.com/1006542/6566/i/450/depositphotos_65669135-stock-photo-woman-sitting-on-an-old.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://st5.depositphotos.com/2653499/65064/i/450/depositphotos_650649526-stock-photo-peaceful-meadow-atop-hill-aglow.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://media.istockphoto.com/id/1038870630/photo/woman-standing-and-looking-at-lago-di-carezza-in-dolomites.jpg?s=612x612&w=0&k=20&c=sRbpFCJ-odpl2cQetrZaxlxL0oqAmxcjDEGN46kmGJ0=",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://c4.wallpaperflare.com/wallpaper/164/841/128/wonderful-pictures-of-nature-hd-background-1920x1200-wallpaper-preview.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://rare-gallery.com/uploads/posts/1134213-sunlight-trees-landscape-forest-leaves-night-nature-grass-green-morning-mist-Sun-sun-rays-dirt-road-atmosphere-jungle-path-Aurora-light-tree-fog-leaf-darkness-woodland-.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-free-image-free-photo.jpg?w=600&quality=80",
    title: "Title 7",
    id: 7,
  },
  {
    url: "https://st2.depositphotos.com/7657912/10588/i/450/depositphotos_105886128-stock-photo-woman-silhouette-at-sunset-on.jpg",
    title: "Title 8",
    id: 8,
  },
];

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-100%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-[#5A166F]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex items-center gap-4">
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
                  porro corrupti quaerat? Commodi aliquid necessitatibus
                  laudantium eligendi distinctio deserunt nesciunt ut.
                  Necessitatibus, inventore sunt! Pariatur?
                </p>
              </Revel>
            </div>
          </div>
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
            >
              <div
                style={{
                  background: `url(${card.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="absolute inset-0 z-10 grid place-content-center">
                <div className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur">
                  <Revel>
                    <p>{card.title}</p>
                  </Revel>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
