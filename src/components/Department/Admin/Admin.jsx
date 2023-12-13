// src/components/Admin.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../../../client';
import './Admin.css';
import emailjs from '@emailjs/browser';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [user2, setUser2] = useState({
    Exam_status: '',
  });

  useEffect(() => {
    fetchLicencers();
  }, [users]);

  async function fetchLicencers() {
    try {
      const { data } = await supabase.from('Customer').select('*');
      setUsers(data);
    } catch (error) {
      console.error('Error fetching licencers:', error.message);
    }
  }

  function handleChange2(event) {
    setUser2((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function deleteCustomer(userId) {
    try {
      const { data, error } = await supabase.from('Customer').delete().eq('cus_id', userId);
      fetchLicencers();

      if (error) {
        console.error('Error deleting customer:', error.message);
      }

      if (data) {
        console.log('Customer deleted successfully:', data);
      }
    } catch (error) {
      console.error('Error deleting customer:', error.message);
    }
  }

  async function updateCustomer(userId) {
    try {
      const { data, error } = await supabase
        .from('Customer')
        .update({ Exam_status: user2.Exam_status })
        .eq('cus_id', userId);

      fetchLicencers();

      if (error) {
        console.error('Error updating customer:', error.message);
      }

      if (data) {
        console.log('Customer updated successfully:', data);
      }

      // Send email when "Accept" button is clicked
      sendEmail(user2.Email);
    } catch (error) {
      console.error('Error updating customer:', error.message);
    }
  }

  async function sendEmail(userEmail) {
    try {
      // Implement your email sending logic here
      // Example using emailjs:
      const emailres = await emailjs.send('service_phby018', 'template_9t4bp1o', {
        to_name: user2.Full_name,
        message: 'Your Account is Approved\nPlease click this link to continue: (http://localhost:5174/sign2)',
        from_name: 'E-License',
        reply_to: 'elicense.lk@gmail.com',
        user_email: userEmail,
      }, 'za5o3Ut1J3nLd3gOM');

      console.log('Email sent:', emailres);
    } catch (error) {
      console.error('Error sending email:', error.message);
    }
  }

  async function acceptUser(user) {
    try {
      const { data, error } = await supabase
        .from('Customer')
        .update({ approval_status: 'Approved' })
        .eq('cus_id', user.cus_id)
        .select();

      if (error) {
        alert('Error accepting the user');
        return;
      }

      console.log('User accepted successfully:', data);

      // Send email to the user
      sendEmail(user.Email);

      await fetchLicencers();
    } catch (error) {
      console.error('Error accepting user:', error.message);
    }
  }

  return (
    <div>
      <div className="sales-boxes">
        <div className="recent-sales box" id="licenserboard">
          <form onSubmit={(e) => { e.preventDefault(); updateCustomer(user2.Nic); }} className="liceform2">
            <input
              className="bg-blue-200 rounded-3xl"
              type="text"
              placeholder="Exam Status"
              name="Exam_status"
              onChange={handleChange2}
              value={user2.Exam_status}
            />
            <button type="submit" className="ml-8">
              Save Changes
            </button>
          </form>
          <div className="sales-details">
            <table className="licentable">
              <thead>
                <tr>
                  <th className="licenpoth"> Name</th>
                  <th className="licenpoth">Email </th>
                  <th className="licenpoth">Address </th>
                  <th className="licenpoth">Approval_status </th>
                  {/* Add other columns as needed */}
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.Nic}>
                    <td className="licenpotd">{user.Name}</td>
                    <td className="licenpotd">{user.Email}</td>
                    <td className="licenpotd">{user.Address}</td>

                    {/* Add other cells as needed */}
                    <td className="licenpotd">
                      <button onClick={() => deleteCustomer(user.cus_id)} className="licebtn1">
                        Reject
                      </button>
                      <button onClick={() => setUser2(user)} className="licebtn2">
                        Edit
                      </button>
                      <button onClick={() => acceptUser(user)} className="licebtn3">
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

export default Admin;
