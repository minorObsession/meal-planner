import { useState } from "react";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";
import { useModalContext } from "../contexts/ModalContext";

function Signup() {
  const { isOpenModalSignup, handleCloseAnyModal } = useModalContext();
  const {
    employeeDietAndAllergies,
    setEmployeeDietAndAllergies,
    employeeList,
  } = useAllergyDietContext();

  const [selectedName, setSelectedName] = useState("your name");
  const [selectedDiets, setSelectedDiets] = useState([]);
  const [selectedAllergies, setSelectedAllergies] = useState([]);

  console.log(employeeDietAndAllergies);
  const dietaryOptions = [
    "Vegan",
    "Vegetarian",
    "Pescetarian",
    "More Protein",
    "Heart Healthy",
  ];

  const allergyOptions = [
    "Nut Allergy",
    "Gluten Allergy",
    "Soy Allergy",
    "Dairy Allergy",
    "Shellfish Allergy",
  ];

  function handleCheckboxChange(setState, value) {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Combine dietary preferences and allergies into one array
    const combinedPreferences = [...selectedDiets, ...selectedAllergies];

    // Update the state with the new data
    setEmployeeDietAndAllergies((prev) => ({
      ...prev,
      [selectedName]: combinedPreferences,
    }));

    // Close modal after submission
    handleCloseAnyModal();
  }

  if (!isOpenModalSignup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Name Selection */}
          <fieldset className="border border-gray-300 rounded-lg p-3">
            <legend className="text-sm font-semibold">Your Name</legend>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
              value={selectedName}
              onChange={(e) => setSelectedName(e.target.value)}
            >
              {employeeList.map((employee) => (
                <option key={employee} value={employee}>
                  {employee}
                </option>
              ))}
            </select>
          </fieldset>

          {/* Dietary Preferences */}
          <fieldset className="border border-gray-300 rounded-lg p-3">
            <legend className="text-sm font-semibold">
              Dietary Preferences
            </legend>
            <div className="flex flex-col gap-2 mt-2">
              {dietaryOptions.map((diet) => (
                <label key={diet} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedDiets.includes(diet)}
                    onChange={() =>
                      handleCheckboxChange(setSelectedDiets, diet)
                    }
                  />
                  {diet}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Allergies */}
          <fieldset className="border border-gray-300 rounded-lg p-3">
            <legend className="text-sm font-semibold">Allergies</legend>
            <div className="flex flex-col gap-2 mt-2">
              {allergyOptions.map((allergy) => (
                <label key={allergy} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedAllergies.includes(allergy)}
                    onChange={() =>
                      handleCheckboxChange(setSelectedAllergies, allergy)
                    }
                  />
                  {allergy}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary hover:bg-primary-hover text-white font-semibold p-3 rounded-lg transition"
          >
            Submit
          </button>
        </form>

        {/* Close Button */}
        <button
          className="mt-4 text-gray-500 hover:text-gray-700"
          onClick={handleCloseAnyModal}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Signup;
