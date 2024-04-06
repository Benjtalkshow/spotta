import React, { useState } from "react";
import { appleLogo, facebook, google, tailwindEffect } from "../data/constants";
import { Button, Input } from "./index";
import { Link } from "react-router-dom";
import { LockKeyhole } from "lucide-react";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center h-screen px-3">
      <div className="sm:bg-customBg rounded-lg sm:shadow-md sm:p-8  w-full sm:max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        {/* form */}
        <form onSubmit={handleSubmit}>
          {/* inputs */}
          <div className="w-full flex items-center gap-5 mb-3 justify-between">
            <Input
              type="text"
              id="firstname"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              type="text"
              id="lastname"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="space-y-3 mb-5">
            <Input
              type="email"
              id="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              icon={LockKeyhole}
            />
            <Input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              icon={LockKeyhole}
            />
          </div>
          {/* submit button */}
          <button
            type="submit"
            className={`${tailwindEffect} bg-customBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full`}
          >
            SIGN UP
          </button>
        </form>
        {/* demarcation */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex-1 border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">Or</span>
          <div className="flex-1 border-t border-gray-400"></div>
        </div>
        {/* alternative login */}
        <div className="mt-4 space-y-2 w-full">
          <Button alt="Google" label="Sign Up with Google" icon={google} />
          <Button alt="Facebook" label="Sign Up with Facebook" icon={facebook} />
          <Button alt="Apple" label="Sign Up with Apple" icon={appleLogo} />
        </div>
        {/* links */}
        <div className="w-full text-center mt-5 space-y-3 text-sm">
          <p className="whitespace-nowrap">
            Already have an account?{" "}
            <Link
              to="/login"
              className={`${tailwindEffect} font-semibold underline underline-offset-4 text-customBlue hover:text-blue-700`}
            >
              Login In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
