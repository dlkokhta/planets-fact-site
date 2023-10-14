import { useState } from "react";
import { Link } from "react-router-dom";

const MainNavigation = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const hamburgerIconClickhandler = () => {
    setIsVisible(!isVisible);
  };
  const mercuryClickHandler = () => {
    setIsVisible(!isVisible);
  };

  const venusClickHandler = () => {
    setIsVisible(!isVisible);
  };

  const earthClickHandler = () => {
    setIsVisible(!isVisible);
  };

  const marsClickHandler = () => {
    setIsVisible(!isVisible);
  };
  const jupiterClickHandler = () => {
    setIsVisible(!isVisible);
  };

  const saturnClickHandler = () => {
    setIsVisible(!isVisible);
  };

  const uranusClickHandler = () => {
    setIsVisible(!isVisible);
  };

  const neptunClickHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <header className="">
        <div className=" flex justify-between items-center w-full  p-[18px] pr-[24px] pb-[16px] pl-[24px] ">
          <h1 className=" font-antonio font-normal text-[#FFFFFF] text-2xl">
            THE PLANETS
          </h1>
          <div onClick={hamburgerIconClickhandler}>
            {isVisible ? (
              <svg
                className=" opacity-[50%]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="17"
              >
                <g fill="#FFF" fill-rule="evenodd">
                  <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
                </g>
              </svg>
            ) : (
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="17"
              >
                <g fill="#FFF" fill-rule="evenodd">
                  <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
                </g>
              </svg>
            )}
          </div>
        </div>
        <div className=" h-[1px] bg-white bg-opacity-20 w-[100%] flex "></div>
        {isVisible && (
          <div className="absolute z-10 bg-[#070724] min-h-full w-screen p-[44px] pr-[24px] pb-[67px] pl-[24px] ">
            <ul className="flex flex-col gap-5">
              <Link
                className="flex items-center "
                to="/main/mercury"
                onClick={mercuryClickHandler}
              >
                <div className=" w-5 h-5 rounded-full bg-[#DEF4FC]"></div>
                <li className="text-[rgb(255,255,255)] ml-[25px]">MERCURY</li>
                <svg
                  className="ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="8"
                >
                  <path
                    fill="none"
                    stroke="#FFF"
                    opacity=".4"
                    d="M1 0l4 4-4 4"
                  />
                </svg>
              </Link>
              <div className=" h-[1px] bg-white bg-opacity-20 w-[100%] flex "></div>
              <Link
                className="flex items-center"
                to="/main/venus"
                onClick={venusClickHandler}
              >
                <div className=" w-5 h-5 rounded-full bg-[#F7CC7F]"></div>
                <li className=" text-[#FFFFFF] ml-[25px]">VENUS</li>
                <svg
                  className="ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="8"
                >
                  <path
                    fill="none"
                    stroke="#FFF"
                    opacity=".4"
                    d="M1 0l4 4-4 4"
                  />
                </svg>
              </Link>
              <div className=" h-[1px] bg-white bg-opacity-20 w-[100%] flex "></div>
              <Link
                className=" flex items-center "
                to="/main/earth"
                onClick={earthClickHandler}
              >
                <div className=" w-5 h-5 rounded-full bg-[#545BFE]"></div>
                <li className="text-[#FFFFFF] ml-[25px]">EARTH</li>
                <svg
                  className="ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="8"
                >
                  <path
                    fill="none"
                    stroke="#FFF"
                    opacity=".4"
                    d="M1 0l4 4-4 4"
                  />
                </svg>
              </Link>
              <div className=" h-[1px] bg-white bg-opacity-20 w-[100%] flex "></div>
              <Link
                className="flex items-center"
                to="/main/mars"
                onClick={marsClickHandler}
              >
                <div className=" w-5 h-5 rounded-full bg-[#FF6A45]"></div>
                <li className="text-[#FFFFFF] ml-[25px]">MARS</li>
                <svg
                  className="ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="8"
                >
                  <path
                    fill="none"
                    stroke="#FFF"
                    opacity=".4"
                    d="M1 0l4 4-4 4"
                  />
                </svg>
              </Link>
              <div className=" h-[1px] bg-white bg-opacity-20 w-[100%] flex "></div>
              <Link
                className="flex items-center"
                to="/main/jupiter"
                onClick={jupiterClickHandler}
              >
                <div className=" w-5 h-5 rounded-full bg-[#ECAD7A]"></div>
                <li className="text-[#FFFFFF] ml-[25px]">JUPITER</li>
                <svg
                  className="ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="8"
                >
                  <path
                    fill="none"
                    stroke="#FFF"
                    opacity=".4"
                    d="M1 0l4 4-4 4"
                  />
                </svg>
              </Link>
              <div className=" h-[1px] bg-white bg-opacity-20 w-[100%] flex "></div>
              <Link
                className="flex items-center"
                to="/main/saturn"
                onClick={saturnClickHandler}
              >
                <div className=" w-5 h-5 rounded-full bg-[#FCCB6B]"></div>
                <li className="text-[#FFFFFF] ml-[25px]">SATURN</li>
                <svg
                  className="ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="8"
                >
                  <path
                    fill="none"
                    stroke="#FFF"
                    opacity=".4"
                    d="M1 0l4 4-4 4"
                  />
                </svg>
              </Link>
              <div className=" h-[1px] bg-white bg-opacity-20 w-[100%] flex "></div>

              <Link
                className="flex items-center"
                to="/main/uranus"
                onClick={uranusClickHandler}
              >
                <div className=" w-5 h-5 rounded-full bg-[#65F0D5]"></div>
                <li className="text-[#FFFFFF] ml-[25px]">URANUS</li>
                <svg
                  className="ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="8"
                >
                  <path
                    fill="none"
                    stroke="#FFF"
                    opacity=".4"
                    d="M1 0l4 4-4 4"
                  />
                </svg>
              </Link>
              <div className=" h-[1px] bg-white bg-opacity-20 w-[100%] flex "></div>
              <Link
                className="flex items-center"
                to="/main/neptune"
                onClick={neptunClickHandler}
              >
                <div className=" w-5 h-5 rounded-full bg-[#497EFA]"></div>
                <li className="text-[#FFFFFF] ml-[25px]">NEPTUNE</li>
                <svg
                  className="ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="8"
                >
                  <path
                    fill="none"
                    stroke="#FFF"
                    opacity=".4"
                    d="M1 0l4 4-4 4"
                  />
                </svg>
              </Link>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default MainNavigation;
