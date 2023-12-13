import { useState } from "react";
import { supabase } from "../../../../client";
import { useNavigate, Link } from "react-router-dom";

const SclLoginfrm = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from("driving_school")  // Corrected table name
        .select("*")
        .eq("Email", formData.email)
        .eq("password", formData.password);

      if (error) throw error;

      if (data && data.length > 0) {

        const loggedInUser = data[0];

        console.log('Login successful',loggedInUser);

	localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        navigate("/scl",{ state: { user: loggedInUser } });

      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      alert("Error logging in: " + error.message);
    }
  }

  return (
    <section className="h-screen">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>

          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form onSubmit={handleLogin}>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 dark:placeholder:text-neutral-700 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput2"
                  name="email"
                  placeholder="Email address"
                  required
                  onChange={handleChange}
                />
                <label
                  htmlFor="exampleFormControlInput2"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-800 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-800 dark:peer-focus:text-primary"
                >
                  Email address
                </label>
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="password"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 dark:placeholder:text-neutral-700 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput22"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                />
                <label
                  htmlFor="exampleFormControlInput22"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-800 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-800 dark:peer-focus:text-primary"
                >
                  Password
                </label>
              </div>

              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none"
                    type="checkbox"
                    value=""
                    id="exampleCheck2"
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>

                <Link className="mr-8" to="/fogpsw">
                  Forgot password?
                </Link>
              </div>

              <div className="text-center lg:text-left">
                <div className="box-border">
                  <button
                    className="bg-blue-600 py-2 px-8 transition-all duration-300 rounded-2xl right-8 hover:text-gray-200 hover:bg-blue-900"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SclLoginfrm;