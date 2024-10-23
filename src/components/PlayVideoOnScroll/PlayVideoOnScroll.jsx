"use client";
import { useRef, useEffect } from "react";
import { useScroll } from "framer-motion";
import Lenis from "lenis";

const PlayVideoOnScroll = () => {
  const videoRef = useRef(null); // Reference to the video element
  const containerRef = useRef(null); // Reference to the scroll container
  const lenisRef = useRef(null); // Reference to Lenis instance

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Slower duration for even smoother scrolling
      easing: (t) => 1 - Math.pow(1 - t, 4), // Smooth easing (can be customized)
      smoothWheel: true,
      smoothTouch: true,
      virtualScroll: 1000,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up Lenis instance on unmount
    };
  }, []);

  // Set up scroll-based video control using Framer Motion's useScroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // Target the start and end of the container
  });

  useEffect(() => {
    const videoElement = videoRef.current;

    const updateVideoTime = () => {
      if (videoElement && videoElement.readyState === 4) {
        const videoDuration = videoElement.duration;
        // Update video time based on scroll progress
        videoElement.currentTime = scrollYProgress.get() * videoDuration;
      }
    };

    const handleLenisScroll = () => {
      requestAnimationFrame(updateVideoTime);
    };

    // Attach Lenis' scroll event to ensure the video syncs precisely with Lenis' scrolling
    lenisRef.current.on("scroll", handleLenisScroll);

    return () => {
      lenisRef.current.off("scroll", handleLenisScroll); // Clean up the event listener
    };
  }, [scrollYProgress]);

  return (
    <div>
      <div className="h-[300vh] relative bg-black" ref={containerRef}>
        {/* Background video element */}
        <video
          ref={videoRef}
          muted
          playsInline
          className="h-[100vh] w-full object-cover sticky top-0 shadow-lg"
          style={{ willChange: "transform" }} // Optimizing performance for GPU
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>
        <div className="h-[100vh] relative">
          <h1 className="text-white text-8xl font-bold text-center sticky top-[42%]">
            Hello Developers.
          </h1>
        </div>
      </div>
      <div className="mb-[1000px]">Some content after the video...</div>
    </div>
  );
};

export default PlayVideoOnScroll;
