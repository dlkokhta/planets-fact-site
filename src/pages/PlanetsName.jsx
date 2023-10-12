import { useParams } from "react-router-dom";
import planetsData from "../data/data.json";
import React, { useState } from "react";

function PlanetsName() {
  const { name } = useParams();
  const [overviewVisible, setOverviewVisible] = useState(true);
  const [structureVisible, setStructureVisible] = useState(false);
  const [surfaceVisible, setSurfaceVisible] = useState(false);
  console.log(name);

  const planetData = planetsData.find(
    (item) => item.name.toUpperCase() === name.toUpperCase()
  );

  const overviewClickHandler = () => {
    setOverviewVisible(false);
  };

  const structureClickHandler = () => {
    setStructureVisible(false);
  };

  const surfaceClickHandler = () => {
    setStructureVisible(false);
  };

  return (
    <>
      <div>
        <div>
          <div className="flex justify-between items-center p-[17px] pr-[24px] pl-[24px]">
            <h1
              className="text-white text-[9px] font-spartan font-bold"
              onClick={overviewClickHandler}
            >
              OVERVIEW
            </h1>
            <h1
              className="text-white text-[9px] font-spartan font-bold"
              onClick={structureClickHandler}
            >
              STRUCTURE
            </h1>
            <h1
              className="text-white text-[9px] font-spartan font-bold"
              onClick={surfaceClickHandler}
            >
              SURFACE
            </h1>
          </div>
          <div className=" h-[1px] bg-white bg-opacity-20 w-[100%] flex "></div>

          <div>
            <img
              className=" mx-auto w-[111px] mt-[95px]"
              src={planetData.images.planet}
            />

            <div className=" text-white mt-[95px] mb-[28px] pr-[24px]  pl-[24px]">
              <h1 className=" font-antonio text-center text-[40px] pt-[0]">
                {planetData.name}
              </h1>

              <p className="">{planetData.overview.content}</p>

              <div className=" flex justify-center items-center gap-[4px] ">
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

          <div>
            <img
              className=" mx-auto w-[111px] mt-[95px]"
              src={planetData.images.internal}
            />

            <div className=" text-white mt-[95px] mb-[28px] pr-[24px]  pl-[24px]">
              <h1 className=" font-antonio text-center text-[40px] pt-[0]">
                {planetData.name}
              </h1>

              <p className="">{planetData.overview.content}</p>

              <div className=" flex justify-center items-center gap-[4px] ">
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

          <div>
            <img
              className=" mx-auto w-[111px] mt-[95px]"
              src={planetData.images.geology}
            />

            <div className=" text-white mt-[95px] mb-[28px] pr-[24px]  pl-[24px]">
              <h1 className=" font-antonio text-center text-[40px] pt-[0]">
                {planetData.name}
              </h1>

              <p className="">{planetData.overview.content}</p>

              <div className=" flex justify-center items-center gap-[4px] ">
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

        <div className="pr-[24px] pl-[24px] flex flex-col gap-[8px]">
          <div
            className=" flex justify-between items-center border-solid border-[1px] border-white 
            p-[9px] pr-[24px] pb-[13px] pl-[24px]"
          >
            <div className=" font-spartan text-[8px] font-bold text-white">
              ROTATION TIME
            </div>
            <div className=" font-antonio text-[20px] font-normal text-white">
              {planetData.rotation.toUpperCase()}
            </div>
          </div>
          <div className=" flex justify-between items-center  border-solid border-[1px] border-white  p-[9px] pr-[24px] pb-[13px] pl-[24px]">
            <div className="font-spartan text-[8px] font-bold text-white">
              REVOLUTION TIME
            </div>
            <div className=" font-antonio text-[20px] font-normal text-white">
              {planetData.revolution}
            </div>
          </div>
          <div className="flex justify-between items-center border-solid border-[1px] border-white  p-[9px] pr-[24px] pb-[13px] pl-[24px]">
            <div className="font-spartan text-[8px] font-bold text-white">
              RADIUS
            </div>
            <div className=" font-antonio text-[20px] font-normal text-white">
              {planetData.radius}
            </div>
          </div>
          <div className=" flex justify-between items-center border-solid border-[1px] border-white  p-[9px] pr-[24px] pb-[13px] pl-[24px]">
            <div className="font-spartan text-[8px] font-bold text-white">
              AVERAGE TEMP
            </div>
            <div className=" font-antonio text-[20px] font-normal text-white">
              {planetData.temperature}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PlanetsName;
