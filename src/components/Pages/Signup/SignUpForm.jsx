import React, { useState } from "react";
import * as Components from './signup';
import Head from "../../Navbar1/Head";
import { supabase } from "../../../client";
import { useNavigate } from "react-router-dom";

function Sign2({ setToken }) {
  let navigate = useNavigate();

  const [signIn, toggle] = useState(true);

  const [formData, setFormData] = useState({
    mail: "",
    paswd: "",
    mails: "",
    fnames: "",
    paswds: "",
    rePaswd: "", // Added re-enter password field
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleRegi = async (e) => {
    e.preventDefault();

    // Validate that password and re-enter password match
    if (formData.paswds !== formData.rePaswd) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.mails,
        password: formData.paswds,
      });

      if (error) throw error;

      console.log(data); // Log the response data
      navigate("/sign2"); // Correct navigation path
    } catch (error) {
      alert(error.message);
    }
  };

  const handlelog = async (e) => {
    e.preventDefault();

    try {
      const { user, session, error } = await supabase.auth.signInWithPassword({
        email: formData.mail,
        password: formData.paswd,
      });

      if (error) throw error;

      console.log(user); // Log the response user data
      navigate('/cus'); // Correct navigation path
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Head />
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form onSubmit={handleRegi}>
            <Components.Title>Create Account</Components.Title>

            <Components.Input type='email' name="mails" placeholder='Email' onChange={handleInputChange} />
            <Components.Input type='password' name="paswds" placeholder='Password' onChange={handleInputChange} />
            <Components.Input type='password' name="rePaswd" placeholder='Re-enter Password' onChange={handleInputChange} />

            <Components.Button>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form onSubmit={handlelog}>
            <Components.Title>Sign in</Components.Title>
            <Components.Input type='email' name="mail" placeholder='Email' onChange={handleInputChange} />
            <Components.Input type='password' name="paswd" placeholder='Password' onChange={handleInputChange} />
            <Components.Anchor href='/restpsw'>Forgot your password?</Components.Anchor>
            <Components.Button>Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>

            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us, please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start the journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>

          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
}

export default Sign2;
