import { useAllergyDietContext } from "../contexts/AllergyDietContext";
import SmallIcon from "./SmallIcon";

function DietOption({ names, icons }) {
  const { selectedEmployee } = useAllergyDietContext();

  if (!selectedEmployee.diet || selectedEmployee.diet.length === 0)
    return <p>No diet preferences</p>;
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl">Diet</h1>
      <span className=" p-2 text-center text-sm flex gap-5 justify-center">
        {Array.isArray(icons) ? (
          icons.map((icon, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="flex items-center justify-center ">
                <SmallIcon src={icon} />
              </div>
              <span>{names[index]}</span>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center ">
              <SmallIcon src={icons} />
            </div>
            <span>{names}</span>
          </div>
        )}
      </span>
    </div>
  );
}

export default DietOption;
