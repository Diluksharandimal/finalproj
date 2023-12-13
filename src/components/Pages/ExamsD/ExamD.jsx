import React, { useState } from "react";
import { supabase } from "../../../client";

const Exam = () => {
  const [Type, setType] = useState("");
  const [Date, setDate] = useState("");
  const [Time, setTime] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Type || !Date || !Time) {
      setFormError("Please fill in all the fields");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("Exam")
        .upsert([
          {
            Type,
            Date,
            Time,
          },
        ]);

      if (error) {
        console.error(error);
        setFormError("Error submitting the form. Please try again.");
      }

      if (data) {
        console.log(data);
        setFormError(null);
        resetFormFields();
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error.message);
      setFormError("An unexpected error occurred. Please try again.");
    }
  };

  const resetFormFields = () => {
    setType("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <form
        className="max-w-md mx-auto border-collapse border-t-8 border-l-8 border-b-8 border-r-8 rounded-xl box-border border-indigo-500"
        onSubmit={handleSubmit}
        id="examinors"
      >
        <h1 className="mb-24 ml-16 font-extrabold text-blue-950 text-xl mt-8">
          ADD EXAMS IN HERE
        </h1>
        <div className="relative z-0 w-full mb-5 group pl-6 pr-6">
          <select
            name="examType"
            id="examType"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={Type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="" disabled selected>
              Select Exam Type
            </option>
            <option value="Written">Written</option>
            <option value="Trial">Trial</option>
          </select>
        </div>
        <div className="relative z-0 w-full mb-5 group pl-6 pr-6">
          {/* Date input field */}
          <input
            type="date"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={Date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Date
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group pl-6 pr-6">
          {/* Time input field */}
          <input
            type="text"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={Time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Time
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mb-6 ml-6 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default Exam;
