"use client";
import React, { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const Footer = () => {
  const [activeButton, setActiveButton] = useState<String>("");
  const handleClick = (button: String) => {
    if (activeButton === button) {
      setActiveButton("");
    } else {
      setActiveButton(button);
    }
  };
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center w-full">
        <div className=" flex-col">
          <div className="p-2 px-4 mb-10 mt-10">
            <p className="font-bold text-lg sm:text-2xl md:text-3xl text-center">
              Trusted by the world's largest companies
            </p>
          </div>
          <div className="mx-5">
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 justify-center">
              <div className="flex w-auto items-center h-auto p-2">
                <img src="./Rex Public Relations.jpg" />
              </div>
              <div className="flex items-center w-auto h-auto p-2 justify-center">
                <img src="https://mms.businesswire.com/media/20190417005676/en/716842/5/3815087_A%2BE_Networks_Logo2.jpg?download=1" />
              </div>
              <div className="flex justify-center">
                <div className="flex w-auto h-auto items-center p-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/EPA_Images_logo.png" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex w-auto h-auto items-center p-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Conde_Nast_logo.png" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex w-20 h-20 items-center p-2 sm:h-auto sm:w-auto ">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/LIFE_magazine_logo.svg" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex w-20 h-20 items-center p-2 sm:h-auto sm:w-auto">
                  <img src="https://mms.businesswire.com/media/20220222005107/en/1365178/23/STRINGR_LOGO_VB_clean.jpg" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="flex justify-center p-3 mx-5">
                <p className="text-sm sm:text-md lg:text-lg">
                  Need a personalized package for your business?
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="w-full mb-5">
              <div className="flex justify-center mx-5">
                <button className="p-2 bg-red-500 rounded-full text-white font-bold w-56 ">
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-black w-full pb-5">
          <div className="flex justify-center w-full h-auto mt-10">
            <div className="h-10">
              <div className="text-gray-300 text-center">
                We have more than
                <span className="underline text-white text-center">
                  {" "}
                  757,000,000 images{" "}
                </span>
                across Shutterstock's properties as of September 30, 2023.
              </div>
            </div>
          </div>

          <div className="flex-row lg:flex w-full justify-between mx-5 mt-10">
            <div className="flex-row md:flex-1 px-5">
              <div className="mr-5">
                <select
                  id="language"
                  name="language"
                  className="bg-black text-white p-4 rounded-full border-4 w-full border-white outline-none mr-8"
                >
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Spanish">Spanish</option>
                </select>
              </div>
            </div>
            <div className="flex-row lg:flex-1 px-5">
              <div className="">
                <div
                  className="flex justify-between text-white font-bold p-1 pb-2"
                  onClick={() => handleClick("our company")}
                >
                  <div>Our company</div>
                  <div className="mr-5 lg:hidden">
                    {activeButton === "our company" ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    activeButton === "our company" ? "block" : "hidden"
                  } lg:block`}
                >
                  <div className="text-gray-300 cursor-pointer p-1">
                    Sell your content
                  </div>
                  <div className="text-gray-300 cursor-pointer p-1">
                    About us
                  </div>
                  <div className="text-gray-300 cursor-pointer p-1">
                    Careers
                  </div>
                  <div className="text-gray-300 cursor-pointer p-1">
                    Press/Media
                  </div>
                  <div className="text-gray-300 cursor-pointer p-1">
                    Investor relations
                  </div>
                  <div className="text-gray-300 cursor-pointer p-1">
                    Shutterstock Blog
                  </div>
                  <div className="text-gray-300 cursor-pointer p-1">
                    Popular searches
                  </div>
                  <div className="text-gray-300 cursor-pointer p-1">
                    Coupons
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-row lg:flex-1 px-5">
              <div>
                <div
                  className="flex justify-between text-white font-bold p-1 pb-2"
                  onClick={() => handleClick("apps and plugins")}
                >
                  <div>Apps and plugins</div>
                  <div className="mr-5 lg:hidden">
                    {activeButton === "apps and plugins" ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    activeButton === "apps and plugins" ? "block" : "hidden"
                  } lg:block`}
                >
                  <div className="text-gray-300 cursor-pointer p-1">
                    Color palette generator
                  </div>
                  <div className="text-gray-300 cursor-pointer p-1">
                    Ai Styles
                  </div>
                  <div className="text-gray-300 cursor-pointer p-1">
                    iOS app
                  </div>
                  <div className="text-gray-300 cursor-pointer p-1">
                    Android app
                  </div>
                  <div className="text-gray-300 cursor-pointer p-1">
                    Shutter mobile app
                  </div>
                  <div className="text-gray-300 cursor-pointer p-1">
                    Stock photo plugins
                  </div>
                </div>
              </div>
              <div className="mt-1">
                <div
                  className="flex justify-between text-white font-bold p-1 pb-2"
                  onClick={() => handleClick("partner")}
                >
                  <div>Partner</div>
                  <div className="mr-5 lg:hidden">
                    {activeButton === "partner" ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    activeButton === "partner" ? "block" : "hidden"
                  } lg:block`}
                >
                  <div className="text-gray-300 cursor-pointer p-1">
                    Developrs
                  </div>
                  <div className="text-gray-300 cursor-pointer p-1">
                    Affiliate/Reseller
                  </div>
                  <div className="text-gray-300 cursor-pointer p-1">
                    International reseller
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-row lg:flex-1 px-5">
              <div className="">
                <div
                  className="flex justify-between text-white font-bold p-1 pb-2"
                  onClick={() => handleClick("legal")}
                >
                  <div>Legal</div>
                  <div className="mr-5 lg:hidden">
                    {activeButton === "legal" ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    activeButton === "legal" ? "block" : "hidden"
                  } lg:block`}
                >
                  <div className="text-gray-300 cursor-pointer p-1">
                    Website Terms of Use
                  </div>
                  <div className="text-gray-300 cursor-pointer p-1">
                    Terms of Service
                  </div>
                  <div className="text-gray-300 cursor-pointer p-1">
                    Privacy policy
                  </div>
                  <div className="text-gray-300 cursor-pointer p-1">
                    Modern Slavery Statement
                  </div>
                  <div className="text-gray-300 cursor-pointer p-1">
                    Cookie Preferences
                  </div>
                  <div className="text-gray-300 cursor-pointer p-1">
                    Patents
                  </div>
                </div>
              </div>
              <div className="mt-1">
                <div
                  className="flex justify-between text-white font-bold p-1 pb-2"
                  onClick={() => handleClick("innovation")}
                >
                  <div>Innovation</div>
                  <div className="mr-5 lg:hidden">
                    {activeButton === "innovation" ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    activeButton === "innovation" ? "block" : "hidden"
                  } lg:block`}
                >
                  <div className="text-gray-300 cursor-pointer p-1">
                    Shutterstock.AI
                  </div>
                  <div className="text-gray-300 cursor-pointer p-1">
                    AI image generator
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-row lg:flex-1 px-5">
              <div>
                <div
                  className="flex justify-between text-white font-bold p-1 pb-2"
                  onClick={() => handleClick("contact us")}
                >
                  <div>Contact us</div>
                  <div className="mr-5 lg:hidden">
                    {activeButton === "contact us" ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    activeButton === "contact us" ? "block" : "hidden"
                  } lg:block`}
                >
                  <div className="text-gray-300 cursor-pointer p-1">Help</div>
                </div>
              </div>
              <div className="mt-1">
                <div
                  className="flex justify-between text-white font-bold p-1 pb-2"
                  onClick={() => handleClick("services")}
                >
                  <div>Services</div>
                  <div className="mr-5 lg:hidden">
                    {activeButton === "services" ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    activeButton === "services" ? "block" : "hidden"
                  } lg:block`}
                >
                  <div className="text-gray-300 cursor-pointer p-1">
                    Live assignments
                  </div>
                  <div className="text-gray-300 cursor-pointer p-1">
                    Rights and clearance
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="mx-20 mt-20 border-t-2 border-gray-800 pb-5" />

          <div className="flex flex-col lg:flex-row  lg:w-auto lg:justify-between mx-20">
            <div className="flex justify-center">
              <div className="">
                <p className="text-white text-xs">
                  &copy;2003-2023 shutterstock, inc.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-white px-1 cursor-pointer">
                <FacebookIcon />{" "}
              </div>
              <div className="text-white px-1 cursor-pointer">
                <TwitterIcon />{" "}
              </div>
              <div className="text-white px-1 cursor-pointer">
                <InstagramIcon />{" "}
              </div>
              <div className="text-white px-1 cursor-pointer">
                <LinkedInIcon />{" "}
              </div>
              <div className="text-white pl-1 cursor-pointer">
                <YouTubeIcon />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
