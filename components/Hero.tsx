import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg";

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "600px", // Set the height based on your design
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-5xl p-5 justify-center text-center mt-20">
          Unleash your creativity with unrivaled images
        </h1>
        <p className="text-white p-5 justify-center text-center">
          Add wonder to your stories with 425M+ photos, vectors, illustrations,
          and editorial images.
        </p>
        <div className="flex justify-between items-center w-5/6 mx-auto">
          <div className="flex justify-between w-full backdrop-blur-md p-5 rounded-md ">
            <div className=" flex">
                <select className="rounded-md outline-none shadow-black shadow-md">
                    <option value="all">All images</option>
                    <option value="editorial">Editorial</option>
                    <option value="video">Video</option>
                </select>
            </div>
            <div className="flex-1 text-white flex items-center justify-center mx-2">
              <div className="w-full ">
                <input
                  type="text"
                  placeholder="Search for images"
                  className="w-full py-3 rounded-l-md outline-none shadow-md shadow-black"
                />
              </div>
              <div>
                <button className="btn bg-red-500 rounded-r-md p-2 py-4 outline-none shadow-md shadow-black">
                  <FaSearch />
                </button>
              </div>
            </div>
            <div className=" sm:flex hidden">
                <button className="btn bg-white text-black rounded-md p-1 outline-none shadow-black shadow-md">by image</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
