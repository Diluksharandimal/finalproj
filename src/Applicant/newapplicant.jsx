// src/components/DrivingSchoolInterface.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../client';

const DrivingSchoolInterface = ({ schoolId }) => {
  const [user, setUser] = useState(null);
  const [customerData, setCustomerData] = useState(null);
  const [trainerName, setTrainerName] = useState('');

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

      // Replace 'Customer' with your actual table name
      const { data, error } = await supabase
        .from('Customer')
        .select('*')
        .eq('Ds_id', user.Ds_id); // Assuming there is a 'Ds_id' column

      if (error) {
        throw error;
      }

      console.log('Customer Data:', data);
      setCustomerData(data);
    } catch (error) {
      console.error('Error fetching customer data:', error.message);
    }
  }

  async function updatetrainer(customerId) {
    try {
      const { data, error } = await supabase
        .from('Customer')
        .update({ trainer_name: trainerName }) // Change 'vehicle_trainer' to 'trainer_name'
        .eq('cus_id', customerId);

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
          <h3 className="text-lg font-semibold mb-2">Customer Data:</h3>
          <ul>
            {customerData.map((customer) => (
              <li key={customer.id} className="mb-4">
                <p className="text-base">
                  <span className="font-semibold text-lg">Name:</span> {customer.Name}
                </p>
                <p className="text-base">
                  <span className="font-semibold text-lg">Email:</span> {customer.Email}
                </p>
                <p className="text-base">
                  <span className="font-semibold text-lg">Approval Status:</span> {customer.approval_status === 'Approved' ? 'Approved' : 'Pending'}
                </p>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Enter Trainer Name"
                    value={trainerName}
                    onChange={(e) => setTrainerName(e.target.value)}
                    className="mr-2 p-2 border border-gray-300 rounded"
                  />
                  <button
                    onClick={() => updatetrainer(customer.id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Add Vehicle Trainer
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

export default DrivingSchoolInterface;
