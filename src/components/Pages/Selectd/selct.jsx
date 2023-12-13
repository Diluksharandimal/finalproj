import React, { useEffect, useState } from 'react';
import { supabase } from '../../../client';
import './select.css';

const From2 = () => {
  const [driveSchoolData, setDriveSchoolData] = useState([]);
  const [divisionData, setDivisionData] = useState([]);
  const [error, setError] = useState(null);
  const [Nic, setNic] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [Gender, setGender] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [Date_of_birth, setDateOfBirth] = useState('');
  const [Name, setFullName] = useState('');
  const [password, setPswd] = useState('');
  const [selectedDrivingSchool, setSelectedDrivingSchool] = useState('');
  const [formError, setFormError] = useState('');
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: driveSchoolData, error: driveSchoolError } = await supabase
          .from('driving_school')
          .select('Ds_id, Ds_name');

        if (driveSchoolError) {
          setError(driveSchoolError.message);
          return;
        }

        setDriveSchoolData(driveSchoolData);

        const { data: divisionData, error: divisionError } = await supabase
          .from('Division')
          .select('d_id, D_Name');

        if (divisionError) {
          setError(divisionError.message);
          return;
        }

        setDivisionData(divisionData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Nic || !Name || !Date_of_birth || !phone_no || !Email || !Gender || !Address || !selectedDrivingSchool || !password) {
      setFormError('Please fill in all the fields correctly');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('Customer')
        .insert([{ Name, Date_of_birth, Nic, phone_no, Email, Gender, Address, Ds_id: selectedDrivingSchool, password }]);

      if (error) {
        console.log(error);
        setFormError('An error occurred while submitting the form. Please try again.');
        return;
      }

      if (data) {
        console.log(data);
        setFormError(null);

        // Reset the form after successful submission
        setDateOfBirth('');
        setFullName('');
        setNic('');
        setPhone_no('');
        setEmail('');
        setGender('');
        setAddress('');
        setPswd('');

        // Fetch and display customers for the selected driving school
        fetchCustomersByDrivingSchool(selectedDrivingSchool);
      }
    } catch (error) {
      console.error('Error inserting data:', error.message);
      setFormError('An error occurred while submitting the form. Please try again.');
    }
  };

  const fetchCustomersByDrivingSchool = async (drivingSchool) => {
    try {
      const { data, error } = await supabase
        .from('Customer')
        .select()
        .eq('Ds_id', drivingSchool);

      if (error) {
        console.error('Error fetching customer data:', error.message);
        return;
      }

      setCustomerData(data); // Update customer data state
    } catch (error) {
      console.error('Error fetching customer data:', error.message);
    }
  };

  const handleReset = () => {
    setDateOfBirth('');
    setFullName('');
    setNic('');
    setPhone_no('');
    setEmail('');
    setGender('');
    setAddress('');
    setPswd('');
    setSelectedDrivingSchool('');
    setFormError('');
  };

  return (
    <div className="container mx-auto my-10 p-8 bg-white rounded-md shadow-md">
      <form
        className="danuregiform"
        action="POST"
        data-netlify="true"
        id="myForm"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <h2 className="danuregi text-2xl mb-6 font-bold">Registration Form</h2>

        <ul className="list-disc ml-4 mb-4">
          {customerData.map((customer) => (
            <li key={customer.id}>{customer.Name}</li>
          ))}
        </ul>

        <h2 className="danuregiinput text-xl mb-4">Customers for <span className='cuscusSchool'>{selectedDrivingSchool && driveSchoolData.find(drive => drive.Ds_id === selectedDrivingSchool)?.Ds_name}</span></h2>

        <input
          id="name"
          className="danuregiinput mb-4 p-2 border border-gray-300 rounded w-full"
          type="text"
          placeholder="Name"
          value={Name}
          onChange={(e) => setFullName(e.target.value)}
        />

        <div className="formbold-mb-3">
          <label htmlFor="Nic" className="formbold-form-label">
            Nic
          </label>
          <input
            type="text"
            name="Nic"
            id="Nic"
            placeholder="ex:200010402993/1976525485464v"
            className="formbold-form-input"
            value={Nic}
            onChange={(e) => setNic(e.target.value)}
            required
          />
        </div>

        <div className="formbold-mb-3">
          <label htmlFor="Email" className="formbold-form-label">
            Email
          </label>
          <input
            type="email"
            name="Email"
            id="Email"
            placeholder="example@email.com"
            className="formbold-form-input"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="formbold-mb-3">
          <label htmlFor="Password" className="formbold-form-label">
            Password
          </label>
          <input
            type="password"
            name="Password"
            id="Password"
            placeholder=""
            className="formbold-form-input"
            value={password}
            onChange={(e) => setPswd(e.target.value)}
            required
          />
        </div>

        <div className="formbold-mb-3">
          <label htmlFor="Phone_no" className="formbold-form-label">
            Phone_no
          </label>
          <input
            type="text"
            name="Phone_no"
            id="Phone_no"
            placeholder="0711373761"
            className="formbold-form-input"
            value={phone_no}
            onChange={(e) => setPhone_no(e.target.value)}
            required
          />
        </div>

        <div className="formbold-mb-3">
          <label htmlFor="Address" className="formbold-form-label">
            Address
          </label>
          <input
            type="text"
            name="Address"
            id="Address"
            placeholder="ex:No:20/2 galle, street"
            className="formbold-form-input"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <label htmlFor="Password" className="formbold-form-label">
            Date Of Birth
          </label>
        <input
          className="danuregiinput mb-4 p-2 border border-gray-300 rounded w-full"
          type="date"
          value={Date_of_birth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />

        <div className="formbold-mb-3">
          <label className="formbold-form-label">Gender</label>
          <select
            className="formbold-form-input"
            name="Gender"
            id="Gender"
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">-----select-----</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="danuregiinput formbold-form-input">
          <div className="custom_select">
            <select id="division" name="division" required>
              <option value="">--Select Your Division--</option>
              {divisionData.map((division) => (
                <option key={division.d_id} value={division.D_Name}>
                  {division.D_Name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="danuregiinput formbold-form-input mt-5 mb-5">
          <div className="custom_select">
            {error && <p className="text-red-500">Error fetching data from Supabase: {error}</p>}
            <select
              id="driveschool"
              name="driveschool"
              required
              onChange={(e) => setSelectedDrivingSchool(e.target.value)}
            >
              <option value="">--Select Your Driving School--</option>
              {driveSchoolData.map((drive) => (
                <option key={drive.Ds_id} value={drive.Ds_id}>
                  {drive.Ds_id} - {drive.Ds_name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="r2inputfield">
          <button type="submit" value="Register" className="r2btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>

        {formError && <p className="error text-red-500">{formError}</p>}
      </form>
    </div>
  );
};

export default From2;
