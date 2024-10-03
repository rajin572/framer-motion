import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll";
import React from "react";

const page = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-[100vh] items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScroll />
      <div className="flex h-[100vh] items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

export default page;
