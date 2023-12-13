// src/components/DrivingSchoolInterface.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../../../client';

const Newcan = () => {
  const [user, setUser] = useState(null);
  const [customerData, setCustomerData] = useState(null);
  const [trainerName, setTrainerName] = useState('');
  const [user2, setUser2] = useState({
    Exam_status: ''
  });
  const [newExamStatus, setNewExamStatus] = useState('');

  useEffect(() => {
    fetchUser();
    fetchCustomerData();
  }, []);

  async function fetchUser() {
    try {
      const storedUser = localStorage.getItem('loggedInUser');
      const parsedUser = storedUser ? JSON.parse(storedUser) : null;

      console.log('Stored User:', parsedUser);
      setUser(parsedUser);
    } catch (error) {
      console.error('Error fetching user:', error.message);
    }
  }

  async function fetchCustomerData() {
    try {
      if (!user) return;

      // Replace 'has' with your actual table name
      const { data, error } = await supabase
        .from('has')
        .select('*')
        .eq('Examinors_id', user.Examinors_id);

      if (error) {
        throw error;
      }

      console.log('Customer Data:', data);
      setCustomerData(data);
    } catch (error) {
      console.error('Error fetching customer data:', error.message);
    }
  }

  async function updateExamStatus(customerId, status) {
    try {
      const { data, error } = await supabase
        .from('has')
        .update({ result: status })
        .eq('id', customerId);

      if (error) {
        console.error(error);
        return;
      }

      console.log(data);

      // Refresh customer data after update
      fetchCustomerData();
    } catch (error) {
      console.error('An unexpected error occurred:', error.message);
    }
  }

  return (
    <div className="container mx-auto my-8 p-8 border rounded-lg shadow-md bg-white">
      {user && <p className="text-lg font-semibold">{user.Name}</p>}

      {customerData && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Candidates Data:</h3>
          <ul>
            {customerData.map((customer) => (
              <li key={customer.id} className="mb-4">
                <p className="text-base">
                  <span className="font-semibold text-lg">Date:</span> {customer.Date}
                </p>
                <p className="text-base">
                  <span className="font-semibold text-lg">Type:</span> {customer.exam}
                </p>
                <p className="text-base">
                  <span className="font-semibold text-lg">Examinor:</span> {customer.Examinors_id}
                </p>
                <p className="text-base">
                  <span className="font-semibold text-lg">Exam Status:</span> {customer.result}
                </p>

                <div className="flex items-center mt-4">
                  <button
                    onClick={() => updateExamStatus(customer.id, 'Pass')}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
                  >
                    Pass
                  </button>
                  <button
                    onClick={() => updateExamStatus(customer.id, 'Fail')}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Fail
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Newcan;
