import { useState, useEffect } from 'react';
import './index.css';
import { supabase } from '../../../../client';

const Selectdrivingform = () => {
  const [Nic, setNic] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [formError, setFormError] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [paymentOptions, setPaymentOptions] = useState([]);

  useEffect(() => {
    // Fetch payment options from the database
    const fetchPaymentOptions = async () => {
      try {
        const { data, error } = await supabase
          .from('PaymentOptions')
          .select('id, option_name'); // Replace 'option_name' with the actual column name in your PaymentOptions table

        if (error) {
          console.error(error);
          return;
        }

        setPaymentOptions(data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPaymentOptions();
  }, []); // Run the effect only once on component mount

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Nic || !Name || !Email || !paymentType) {
      setFormError("Please fill in all the required fields");
      return;
    }

    // Check the selected payment type and handle accordingly
    if (paymentType === "DONE_on") {
      // Handle online payment
    } else if (paymentType === "DONE_slp") {
      // Handle upload slip
    }

    try {
      // Insert new record
      const { data, error } = await supabase
        .from("Drivingschoolpayment")
        .insert([{ Nic, Name, Email, payment: paymentType }]);

      if (error) {
        console.error(error);
        setFormError("Error submitting the form");
        return;
      }

      setFormError(null);
      console.log("Form submitted successfully");
    } catch (error) {
      console.error(error);
      setFormError("Error submitting the form");
    }
  };

  return (
    <div>
      <center>
        <p className="font-bold text-6xl md:px-12 p-4 max-w-screen-2xl mx-auto mt-36 text-blue-900 ml-14 ">
          Register for the written exam
        </p>
      </center>

      <div class="formbold-main-wrapper">
        <div class="formbold-form-wrapper1">
          <img src="" />
          <form onSubmit={handleSubmit}>
            <div class="formbold-input-wrapp formbold-mb-3">
              <label for="firstname" class="formbold-form-label">
                {" "}
                Name{" "}
              </label>

              <div>
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  value={Name}
                  placeholder="Full name"
                  class="formbold-form-input"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div class="formbold-mb-3">
              <label for="age" class="formbold-form-label">
                {" "}
                NIC of the owner{" "}
              </label>
              <input
                type="text"
                name="Nic"
                id="Nic"
                value={Nic}
                placeholder="ex:25"
                class="formbold-form-input"
                onChange={(e) => setNic(e.target.value)}
                required
              />
            </div>

            <div class="formbold-mb-3">
              <label for="email" class="formbold-form-label">
                {" "}
                Email{" "}
              </label>
              <input
                type="email"
                name="Email"
                id="Email"
                value={Email}
                placeholder="example@email.com"
                class="formbold-form-input"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="formbold-mb-3">
              <label htmlFor="Payment type" className="formbold-form-label">
                Payment
              </label>
              <select
                className="formbold-form-input"
                name="Payment"
                id="Payment"
                onChange={(e) => setPaymentType(e.target.value)}
                required
              >
                <option value="">---select---</option>
                <option value="DONE_on">Online</option>
                <option value="DONE_slp">Upload slip</option>
              </select>
            </div>
            {paymentType === "DONE_slp" && (
        <div class="formbold-mb-3">
          <label for="slip" class="formbold-form-label">
            {" "}
            Slip{" "}
          </label>
          <input
            type="text"  // Change the type to file for slip upload
            name="slip"
            id="slip"
            onChange={(e) => setSlip(e.target.files[0])}
            required
          />
        </div>
      )}
            {paymentType === "DONE_on" && (
              <div class="container">
               
      <div class="container">

<form action="" className='payform'>

    <div class="row">

        <div class="col">

            <h3 class="title">billing address</h3>

            <div class="inputBox">
                <span>full name :</span>
                <input type="text" placeholder="john deo"/>
            </div>
            <div class="inputBox">
                <span>email :</span>
                <input type="email" placeholder="example@example.com"/>
            </div>
            <div class="inputBox">
                <span>address :</span>
                <input type="text" placeholder="room - street - locality"/>
            </div>
            <div class="inputBox">
                <span>city :</span>
                <input type="text" placeholder="Matara"/>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>state :</span>
                    <input type="text" placeholder="Sri Lanka"/>
                </div>
                <div class="inputBox">
                    <span>zip code :</span>
                    <input type="text" placeholder="123 456"/>
                </div>
            </div>

        </div>

        <div class="col">

            <h3 class="title">payment</h3>
            <div class="inputBox">
                    <span>cards accepted :</span>
                    <img src='C:/sers/admin/Videos/WEB/NEw-FINAL-NEW/src/assets/pway.png' alt=""/>
                </div>

            <div class="inputBox">
                <span>name on card :</span>
                <input type="text" placeholder="mr. john deo"/>
            </div>
            <div class="inputBox">
                <span>credit card number :</span>
                
                <input type="number" placeholder="1111-2222-3333-4444"/>
            </div>
            <div class="inputBox">
                <span>exp month :</span>
                <input type="text" placeholder="january"/>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>exp year :</span>
                    <input type="number" placeholder="2022"/>
                </div>
                <div class="inputBox">
                    <span>CVV :</span>
                    <input type="text" placeholder="1234"/>
                </div>
            </div>

        </div>

    </div>


</form>
</div>
<div class="formbold-checkbox-wrapper">
               
              </div>
              </div>
            )}

            {formError && <p className="error">{formError}</p>}

            <div class="formbold-checkbox-wrapper">
              <label for="supportCheckbox" class="formbold-checkbox-label">
                <div class="formbold-relative">
                  <input
                    type="checkbox"
                    id="supportCheckbox"
                    class="formbold-input-checkbox"
                  />
                  <div class="formbold-checkbox-inner">
                    <span class="formbold-opacity-0">
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        class="formbold-stroke-current"
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

            <button className="formbold-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Selectdrivingform;
