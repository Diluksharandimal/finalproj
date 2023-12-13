import React, { useEffect, useState } from 'react';
import { supabase } from '../../../client';

const Registration = () => {
  const [examData, setExamData] = useState([]);
  const [examinorData, setExaminorData] = useState([]);
  const [error, setError] = useState('');

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedExaminor, setSelectedExaminor] = useState('');
  const [formError, setFormError] = useState('');
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the 'Exam' table for date and type dropdowns
        let { data: examData, error } = await supabase
          .from('Exam')
          .select('Exam_id, Date, Type');

        if (error) {
          setError(error.message);
          return;
        }

        setExamData(examData);

        // Fetch data from the 'Examinors' table for examiner dropdown
        let { data: examinorData, error: examinorError } = await supabase
          .from('Examinors')
          .select('Examinors_id, First_name');

        if (examinorError) {
          setError(examinorError.message);
          return;
        }

        setExaminorData(examinorData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDate || !selectedType || !selectedExaminor) {
      setFormError('Please fill in all the fields correctly');
      return;
    }

    try {
      // Fetch the Examinor ID based on the selectedExaminor value
      const selectedExaminorId = examinorData.find((examinor) => examinor.First_name === selectedExaminor)?.Examinors_id;

      if (!selectedExaminorId) {
        setFormError('Invalid Examinor selected');
        return;
      }

      // Insert data into the 'YourTableName' table, replace 'YourTableName' with your actual table name
      const { data, error } = await supabase
        .from('has')
        .insert([
          {
            Date: selectedDate,
            exam: selectedType,
            Examinors_id: selectedExaminorId,
          },
        ]);

      if (error) {
        console.log(error);
        setFormError('An error occurred while submitting the form. Please try again.');
        return;
      }

      if (data) {
        console.log(data);
        setFormError(null);

        // Reset the form after successful submission
        setSelectedDate('');
        setSelectedType('');
        setSelectedExaminor('');
        setSelectedData({
          selectedDate,
          selectedType,
          selectedExaminor,
        });
      }
    } catch (error) {
      console.error('Error performing actions:', error.message);
      setFormError('An error occurred while processing the form. Please try again.');
    }
  };

  const handleDisplayData = () => {
    setSelectedData({
      selectedDate,
      selectedType,
      selectedExaminor,
    });
  };

  return (
    <div>
      <h2 className='mx-auto py-10 mt-20 md:text-7xl text-7xl font-bold text-[#010851] mb-6 leading-relaxed text-center'>
        Pick Your Exam Date Here
      </h2>

      <div className="flex items-center justify-center h-screen">
        <div className="border p-8 rounded-md w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
          <form className="danuregiform" form action="POST" data-netlify="true" id="myForm" onSubmit={handleSubmit}>
            <div className="r2inputfield my-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Date:</label>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
                className="p-3 border border-gray-300 rounded w-full"
              >
                <option value="">Select Date</option>
                {examData.map((exam) => (
                  <option key={exam.Exam_id} value={exam.Date}>
                    {exam.Date}
                  </option>
                ))}
              </select>
            </div>

            <div className="r2inputfield my-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Type:</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                required
                className="p-3 border border-gray-300 rounded w-full"
              >
                <option value="">Select Type</option>
                {examData.map((exam) => (
                  <option key={exam.Exam_id} value={exam.Type}>
                    {exam.Type}
                  </option>
                ))}
              </select>
            </div>

            <div className="r2inputfield my-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Examinor:</label>
              <select
                value={selectedExaminor}
                onChange={(e) => setSelectedExaminor(e.target.value)}
                required
                className="p-3 border border-gray-300 rounded w-full"
              >
                <option value="">Select Examinor</option>
                {examinorData.map((examinors) => (
                  <option key={examinors.Examinors_id} value={examinors.First_name}>
                    {examinors.First_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="r2inputfield btns" id="r2btn">
              <button
                type="submit"
                value="Register"
                className="r2btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
              <button
                type="button" // Change type to button to prevent form submission
                onClick={handleDisplayData}
                className="r2btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Display Selected Data
              </button>
              <button
                type="reset"
                value="Reset"
                className="r2btn bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Reset
              </button>
            </div>

            {selectedData && (
              <div className="my-4">
                <h3 className="text-xl font-semibold mb-2">Selected Data:</h3>
                <p>Date: {selectedData.selectedDate}</p>
                <p>Type: {selectedData.selectedType}</p>
                <p>Examinor: {selectedData.selectedExaminor}</p>
              </div>
            )}

            {formError && <p className="error text-red-500">{formError}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
