import React, { useState } from "react";
import { supabase } from "../../../client";

const Resetpsw = ({setToken}) => {
  const [formData, setFormData] = useState({
    oldemail: "",
    newpassword: "",
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.updateUser({
        email: formData.oldemail,
        password: formData.newpassword,
      });

      if (error) throw error;
      console.log;
      setToken(data);

    } catch (error) {
      alert(error);
    }
  }

  const remeber = [{ path: "/LoginD" }];

  return (
    <div>
      <main
        id="content"
        role="main"
        class="w-full  max-w-xl mx-auto mt-40 max-h-96"
      >
        <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
          <div class="p-4 sm:p-7">
            <div class="text-center">
              <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
                Forgot password?
              </h1>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Remember your password?
                <a
                  class="text-blue-600 decoration-2 hover:underline font-medium"
                  href="/LoginD"
                >
                  Login here
                </a>
              </p>
            </div>

            <div class="mt-5">
              <form onSubmit={handleSubmit}>
                <div class="grid gap-y-4">
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-bold  mb-2 dark:text-white mt-6 ml-14"
                    >
                      Email address
                    </label>
                    <div class="relative">
                      <input
                        type="email"
                        id="email"
                        name="oldemail"
                        onChange={handleChange}
                        class="py-3 px-4 block border-2 border-gray-200 rounded-md mt-5 text-sm w-96 ml-14 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                        required
                        aria-describedby="email-error"
                      />
                    </div>
                    <p
                      class="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-bold  mb-2 dark:text-white mt-6 ml-14"
                    >
                      New Password
                    </label>
                    <div class="relative">
                      <input
                        type="password"
                        id="email"
                        name="newpassword"
                        onChange={handleChange}
                        class="py-3 px-4 block border-2 border-gray-200 rounded-md mt-5 text-sm  focus:border-blue-500 focus:ring-blue-500 shadow-sm w-96 ml-14"
                        required
                        aria-describedby="email-error"
                      />
                    </div>
                    <p
                      class="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>

                  <button
                    type="submit"
                    class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border w-96 ml-14 border-transparent mt-10 font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
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

export default Resetpsw;
