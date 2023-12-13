import React, { useState } from "react";
import { supabase } from "../../../client";

const Fogpsw = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
   
let { data, error } = await supabase.auth.resetPasswordForEmail(email)

      if (error) {
        setError(error.message);
      } else {
        alert("Reset password email sent successfully");
      }
    } catch (error) {
      console.error("Error sending reset password email:", error);
      setError("Error sending reset password email. Please try again later.");
    }
  };

  return (
    <div>
      <main
        id="content"
        role="main"
        className="w-full  max-w-xl mx-auto mt-40 max-h-96"
      >
        <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Forgot password?
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Remember your password?
                <a
                  className="text-blue-600 decoration-2 hover:underline font-medium"
                  href="/LoginD"
                >
                  Login here
                </a>
              </p>
            </div>

            <div className="mt-5">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold  mb-2 dark:text-white mt-6 ml-14 w-96 "
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="py-3 px-4 block border-2 border-gray-200 rounded-md mt-5 text-sm  w-96 ml-14 focus:border-blue-500 focus:ring-blue-500 shadow-sm "
                        required
                        aria-describedby="email-error"
                      />
                    </div>
                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                      {error}
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border ml-14 border-transparent mt-10  font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  >
                    Reset password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Fogpsw;
