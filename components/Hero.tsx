import Image from "next/image";
// import SearchIcon from '@mui/icons-material/Search';
const Hero = () => {
  return (
    <div className="relative">
      <img
        src="/pexels-pixabay-206359.jpg"
        alt="bg-image"
        className="w-full "
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center ">
        <h1 className="text-white text-5xl z-10 p-5 justify-center text-center mt-20">
          Unleash your creativity with unrivaled images
        </h1>
        <p className="text-white p-5 justify-center text-center ">
          Add wonder to your stories with 425M+ photos, vectors, illustrations,
          and editorial images.
        </p>
        <div className="w-full flex px-7 sm:px-10 md:px-32 lg:px-56">
          <div className=" flex flex-row items-center mt-5 backdrop-blur-md p-5 w-full">
            <select
              id="filter"
              name="filter"
              className="mr-3 p-5 border border-gray-300 rounded-md"
            >
              <option value="all">All images</option>
              <option value="marked">Editorial</option>
              <option value="not-marked">Video</option>
            </select>
            <input
              type="text"
              placeholder="Search"
              className="w-full p-5 border border-gray-300 rounded-l"
            />
            <button className="bg-red-500 p-5 rounded-r"> s</button>
            <button className="ml-5 bg-white px-10 rounded-sm py-2">
              S by image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
