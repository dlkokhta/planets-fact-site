import { useParams } from "react-router-dom";
import planetsData from "../data/data.json";

const PlanetsName = () => {
  const { name } = useParams();

  console.log(name);

  const planetData = planetsData.find(
    (item) => item.name.toUpperCase() === name.toUpperCase()
  );
  console.log(planetData);

  return (
    <>
      <div className=" text-white p-[44px] pr-[24px] pb-[67px] pl-[24px]">
        <div className="flex justify-between">
          <h1>OVERVIEW</h1>
          <h1>STRUCTURE</h1>
          <h1>SURFACE</h1>
        </div>
        <div>
          <h1>{planetData.name}</h1>
          <h1>{planetData.overview.content}</h1>
          <a className="w-full">{planetData.overview.source}</a>
        </div>
        <div></div>
      </div>
    </>
  );
};
export default PlanetsName;
