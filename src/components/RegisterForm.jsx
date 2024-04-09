import React, { useContext, useEffect, useState } from "react";
import { appleLogo, facebook, google, tailwindEffect } from "../data/constants";
import { Button, Input, LittleLoader } from "./index";
import { Link } from "react-router-dom";
import { LockKeyhole } from "lucide-react";
import { FirebaseAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const RegisterForm = () => {
  const { registerWithEmailAndPassword, loading } =
    useContext(FirebaseAuthContext);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setDisable(
      !firstName.trim() || !lastName.trim() || !email.trim() || !password.trim()
    );
  }, [firstName, lastName, email, password]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate firstName, lastName, email, and password
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      return alert("Empty fields");
    }
    // Validate email format
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
      setTimeout(() => {
        setEmailError(false);
      }, 2000);
      return;
    }
    // Validate password requirements
    if (password.length < 8) {
      setPasswordError(true);
      setTimeout(() => {
        setPasswordError(false);
      }, 2000);
      return;
    }
    // Check if password matches confirmPassword
    if (password !== confirmPassword) {
      setPasswordError(true);
      setTimeout(() => {
        setPasswordError(false);
      }, 1000);
      return;
    }
    try {
      await registerWithEmailAndPassword(
        email,
        password,
        `${firstName} ${lastName}`
      );
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen px-3">
      <div className="sm:bg-customBg rounded-lg sm:shadow-md sm:p-8  w-full sm:max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        {/* form */}
        <form onSubmit={handleFormSubmit}>
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
              error={emailError ? "Check if email is valid" : ""}
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
              error={
                passwordError
                  ? "Password must be at least 8 characters long."
                  : ""
              }
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
              error={passwordError ? "Passwords do not match." : ""}
            />
          </div>
          {/* submit button */}
          <button
            type="submit"
            className={`flex justify-center items-center  ${tailwindEffect} ${
              isLoading || disable
                ? "bg-gray-300"
                : "bg-customBlue hover:bg-blue-700"
            } text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full`}
            disabled={disable || isLoading ? true : false}
          >
            {isLoading ? <LittleLoader /> : "SIGN UP"}
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
          <Button
            alt="Facebook"
            label="Sign Up with Facebook"
            icon={facebook}
          />
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
