"use client";
import React, { useState } from "react";
const activeBtnStyles = "p-1 font-bold border-black border-b-4 text-black";
const inactiveBtnStyles = "p-1 border-b-4 border-gray-300 text-gray-400";
const images = [
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/id/1/200/300",
  "https://picsum.photos/id/2/200/300",
  "https://picsum.photos/id/3/200/300",
  "https://picsum.photos/id/12/200/300",
  "https://picsum.photos/id/32/200/300",
  "https://picsum.photos/id/88/200/300",
  "https://picsum.photos/id/87/200/300",
  "https://picsum.photos/id/45/200/300",
  "https://picsum.photos/id/4/200/300",
  "https://picsum.photos/id/78/200/300",
  "https://picsum.photos/id/90/200/300",
];
const Trending = () => {
  const [activeButton, setActiveButton] = useState<String>("popular");
  const handleButtonClick = (button: String) => {
    setActiveButton(button);
  };
  return (
    <div className="h-auto w-full bg-gray-100 mt-10 ">
      <div className="">
        <div className="flex flex-col justify-start px-10 md:px-24 lg:px-56">
          <div className="font-bold text-4xl justify-center py-5">
            See what's trending
          </div>
          <div className="flex text-xl cursor-pointer mb-10">
            <div
              className={`${
                activeButton === "popular" ? activeBtnStyles : inactiveBtnStyles
              }`}
              onClick={() => handleButtonClick("popular")}
            >
              Most Popular
            </div>
            <div
              className={`${
                activeButton === "handpicked"
                  ? activeBtnStyles
                  : inactiveBtnStyles
              }`}
              onClick={() => handleButtonClick("handpicked")}
            >
              Handpicked content
            </div>
          </div>
          <div className="container">
            
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  md:gap-4">
              {images.map((image) => (
                <img src={image} className="rounded object-cover"/>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
