import React, { useState, useEffect } from 'react';
import { supabase } from '../../../../client';
import Navbar2 from "../Applipge/Navbar2";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com'; // Import the emailjs library

const Exregister = () => {
  const [users, setUsers] = useState([]);
  const [user2, setUser2] = useState({
    NIC: '', // Added missing NIC field
    Exam_status: ''
  });

  useEffect(() => {
    fetchLiceners();
  }, []); // Removed [users] from dependencies

  async function fetchLiceners() {
    const { data } = await supabase.from('Drivingschoolpayment').select('*').eq('send_status',0);
    setUsers(data);
  }

  function handleChange2(event) {
    setUser2((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      };
    });
  }

  async function deleteCustomer(userId) {
    const { data, error } = await supabase.from('Drivingschoolpayment').delete().eq('NIC', userId);
    fetchLiceners();

    if (error) {
      console.error(error);
    }

    if (data) {
      console.log(data);
    }
  }

  async function updateCustomer(userId) {
    const { data, error } = await supabase
      .from('Drivingschoolpayment')
      .update({ Exam_status: user2.Exam_status })
      .eq('NIC', userId);

    fetchLiceners();

    if (error) {
      console.error(error);
    }

    if (data) {
      console.log(data);
    }

    // Send email when "Accept" button is clicked
    sendMagicLink(user2.NIC); // Fixed to use NIC instead of Email
  }

  async function sendMagicLink(userId) {
    try {
      const { data: customer, error } = await supabase
        .from('Drivingschoolpayment')
        .select('Email')
        .eq('NIC', userId);

      if (error) {
        console.error('Error fetching customer data:', error.message);
        return;
      }

      const userEmail = customer[0].Email; // Use [0] to access the first element

      // Call the Supabase Auth API to send a magic link
      const { data, error: authError } = await supabase.auth.signIn({ email: userEmail });

      if (authError) {
        console.error('Error sending magic link:', authError.message);
      } else {
        console.log('Magic link sent successfully');
      }
    } catch (error) {
      console.error('Error sending magic link:', error.message);
    }
  }

  async function acceptUser(user) {
    const { data, error } = await supabase
      .from('Drivingschoolpayment')
      .update({ send_status: 1 })
      .eq('id', user.id)
      .select();

    if (error) {
      alert("Error Accepting the user");
      return;
    }

    console.log(data);

    // Assuming the emailjs setup is already done
    const emailres = await emailjs.send("service_phby018","template_9t4bp1o",{
      to_name: user.Full_name,
      message: "Please click this link to join for online exam: (http://localhost:5174/exm)",
      from_name: "E-License",
      reply_to: "elicense.lk@gmail.com",
      user_email: user.Email,
      },'za5o3Ut1J3nLd3gOM');

  console.log(emailres);

    await fetchLiceners();
  }

  return (
    <div>
      <Navbar2 />
      <motion.div
        // ... your motion properties
      >
        <center>
          <p className="font-bold text-6xl md:px-12 p-4 max-w-screen-2xl mx-auto mt-36 text-blue-900 ml-14 ">You can See the customers who registered for the exam</p>
        </center>
      </motion.div>

      <div>
        <div className="sales-boxes">
          <div className="recent-sales box" id='licenserboard'>
            <form onSubmit={(e) => { e.preventDefault(); updateCustomer(user2.NIC); }} className='liceform2'>
              {/* ... your form inputs */}
            </form>
            <div className="sales-details">
              <table className='licentable'>
                <thead>
                  <tr>
                    <th className='licenpoth'>NIC</th>
                    <th className='licenpoth'> Name</th>
                    <th className='licenpoth'>Email</th>
                    <th className='licenpoth'> Payment</th>
                    <th className='licenpoth'>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr key={user.NIC}>
                      <td className='licenpotd'>{user.NIC}</td>
                      <td className='licenpotd'>{user.Name}</td>
                      <td className='licenpotd'>{user.Email}</td>
                      <td className='licenpotd'>{user.payment}</td>
                      <td className='licenpotd'>
                        <button onClick={() => acceptUser(user)} className='licebtn3'>
                          Send schedules
                        </button>
                        <button onClick={() => deleteCustomer(user.NIC)} className='licebtn1'>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exregister;
