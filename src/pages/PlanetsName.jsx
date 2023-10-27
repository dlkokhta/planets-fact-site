import { useParams } from "react-router-dom";
import planetsData from "../data/data.json";
import React, { isValidElement, useState, useEffect } from "react";

function PlanetsName({ setScreenSizeProps }) {
  const { name } = useParams();
  // const [overviewVisible, setOverviewVisible] = useState(true);
  // const [structureVisible, setStructureVisible] = useState(false);
  // const [surfaceVisible, setSurfaceVisible] = useState(false);

  const [currentSection, setCurrentSection] = useState("overview");
  const [screenSize, setScreenSize] = useState("md");

  setScreenSizeProps(screenSize);

  const planetData = planetsData.find(
    (item) => item.name.toUpperCase() === name.toUpperCase()
  );

  const overviewClickHandler = () => {
    setCurrentSection("overview");
  };

  const structureClickHandler = () => {
    setCurrentSection("structure");
  };

  const surfaceClickHandler = () => {
    setCurrentSection("surface");
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 380) {
        setScreenSize("sm");
      } else if (windowWidth > 770) {
        setScreenSize("md");
      }
      console.log(screenSize);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/*  image , planet name and text xontainer*/}
      <div className="xl:flex xl:flex-row xl:pl-[335px] xl:pt-[126px] xl:pr-[165px] xl:gap-[300px] ">
        {/* planet image */}
        <img
          className="xl:w-[290px] xl:h-[290px]  mx-auto w-[184px] mt-[95px] hidden md:block md:mt-[146px]"
          src={
            currentSection === "overview"
              ? planetData.images.planet
              : currentSection === "structure"
              ? planetData.images.internal
              : planetData.images.planet
          }
        />
        {currentSection === "surface" && (
          <img
            src={planetData.images.geology}
            className="xl:m-0 xl:ml-[255px] xl:mt-[270px] xl:w-[129px] xl:h-[139px] md:ml-[180px] md:mt-[130px] w-[80px] h-[100px] absolute   top-[290px] left-[164px] hidden md:block"
          />
        )}

        {/* buttons , planet name and text container */}
        <div className="xl:items-start xl:flex-col xl:gap-[39px]  md:flex md:flex-row md:items-center md:gap-[69px] ">
          {/* buttons container */}
          <div className="xl:mb-0  md:flex md:flex-col md:gap-[16px] md:order-2 md:mb-[-150px] flex justify-between  p-[20px] pr-[24px] pl-[24px] pb-[0]">
            <div
              onClick={overviewClickHandler}
              className="md:border md:border-solid md:border-white flex flex-col md:flex md:gap-[16px] md:justify-center "
            >
              <h1
                className="md:absolute text-white text-[9px] font-spartan font-bold tracking-[1.93px] leading-[10px] opacity-[50%] cursor-pointer hover:text-white hover:opacity-[100] "
                onClick={overviewClickHandler}
              >
                {screenSize === "md" ? (
                  <span className="xl:text-[12px] xl:gap-[28px]  md:flex md:gap-[17px] xl:ml- pl-[20px]">
                    {" "}
                    01 <span>OVERVIEW</span>
                  </span>
                ) : (
                  <span> OVERVIEW</span>
                )}
              </h1>
              <div
                style={
                  currentSection === "overview"
                    ? {
                        background: planetData.color,
                      }
                    : currentSection === "structure"
                    ? {
                        background: "#070724",
                      }
                    : {
                        background: "#070724",
                      }
                }
                className="w-[65px] h-[4px] mt-[20px] md:w-[281px] md:h-[40px] md:mt-[0]"
              ></div>
            </div>

            <div
              onClick={structureClickHandler}
              className="md:border md:border-solid md:border-white flex flex-col md:flex md:gap-[16px] md:justify-center"
            >
              <h1
                className="md:absolute text-white text-[9px] font-spartan font-bold tracking-[1.93px] leading-[10px] opacity-[50%] cursor-pointer  hover:text-white hover:opacity-[100]"
                onClick={structureClickHandler}
              >
                {screenSize === "md" ? (
                  <span className="xl:text-[12px]  xl:gap-[28px] md:flex md:gap-[17px] pl-[20px]">
                    02 <span>INTERNAL STRUCTURE</span>
                  </span>
                ) : (
                  <span> STRUCTURE</span>
                )}
              </h1>
              <div
                style={
                  currentSection === "overview"
                    ? {
                        background: "#070724",
                      }
                    : currentSection === "structure"
                    ? {
                        background: planetData.color,
                      }
                    : {
                        background: "#070724",
                      }
                }
                className=" w-[72px] h-[4px] mt-[20px] md:w-[281px] md:h-[40px] md:mt-[0]"
              ></div>
            </div>

            <div
              onClick={surfaceClickHandler}
              className=" md:border md:border-solid md:border-white flex flex-col md:flex md:gap-[16px] md:justify-center"
            >
              <h1
                className="xl:text-[12px] md:absolute text-white text-[9px] font-spartan font-bold tracking-[1.93px] leading-[10px] opacity-[50%] cursor-pointer  hover:text-white hover:opacity-[100]"
                onClick={surfaceClickHandler}
              >
                {screenSize === "md" ? (
                  <span className="pl-[20px] md:flex md:gap-[17px] xl:gap-[28px]">
                    03 <span>SURFACE GEOLOGY</span>
                  </span>
                ) : (
                  <span> SURFACE</span>
                )}
              </h1>
              <div
                style={
                  currentSection === "overview"
                    ? {
                        background: "#070724",
                      }
                    : currentSection === "structure"
                    ? {
                        background: "#070724",
                      }
                    : {
                        background: planetData.color,
                      }
                }
                className=" w-[60px] h-[4px] mt-[20px] md:w-[281px] md:h-[40px] md:mt-[0]"
              ></div>
            </div>
          </div>

          <div className=" h-[1px] bg-white bg-opacity-20 w-[100%] flex md:hidden"></div>

          <div>
            <img
              className=" mx-auto w-[111px] mt-[95px] md:hidden"
              src={
                currentSection === "overview"
                  ? planetData.images.planet
                  : currentSection === "structure"
                  ? planetData.images.internal
                  : planetData.images.planet
              }
            />
            {currentSection === "surface" && (
              <img
                src={planetData.images.geology}
                className="w-[50px] h-[60px] absolute   top-[290px] left-[164px] md:hidden"
              />
            )}
            {/* planet name and text container */}
            <div className="xl:m-[0] md:mt-[130px] text-white mt-[95px] mb-[28px] pr-[24px]  pl-[24px]">
              <h1 className="xl:text-[80px] md:flex md:mb-[24px] md:items-start md:text-[48px] font-antonio text-center text-[40px] pt-[0] pb-[16px]">
                {planetData.name}
              </h1>

              <p className="xl:text-[14px] font-spartan font-[400] text-[11px] leading-[22px]  line-clamp-4  ">
                {currentSection === "overview"
                  ? planetData.overview.content
                  : currentSection === "structure"
                  ? planetData.structure.content
                  : planetData.geology.content}
              </p>

              <div className="md:justify-start flex justify-center items-center gap-[4px] mt-[32px] opacity-[50%]">
                <a href="{planetData.overview.source}">
                  Source : <u>Wikipedia</u>
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                  <path
                    fill="#FFF"
                    d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                    opacity=".5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:pl-[165px] xl:pt-[87px] xl:gap-[30px] md:flex-row md:gap-[11px] pr-[24px] pl-[24px] flex flex-col gap-[8px]  ">
        <div
          className="xl:w-[255px] xl:h-[128px] md:w-[164px] md:h-[88px] md:py-[16px]  md:pb-[19px] md:pl-[15px]  md:flex-col flex justify-between items-center border-solid border-[1px] border-[#cbcaca] 
            p-[9px] pr-[24px] pb-[13px] pl-[24px] "
        >
          <div className="xl:text-[11px] font-spartan text-[8px]   font-bold text-white opacity-[50%]">
            ROTATION TIME
          </div>
          <div className="xl:text-[40px] flex-col font-antonio text-[20px] md:text-[24px] font-normal text-white ">
            {planetData.rotation.toUpperCase()}
          </div>
        </div>
        <div className="xl:w-[255px] xl:h-[128px] md:w-[164px] md:h-[88px] md:py-[16px]  md:pb-[19px] md:pl-[15px] md:flex-col flex justify-between items-center  border-solid border-[1px] border-white  p-[9px] pr-[24px] pb-[13px] pl-[24px]">
          <div className="xl:text-[11px] font-spartan text-[8px] font-bold text-white opacity-[50%]">
            REVOLUTION TIME
          </div>
          <div className="xl:text-[40px] font-antonio text-[20px]  md:text-[24px] font-normal text-white">
            {planetData.revolution}
          </div>
        </div>
        <div className="xl:w-[255px] xl:h-[128px] md:w-[164px] md:h-[88px] md:py-[16px] md:pb-[19px] md:pl-[15px] md:flex-col flex justify-between items-center border-solid border-[1px] border-white  p-[9px] pr-[24px] pb-[13px] pl-[24px]">
          <div className="xl:text-[11px] font-spartan text-[8px] font-bold text-white opacity-[50%]">
            RADIUS
          </div>
          <div className="xl:text-[40px] font-antonio text-[20px]  md:text-[24px] font-normal text-white">
            {planetData.radius}
          </div>
        </div>
        <div className="xl:w-[255px] xl:h-[128px] md:w-[164px] md:h-[88px] md:py-[16px]  md:pb-[19px] md:pl-[15px] md:flex-col flex justify-between items-center border-solid border-[1px] border-white  p-[9px] pr-[24px] pb-[13px] pl-[24px]">
          <div className="xl:text-[11px] font-spartan text-[8px] font-bold text-white opacity-[50%]">
            AVERAGE TEMP
          </div>
          <div className="xl:text-[40px] font-antonio text-[20px]  md:text-[24px] font-normal text-white">
            {planetData.temperature}
          </div>
        </div>
      </div>
    </>
  );
}
export default PlanetsName;
