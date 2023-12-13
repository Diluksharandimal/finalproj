import React, { useEffect, useState } from 'react';
import { supabase } from '../../../client';
import './Admin.css';
import emailjs from '@emailjs/browser';

const Admin2 = () => {
  const [drivingSchools, setDrivingSchools] = useState([]);
  const [user2, setUser2] = useState({
    Exam_status: ''
  });

  useEffect(() => {
    fetchDrivingSchools();
  }, [drivingSchools]);

  async function fetchDrivingSchools() {
    try {
      const { data, error } = await supabase
        .from('driving_school')
        .select('*')
        .eq('approval_status', 0);

      if (error) {
        console.error('Error fetching driving schools:', error.message);
        return;
      }

      setDrivingSchools(data);
    } catch (error) {
      console.error('An unexpected error occurred:', error.message);
    }
  }

  async function deleteCustomer(userId) {
    try {
      const { data, error } = await supabase
        .from('driving_school')
        .delete()
        .eq('Ds_id', userId);

      fetchDrivingSchools();

      if (error) {
        console.error(error);
      }

      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error.message);
    }
  }

  async function updateCustomer(userId) {
    try {
      const { data, error } = await supabase
        .from('driving_school')
        .update({ Exam_status: user2.Exam_status })
        .eq('NIC', userId);

      fetchDrivingSchools();

      if (error) {
        console.error(error);
      }

      if (data) {
        console.log(data);
      }

      // Send email when "Accept" button is clicked
      sendEmail(user2.Email); // Replace with the actual field that contains the email in your database
    } catch (error) {
      console.error('An unexpected error occurred:', error.message);
    }
  }

  // Function to send email
  async function sendMagicLink(userId) {
    try {
      // Fetch the user's email from the driving_school table
      const { data: customer, error } = await supabase
        .from('driving_school')
        .select('Email')
        .eq('NIC', userId);

      if (error) {
        console.error('Error fetching customer data:', error.message);
        return;
      }

      const userEmail = customer.Email;

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
    try {
      const { data, error } = await supabase
        .from('driving_school')
        .update({ approval_status: 1 })
        .eq('Ds_id', user.Ds_id)
        .select();

      if (error) {
        alert('Error Accepting the user');
        return;
      }

      console.log(data);

      const emailres = await emailjs.send('service_phby018', 'template_9t4bp1o', {
        to_name: user.Name,
        message: 'Your Account is Approved\nPlease click this link to continue: (http://localhost:5174/sign2)',
        from_name: 'E-License',
        reply_to: 'elicense.lk@gmail.com',
        user_email: user.Email,
      }, 'za5o3Ut1J3nLd3gOM');

      console.log(emailres);

      await fetchDrivingSchools();
    } catch (error) {
      console.error('An unexpected error occurred:', error.message);
    }
  }

  return (
    <div>
      <div className="sales-boxes">
        <div className="recent-sales box" id='licenserboard'>
          <form onSubmit={(e) => { e.preventDefault(); updateCustomer(user2.NIC); }} className='liceform2'>
            {/* Your form elements go here */}
          </form>
          <div className="sales-details">
            <table className='licentable'>
              <thead>
                <tr>
                  <th className='licenpoth'>Full Name</th>
                  <th className='licenpoth'>Address</th>
                  <th className='licenpoth'>Email</th>
                  <th className='licenpoth'>Amount</th>
                  <th className='licenpoth'>Approval</th>
                  <th className='licenpoth'>Actions</th>
                </tr>
              </thead>

              <tbody>
                {drivingSchools.map((school) => (
                  <tr key={school.DS_id}>
                    <td className='licenpotd'>{school.Ds_name}</td>
                    <td className='licenpotd'>{school.Address}</td>
                    <td className='licenpotd'>{school.Email}</td>
                    <td className='licenpotd'>{school.amount}</td>
                    <td className='licenpotd'>
                      <a href={school.Approval} target="_blank" rel="noopener noreferrer">
                        {school.Fnic}
                      </a>
                    </td>
                    <td className='licenpotd'>
                      <button onClick={() => deleteCustomer(school.DS_id)} className='licebtn1'>
                        Reject
                      </button>
                      <button onClick={() => acceptUser(school)} className='licebtn3'>
                        Accept
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
  );
};

export default Admin2;
