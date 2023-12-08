import Image from "next/image";
// import SearchIcon from '@mui/icons-material/Search';
import { FaSearch } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="relative">
      <img src="/pexels-pixabay-206359.jpg" alt="bg-image" className="w-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white text-5xl z-10 p-5 justify-center text-center mt-20">
          Unleash your creativity with unrivaled images
        </h1>
        <p className="text-white p-5 justify-center text-center ">
          Add wonder to your stories with 425M+ photos, vectors, illustrations,
          and editorial images.
        </p>
        <div className="w-full flex px-7 sm:px-10 md:px-32 lg:px-56">
          <div className=" flex flex-row items-center mt-5 backdrop-blur-md p-5 w-full rounded-md justify-between">
            <select
              id="filter"
              name="filter"
              className="mr-3 p-4 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="all">All images</option>
              <option value="marked">Editorial</option>
              <option value="not-marked">Video</option>
            </select>
            <div className="flex w-3/5">
              <div className="w-5/6">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full p-4 rounded-l shadow-sm outline-none"
                />
              </div>
              <div className="w-1/6">
                <button className="bg-red-500 p-5 rounded-r shadow-sm outline-none ">
                  <FaSearch />
                </button>
              </div>
            </div>
            <div className="hidden md:flex ml-3">
            <button className=" bg-white px-9 rounded-md p-4 shadow-md">
              image
            </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
