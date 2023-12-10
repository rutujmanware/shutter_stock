import React from "react";

const Explore = () => {
  return (
    <div className="w-full mt-5">
      <div className="">
        <div className="w-full flex flex-col justify-start px-10 md:px-24 lg:px-56">
          <div className="font-bold text-4xl justify-center">
            Explore images that ignite your creativity
          </div>
          <div className="grid grid-cols-2  md:grid-cols-4 gap-6 mt-8 w-full">
            <button className="items-center grid grid-cols-2">
              <div className="flex">
                <img
                  className="flex "
                  src="https://picsum.photos/id/60/200/300"
                />
              </div>
              <div className="">
                <p className="p-1">Photos</p>
              </div>
            </button>
            <button className="items-center grid grid-cols-2">
              <div className="flex">
                <img
                  className="flex "
                  src="https://picsum.photos/id/61/200/300"
                />
              </div>
              <div className="">
                <p className="p-1">Illustrations</p>
              </div>
            </button>
            <button className="items-center grid grid-cols-2">
              <div className="flex">
                <img
                  className="flex"
                  src="https://picsum.photos/id/62/200/300"
                />
              </div>
              <div className="">
                <p className="p-1">Vectors</p>
              </div>
            </button>
            <button className="items-center grid grid-cols-2">
              <div className="flex">
                <img
                  className="flex "
                  src="https://picsum.photos/id/64/200/300"
                />
              </div>
              <div className=" ">
                <p className="p-1">Ai image generator</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
