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
  "https://picsum.photos/id/18/200/300",
  "https://picsum.photos/id/198/200/300",
  "https://picsum.photos/id/201/200/300",
  "https://picsum.photos/id/202/200/300",
  "https://picsum.photos/id/204/200/300",
  "https://picsum.photos/id/71/200/300",
  "https://picsum.photos/id/91/200/300",
  "https://picsum.photos/id/81/200/300",
  "https://picsum.photos/id/47/200/300",
  "https://picsum.photos/id/50/200/300",
  "https://picsum.photos/id/51/200/300",
  "https://picsum.photos/id/52/200/300",
];
const images1 = [
  "https://picsum.photos/id/238/200/300",
  "https://picsum.photos/id/2/200/300",
  "https://picsum.photos/id/3/200/300",
  "https://picsum.photos/id/4/200/300",
  "https://picsum.photos/id/13/200/300",
  "https://picsum.photos/id/33/200/300",
  "https://picsum.photos/id/89/200/300",
  "https://picsum.photos/id/95/200/300",
  "https://picsum.photos/id/46/200/300",
  "https://picsum.photos/id/5/200/300",
  "https://picsum.photos/id/78/200/300",
  "https://picsum.photos/id/91/200/300",
  "https://picsum.photos/id/19/200/300",
  "https://picsum.photos/id/199/200/300",
  "https://picsum.photos/id/202/200/300",
  "https://picsum.photos/id/203/200/300",
  "https://picsum.photos/id/206/200/300",
  "https://picsum.photos/id/72/200/300",
  "https://picsum.photos/id/92/200/300",
  "https://picsum.photos/id/82/200/300",
  "https://picsum.photos/id/48/200/300",
  "https://picsum.photos/id/51/200/300",
  "https://picsum.photos/id/52/200/300",
  "https://picsum.photos/id/53/200/300",
  "https://picsum.photos/id/54/200/300",
  "https://picsum.photos/id/55/200/300",
  "https://picsum.photos/id/56/200/300",
  "https://picsum.photos/id/57/200/300",
  "https://picsum.photos/id/58/200/300",
  "https://picsum.photos/id/59/200/300",
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
          <div className="container justify-center items-center">
           
            <div className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-center items-center">
              {activeButton==="popular"? images.map((image) => (
                <img src={image} className="rounded "/>
              )):images1.map((image) => (
                <img src={image} className="rounded "/>
              ))}
            </div> 
            <div className="flex p-2 justify-center items-center">
                <div className="bg-black text-white p-2 rounded-full w-2/6 md:w-1/6 items-center justify-center text-center cursor-pointer mb-10 mt-3">
                See more
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
