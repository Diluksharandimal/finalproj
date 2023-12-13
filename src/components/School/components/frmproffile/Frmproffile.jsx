import React, { useState } from 'react';
import './Frmpff.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../../variants';
import Navbar3 from '../Navbar3/Navbar3';
import { supabase } from '../../../../client';

const Frmproffile = () => {
  const [formError, setFormError] = useState('');

  const [Ds_name, setDs_name] = useState('');
  const [Email, setEmail] = useState('');
  const [Address, setAddress] = useState('');
  const [Ds_phone_no, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [division, setDivision] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Ds_name || !Address || !Email || !Ds_phone_no || !amount || !division || !password || !file) {
      setFormError('Please Fill All Fields and Upload the Approval File');
      return;
    }

    try {
      // Upload the file to Supabase Storage
      const { data: fileData, error: fileError } = await supabase.storage
        .from('Driving_schools') // replace 'Driving_schools' with your actual storage bucket
        .upload(`public/${file.name}`, file);

      if (fileError) {
        setFormError('Error uploading the file');
        return;
      }

      // Continue with inserting other form data into the database
      const { data, error } = await supabase.from('driving_school')
      .insert([
        {
          Ds_name,
          Address,
          Email,
          Ds_phone_no,
          amount,
          division,
          password,
         
        },
      ]);

      if (error) {
        console.error(error);
        setFormError('An error occurred while submitting the form. Please try again.');
        return;
      }

      if (data) {
        console.log(data);
        setFormError(null);

        // Reset form fields
        setDs_name('');
        setAddress('');
        setPhone('');
        setEmail('');
        setAmount('');
        setDivision('');
        setPassword('');
        setFile(null);
      }
    } catch (error) {
      console.error('Error inserting data:', error.message);
      setFormError('An error occurred while submitting the form. Please try again.');
    }
  };


  return (
    <div>
      <Navbar3 />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <center>
          <p className="font-bold text-7xl md:px-12 p-4 max-w-screen-2xl mx-auto mt-36 text-blue-900 ml-14">
            Register as a driving school and make your profile
          </p>
        </center>
        <center>
          <p className='font-bold text-4xl mt-10 text-blue-600'>
            After you fill this form, your profile will be created, and after that
            you can continue your work as a licensed <br />
            <span className='text-blue-700'>driving school.</span>
          </p>
        </center>
      </motion.div>

      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form method="POST" onSubmit={handleSubmit} data-netlify="true" encType="multipart/form-data">
            <div className="formbold-input-wrapper formbold-mb-3">
              <label htmlFor="Ds_name" className="formbold-form-label">
                School name
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="formbold-form-input"
                  value={Ds_name}
                  onChange={(e) => setDs_name(e.target.value)}
                />
              </div>
            </div>

            <div className="formbold-mb-3">
              <label htmlFor="Email" className="formbold-form-label">
                Email
              </label>
              <input
                type="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                id="Email"
                placeholder="example@email.com"
                className="formbold-form-input"
              />
            </div>

            <label htmlFor="Ds_name" className="formbold-form-label">
              Password 
            </label>
            <div>
              <input
                type="Password"
                placeholder="Password"
                className="formbold-form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="formbold-mb-3">
              <label className="formbold-form-label">Division</label>
              <select
                className="formbold-form-input"
                value={division}
                onChange={(e) => setDivision(e.target.value)}
              >
                <option value="Matara">Matara</option>
                <option value="Galle">Galle</option>
                <option value="Colombo">Colombo</option>
              </select>
            </div>

            <div className="formbold-mb-3">
              <label htmlFor="Address" className="formbold-form-label">
                Address
              </label>
              <input
                type="text"
                id="Address"
                placeholder="Street address"
                className="formbold-form-input formbold-mb-3"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <label htmlFor="Amount" className="formbold-form-label">
                Amount
              </label>
              <input
                type="text"
                id="Amount"
                placeholder="Amount"
                className="formbold-form-input formbold-mb-3"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="formbold-mb-3 formbold-input-wrapper">
              <label htmlFor="Contact_no" className="formbold-form-label">
                Contact-No
              </label>
              <div>
                <input
                  type="text"
                  id="Contact_no"
                  placeholder="Phone number"
                  className="formbold-form-input"
                  value={Ds_phone_no}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="formbold-mb-3">
              <label htmlFor="upload" className="formbold-form-label">
                Upload the approval of the MTD
              </label>
              <input
                type="file"
                id="upload"
                className="formbold-form-input formbold-form-file"
                onChange={handleFileChange}
    
                required
              />
            </div>

            <div className="formbold-checkbox-wrapper">
              <label htmlFor="supportCheckbox" className="formbold-checkbox-label">
                <div className="formbold-relative">
                  <input
                    type="checkbox"
                    id="supportCheckbox"
                    className="formbold-input-checkbox"
                  />
                  <div className="formbold-checkbox-inner">
                    <span className="formbold-opacity-0">
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        className="formbold-stroke-current"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="" fill="white" />
                      </svg>
                    </span>
                  </div>
                </div>
                I agree to the defined
                <a href="#"> terms, conditions, and policies</a>
              </label>
            </div>

            <button type="submit" className="formbold-btn">
              Submit
            </button>

            {formError && <p className="error">{formError}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Frmproffile;
