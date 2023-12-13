import React, { useEffect, useState } from 'react';
import { supabase } from '../../../../client';
import { useParams } from 'react-router';

const Profcus = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const { userId } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (userId) {
          const { data, error } = await supabase
            .from('Customer')
            .select()
            .eq('cus_id', userId);

          if (error) {
            console.error('Error fetching user data:', error.message);
          } else if (data && data.length > 0) {
            setCurrentUser(data[0]);
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchUserData();
  }, [userId]);

  useEffect(() => {
    fetchStoredUser();
  }, []);

  function fetchStoredUser() {
    const storedUser = localStorage.getItem('loggedInUser');
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    console.log('Stored User:', parsedUser);
    setUser(parsedUser);
  }

  const handleEditSubmit = async () => {
    try {
      // Update the driving_school table
      const { data: updatedUserData, error: updateError } = await supabase
        .from('Customer')
        .update({
          Name: user.Name,
          Email: user.Email,
          Address: user.Address,
          phone_no: user.phone_no,
          approval_status: user.approval_status,
          vehicle_trainer: user.vehicle_trainer,
          // Add more fields as needed
        })
        .eq('DS_id', userId);
  
      if (updateError) {
        console.error('Error updating user data:', updateError.message);
      } else {
        setCurrentUser(updatedUserData[0]);
        setEditMode(true); // Exit edit mode after successful update
      }
    } catch (error) {
      console.error('Error updating user data:', error.message);
    }
  };

  return (
    <>
      <div>
        <h2 className='mx-auto py-10 mt-20 md:text-7xl text-7xl font-bold text-[#010851] mb-6 leading-relaxed'>
          <center>My Profile</center>
        </h2>

        <div className="container mx-auto my-60 bg-blue-200">
          <div className="bg-white relative rounded-lg mx-auto w-w-120 shadow-xl" id='prof'>
            {/* Edit button to toggle edit mode */}
            {!editMode && (
              <button onClick={() => setEditMode(true)} className="absolute top-5 right-5 bg-blue-500 text-white px-3 py-1 rounded-md">
                Edit Profile
              </button>
            )}

            <div className="flex justify-center">
              <img
                src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
              />
            </div>

            <div className="mt-16">
              {/* Display user profile in edit mode */}
              {editMode ? (
                <form onSubmit={handleEditSubmit}>
                  {/* Add input fields for editing user profile */}
                  <input
                    type="text"
                    value={user?.Name || ''}
                    onChange={(e) => setUser({ ...user, Name: e.target.value })}
                  />
                  {/* Add more input fields for other profile properties */}
                  <button type="submit">Save Changes</button>
                </form>
              ) : (
                <>
                  <h1 className="font-bold text-center text-3xl text-gray-900">{user?.Name}</h1>
                  <div className="my-5 px-6">
                    <a
                      href="#"
                      className="text-gray-200 block rounded-lg mt-5  font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white cursor-default"
                    >
                       Email: <span className="font-bold">{user?.Email}</span>
                    </a>
                    <a
                      href="#"
                      className="text-gray-200 block rounded-lg mt-5  font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white cursor-default"
                    >
                       Address: <span className="font-bold">{user?.Address}</span>
                    </a>
                    <a
                      href="#"
                      className="text-gray-200 block rounded-lg mt-5  font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white cursor-default"
                    >
                      Contact number: <span className="font-bold">{user?.phone_no}</span>
                    </a>
                    <a
                      href="#"
                      className="text-gray-200 block rounded-lg mt-5  font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white cursor-default"
                    >
                      Account status: <span className="font-bold">{user?.approval_status}</span>
                    </a>
                    <a
                      href="#"
                      className="text-gray-200 block rounded-lg mt-5  font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white cursor-default"
                    >
                      Vehicle Trainer: <span className="font-bold">{user?.vehicle_trainer}</span>
                    </a>
                  </div>
                </>
              )}
              <div className="w-full">
                <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                  {/* Your recent activities content here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profcus;
