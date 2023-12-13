import React, { useEffect, useState } from 'react';
import { supabase } from '../../../client';
import './Status.css';
import emailjs from '@emailjs/browser';

const Status = () => {
  const [users, setUsers] = useState([]);
  const [user2, setUser2] = useState({
    Exam_status: '',
    L_permite: '',
    vehi_trainer: '',
  });

  useEffect(() => {
    fetchLiceners();
  }, [users]);

  async function fetchLiceners() {
    const { data } = await supabase.from('Customer').select('*');
    setUsers(data);
  }

  function handleChange2(event) {
    setUser2((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  async function updateCustomer(userId) {
    const { data, error } = await supabase
      .from('Customer')
      .update({
        Exam_status: user2.Exam_status,
        L_permite: user2.L_permite,
        vehi_trainer: user2.vehi_trainer,
      })
      .eq('NIC', userId);

    fetchLiceners();

    if (error) {
      console.error(error);
    }

    if (data) {
      console.log(data);
    }

    // Send email when "Accept" button is clicked
    const emailres = await emailjs.send('service_phby018', 'template_9t4bp1o', {
      to_name: user2.Full_name,
      message: 'Your Account is Approved',
      from_name: 'E-License',
      reply_to: 'elicense.lk@gmail.com',
      user_email: user2.Email,
    }, 'za5o3Ut1J3nLd3gOM');

    console.log(emailres);
  }

  async function acceptUser(user) {
    const { data, error } = await supabase
      .from('Customer')
      .update({ approval_status: 1 })
      .eq('cid', user.cid)
      .select();

    if (error) {
      alert('Error Accepting the user');
      return;
    }

    console.log(data);
    await fetchLiceners();
  }

  return (
    <div>
      <div className="sales-boxes">
        <div className="recent-sales box" id="licenserboard">
          <form onSubmit={(e) => { e.preventDefault(); updateCustomer(user2.NIC); }} className="liceform2">
            <input
              className="bg-blue-200 rounded-3xl"
              type="text"
              placeholder="Exam Status"
              name="Exam_status"
              onChange={handleChange2}
              value={user2.Exam_status}
            />
            <input
              className="bg-blue-200 rounded-3xl"
              type="text"
              placeholder="L-permite"
              name="L_permite"
              onChange={handleChange2}
              value={user2.L_permite}
            />
            <input
              className="bg-blue-200 rounded-3xl"
              type="text"
              placeholder="Vehicle Trainer name"
              name="vehi_trainer"
              onChange={handleChange2}
              value={user2.vehi_trainer}
            />
            <button type="submit" className="ml-8">
              Save Changes
            </button>
          </form>
          <div className="sales-details">
            <table className="licentable">
              <thead>
                <tr>
                  <th className="licenpoth">First Name</th>
                  <th className="licenpoth">Exam status</th>
                  <th className="licenpoth">L-permite</th>
                  <th className="licenpoth">Vehicle Trainer name</th>
                  <th className="licenpoth">Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.NIC}>
                    <td className="licenpotd">{user.Full_name}</td>
                    <td className="licenpotd">{user.Exam_status}</td>
                    <td className="licenpotd">{user.L_permite}</td>
                    <td className="licenpotd">{user.vehi_trainer}</td>
                    <td className="licenpotd">
                      <button onClick={() => acceptUser(user)} className="admineditbtn">
                        Accept
                      </button>
                      <button onClick={() => setUser2(user)} className="admineditbtn">
                        Edit
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

export default Status;
