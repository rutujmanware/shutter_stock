import React from "react";

const Explore = () => {
  return (
    <div className="w-full mt-5">
      <div className="">
        <div className="flex flex-col justify-start px-10 md:px-24 lg:px-56">
          <div className="font-bold text-4xl justify-center">
            Explore images that ignite your creativity
          </div>
          <div className="grid grid-cols-2  md:grid-cols-4 gap-6 mt-8">
            <button className="flex items-center">
              <img
                className="w-24 h-24 md:w-auto md:h-auto"
                src="https://randomuser.me/api/portraits/med/men/75.jpg"
              />
              <p className="p-2">Photos</p>
            </button>
            <button className="flex items-center">
              <img
                className="w-24 h-24 md:w-auto md:h-auto"
                src="https://randomuser.me/api/portraits/med/men/75.jpg"
              />
              <p className="p-2">Illustrations</p>
            </button>
            <button className="flex items-center">
              <img
                className="w-24 h-24 md:w-auto md:h-auto"
                src="https://randomuser.me/api/portraits/med/men/75.jpg"
              />
              <p className="p-2">Vectors</p>
            </button>
            <button className="flex items-center">
              <img
                className="w-24 h-24 md:w-auto md:h-auto"
                src="https://randomuser.me/api/portraits/med/men/75.jpg"
              />
              <p className="p-2">Ai image generator</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
