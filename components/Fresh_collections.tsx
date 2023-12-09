"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from ".";
import Slider from "react-slick";

interface Collection {
  url: string;
  name: string;
}

const collections: Collection[] = [
  {
    url: "https://picsum.photos/id/290/200/300",
    name: "Winter Chill",
  },
  {
    url: "https://picsum.photos/id/306/200/300",
    name: "Holiday Season LookBook",
  },
  {
    url: "https://picsum.photos/id/284/200/300",
    name: "Home Cooking",
  },
  {
    url: "https://picsum.photos/id/217/200/300",
    name: "Blue Mood",
  },
  {
    url: "https://picsum.photos/id/312/200/300",
    name: "New Year's Collection",
  },
];

const Fresh_collections = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex-1 justify-center w-full">
      <div>
        <div className="lg:flex-1 lg:flex justify-between lg:mx-10  flex-row mx-5 lg:mt-5 mt-2 ">
          <div className="text-black font-bold text-3xl m-1 mb-2">
            Explore Fresh Collections
          </div>
          <div className="border-gray-500 border rounded-full w-56 items-center flex justify-center m-1">
            <button className="p-2 font-bold">See all collections</button>
          </div>
        </div>
        <div className="w-full">
          <Slider {...settings}>
            {collections.map((collection, index) => (
              <Card key={index} url={collection.url} name={collection.name} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="mt-10 bg-gray-100">
        <div className="flex justify-center items-center gap-5 mx-5 lg:mx-10">
          <div className="my-10">
            <div className="">
              <img src="https://picsum.photos/id/120/400/200" />
            </div>
            <div className="">
              <div className="font-bold">Free stock image of the week</div>

              <p>
                By <span className="text-blue-800 cursor-pointer">Ground Picture</span>
              </p>
              <div className="text-blue-800 cursor-pointer">Download</div>
            </div>
          </div>

          <div className="my-10">
            <div className="">
              <img src="https://picsum.photos/id/124/400/200" />
            </div>
            <div className="font-bold">Free stock vector of the week</div>

            <p>
              By <span className="text-blue-800 cursor-pointer">Net Vector</span>
            </p>
            <div className="text-blue-800 cursor-pointer">Download</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fresh_collections;
