import { useParams } from "react-router-dom";
import { useState } from "react";
import Button from "./Button.jsx"; // Ensure this is correctly imported
import SmallSpinner from "./SmallSpinner.jsx"; // Ensure this exists if you're using it

function RecipePreview({ recipe }) {
  const { ID } = useParams();
  console.log(ID);
  const [isSelectExpanded, setIsSelectExpanded] = useState(false);
  const [selectedWeekday, setSelectedWeekday] = useState("");

  if (!recipe || recipe.ID !== ID) return <p>Recipe not found</p>;

  const handleAddToMeals = () => {
    console.log("Added to meals:", recipe.name);
  };

  const handleDeleteRecipe = () => {
    console.log("Removed from meals:", recipe.name);
  };

  // const next7Days = (index, shortFormat = false) => {
  //   const date = new Date();
  //   date.setDate(date.getDate() + index);
  //   return shortFormat
  //     ? date.toLocaleDateString("en-US", { weekday: "short" })
  //     : date.toLocaleDateString("en-US", { weekday: "long" });
  // };

  return (
    <div className="relative p-4">
      {/* Recipe Title */}
      <h3 className="text-center whitespace-nowrap overflow-hidden mb-2 text-xl font-semibold">
        {recipe.title}
      </h3>

      {/* Recipe Image */}
      <img
        src={recipe.imageUrl}
        alt={recipe.title}
        className="w-[300px] h-[200px] lg:w-[500px] lg:h-[300px] object-cover text-center p-2 lg:p-5 opacity-65 rounded-3xl"
      />

      {/* Add to Meals Section */}
      <div className="absolute top-12 lg:top-16 right-8 lg:right-12 flex items-center gap-3 bg-stone-500 rounded-lg p-1.5 transition-all duration-700">
        <span className="text-sm italic whitespace-nowrap">Add to Meals</span>
        <select
          className="bg-amber-900 italic max-w-[8rem] text-sm p-1 rounded-full transition-all duration-700"
          onFocus={() => setIsSelectExpanded(true)}
          onBlur={() => setIsSelectExpanded(false)}
          value={selectedWeekday}
          onChange={(e) => setSelectedWeekday(e.target.value)}
        >
          {[...Array(7)].map((_, i) => (
            <option key={i} value={next7Days(i)}>
              {next7Days(i, !isSelectExpanded)}
            </option>
          ))}
        </select>
        <Button onClick={handleAddToMeals} type="round">
          {isSelectExpanded ? <SmallSpinner /> : "+"}
        </Button>
      </div>

      {/* Remove from Meals Section */}
      <div className="absolute bottom-4 lg:bottom-8 right-8 lg:right-12 flex items-center gap-3 bg-stone-500 rounded-lg p-1.5 transition-all duration-700">
        <span className="text-sm italic">Remove from my recipes</span>
        <Button
          onClick={handleDeleteRecipe}
          additionalClasses="text-2xl"
          type="round"
        >
          {isSelectExpanded ? <SmallSpinner /> : "-"}
        </Button>
      </div>
    </div>
  );
}

export default RecipePreview;

// ! copied from other project
// return (
//   <div className="relative">
//     <h3 className="text-center whitespace-nowrap overflow-hidden mb-2">
//       {recipe?.title}
//     </h3>
//     <img
//       src={recipe.imageUrl}
//       className=" w-[300px] h-[200px] lg:w-[500px] lg:h-[300px] object-cover text-center p-2 lg:p-5 opacity-65 rounded-3xl "
//     ></img>
//     <div className="absolute top-12 lg:top-16 right-8 lg:right-12 flex items-center gap-3 bg-stone-500 rounded-lg p-1.5 transition-all duration-700">
//       <span className="text-sm italic whitespace-nowrap">Add to Meals</span>

//       <select
//         className={` bg-amber-900 italic  max-w-[8rem] text-sm p-1 rounded-full transition-all duration-700 `}
//         onFocus={() => setIsSelectExpanded(true)}
//         onBlur={() => setIsSelectExpanded(false)}
//         value={selectedWeekday}
//         onChange={(e) => setSelectedWeekday(e.target.value)}
//       >
//         <option value={next7Days(0)}>
//           {next7Days(0, !isSelectExpanded)}
//         </option>
//         <option value={next7Days(1)}>
//           {next7Days(1, !isSelectExpanded)}
//         </option>
//         <option value={next7Days(2)}>
//           {next7Days(2, !isSelectExpanded)}
//         </option>
//         <option value={next7Days(3)}>
//           {next7Days(3, !isSelectExpanded)}
//         </option>
//         <option value={next7Days(4)}>
//           {next7Days(4, !isSelectExpanded)}
//         </option>
//         <option value={next7Days(5)}>
//           {next7Days(5, !isSelectExpanded)}
//         </option>
//         <option value={next7Days(6)}>
//           {next7Days(6, !isSelectExpanded)}
//         </option>
//       </select>
//       <Button onClick={handleAddToMeals} type="round">
//         {isLoading ? <SmallSpinner /> : "+"}
//       </Button>
//     </div>
//     <div className="absolute bottom-4 lg:bottom-8 right-8 lg:right-12 flex items-center gap-3 bg-stone-500 rounded-lg p-1.5 transition-all duration-700">
//       <span className="text-sm italic">Remove from my recipes </span>
//       <Button
//         onClick={handleDeleteRecipe}
//         additionalClasses="text-2xl"
//         type="round"
//       >
//         {isLoading ? <SmallSpinner /> : "-"}
//       </Button>
//     </div>
//   </div>
// );
