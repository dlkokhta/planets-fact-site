import { useState } from "react";
import { Link } from "react-router-dom";

const MainNavigation = ({ screenSizeProp }) => {
  const [isVisible, setIsVisible] = useState(false);

  console.log("isVisible", isVisible);

  const hamburgerIconClickhandler = () => {
    setIsVisible(!isVisible);
  };

  const mercuryClickHandler = () => {
    if (screenSizeProp === "sm") {
      setIsVisible(!isVisible);
    }
  };

  const venusClickHandler = () => {
    if (screenSizeProp === "sm") {
      setIsVisible(!isVisible);
    }
  };

  const earthClickHandler = () => {
    if (screenSizeProp === "sm") {
      setIsVisible(!isVisible);
    }
  };

  const marsClickHandler = () => {
    if (screenSizeProp === "sm") {
      setIsVisible(!isVisible);
    }
  };
  const jupiterClickHandler = () => {
    if (screenSizeProp === "sm") {
      setIsVisible(!isVisible);
    }
  };

  const saturnClickHandler = () => {
    if (screenSizeProp === "sm") {
      setIsVisible(!isVisible);
    }
  };

  const uranusClickHandler = () => {
    if (screenSizeProp === "sm") {
      setIsVisible(!isVisible);
    }
  };

  const neptunClickHandler = () => {
    if (screenSizeProp === "sm") {
      setIsVisible(!isVisible);
    }
  };

  return (
    <>
      <header className="xl:flex ">
        <div className="md:pb-[0] flex justify-between items-center w-full  p-[18px] pr-[24px] pb-[16px] pl-[24px] md:p-[32px] ">
          <h1 className="md:m-auto font-antonio font-normal text-[#FFFFFF] text-2xl xl:m-0">
            THE PLANETS
          </h1>
          <div className="md:hidden" onClick={hamburgerIconClickhandler}>
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
        <div className=" h-[1px] bg-white bg-opacity-20 w-[100%] flex  md:hidden"></div>

        {!isVisible && (
          <div className="md:py-[39px] md:pb-[0px] absolute z-10 bg-[#070724] md:relative min-h-full w-screen p-[44px] pr-[24px] pb-[67px] pl-[24px] ">
            <ul className="flex flex-col gap-5 md:flex-row">
              <Link
                className="flex items-center "
                to="/main/mercury"
                onClick={mercuryClickHandler}
              >
                <div className=" w-5 h-5 rounded-full bg-[#DEF4FC] md:hidden"></div>
                <li className="text-[rgb(255,255,255)] ml-[25px] md:text-[11px]">
                  MERCURY
                </li>
                <svg
                  className="ml-auto md:hidden"
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

              <div className=" h-[1px] bg-white bg-opacity-20 w-[100%] flex md:hidden"></div>

              <Link
                className="flex items-center"
                to="/main/venus"
                onClick={venusClickHandler}
              >
                <div className=" w-5 h-5 rounded-full bg-[#F7CC7F] md:hidden"></div>
                <li className=" text-[#FFFFFF] ml-[25px] md:text-[11px]">
                  VENUS
                </li>
                <svg
                  className="ml-auto md:hidden"
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

              <div className=" h-[1px] bg-white bg-opacity-20 w-[100%] flex md:hidden"></div>
              <Link
                className=" flex items-center "
                to="/main/earth"
                onClick={earthClickHandler}
              >
                <div className=" w-5 h-5 rounded-full bg-[#545BFE] md:hidden"></div>
                <li className="text-[#FFFFFF] ml-[25px] md:text-[11px]">
                  EARTH
                </li>
                <svg
                  className="ml-auto md:hidden"
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
              <div className=" h-[1px] bg-white bg-opacity-20 w-[100%] flex md:hidden"></div>
              <Link
                className="flex items-center"
                to="/main/mars"
                onClick={marsClickHandler}
              >
                <div className=" w-5 h-5 rounded-full bg-[#FF6A45] md:hidden"></div>
                <li className="text-[#FFFFFF] ml-[25px] md:text-[11px]">
                  MARS
                </li>
                <svg
                  className="ml-auto md:hidden"
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
              <div className=" h-[1px] bg-white bg-opacity-20 w-[100%] flex md:hidden"></div>
              <Link
                className="flex items-center"
                to="/main/jupiter"
                onClick={jupiterClickHandler}
              >
                <div className=" w-5 h-5 rounded-full bg-[#ECAD7A] md:hidden"></div>
                <li className="text-[#FFFFFF] ml-[25px] md:text-[11px]">
                  JUPITER
                </li>
                <svg
                  className="ml-auto md:hidden"
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
              <div className=" h-[1px] bg-white bg-opacity-20 w-[100%] flex md:hidden"></div>
              <Link
                className="flex items-center"
                to="/main/saturn"
                onClick={saturnClickHandler}
              >
                <div className=" w-5 h-5 rounded-full bg-[#FCCB6B] md:hidden "></div>
                <li className="text-[#FFFFFF] ml-[25px] md:text-[11px]">
                  SATURN
                </li>
                <svg
                  className="ml-auto md:hidden"
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
              <div className=" h-[1px] bg-white bg-opacity-20 w-[100%] flex md:hidden"></div>

              <Link
                className="flex items-center"
                to="/main/uranus"
                onClick={uranusClickHandler}
              >
                <div className=" w-5 h-5 rounded-full bg-[#65F0D5] md:hidden"></div>
                <li className="text-[#FFFFFF] ml-[25px] md:text-[11px]">
                  URANUS
                </li>
                <svg
                  className="ml-auto md:hidden"
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
              <div className=" h-[1px] bg-white bg-opacity-20 w-[100%] flex md:hidden "></div>
              <Link
                className="flex items-center"
                to="/main/neptune"
                onClick={neptunClickHandler}
              >
                <div className=" w-5 h-5 rounded-full bg-[#497EFA] md:hidden"></div>
                <li className="text-[#FFFFFF] ml-[25px] md:text-[11px]">
                  NEPTUNE
                </li>
                <svg
                  className="ml-auto md:hidden"
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
      <div className=" h-[2px] bg-white bg-opacity-20 w-[100%] flex md:my-[27px]  "></div>
    </>
  );
};

export default MainNavigation;
