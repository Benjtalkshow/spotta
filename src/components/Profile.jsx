import React, { useContext, useEffect, useState } from "react";
import { FirebaseAuthContext } from "../context/AuthContext";
import ShowOnLogin, { ShowOnLogout } from "../routes/PrivateLink";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useContext(FirebaseAuthContext);
  const [fullName, setFullName] = useState(user ? user.name : "Anonymous User");
  const [initials, setInitials] = useState("");
  const navigate = useNavigate();
  const loaction = useLocation();

  useEffect(() => {
    function extractInitials(input) {
      const words = input.split(" ");
      let initials = "";
      words.forEach((word) => {
        const firstLetter = word.charAt(0).toUpperCase();
        initials += firstLetter;
      });
      return initials;
    }
    if (fullName) {
      setInitials(extractInitials(fullName));
    }
  }, [fullName]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const isReviewRoute = location.pathname.startsWith("/review");

  return (
    <div className="flex items-center gap-3">
      <div className="font-bold text-[#5378F6] flex space-x-2">
        <ShowOnLogin>
          <h1 className="cursor-pointer" onClick={handleLogout}>
            LOGOUT
          </h1>
        </ShowOnLogin>
        <ShowOnLogin>
          {!isReviewRoute && (
            <Link to={`/review/${''}`} className="cursor-pointer">
              REVIEW
            </Link>
          )}
        </ShowOnLogin>
        <ShowOnLogout>
          <Link to="/login">LOGIN</Link>
        </ShowOnLogout>
      </div>
      <h1 className="font-bold text-lg hidden md:block">
        <ShowOnLogin>Welcome!</ShowOnLogin>
      </h1>
      <ShowOnLogin>
        <div className="avatar online w-10 h-10 placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-16">
            <span className="text-xl">{initials}</span>
          </div>
        </div>
      </ShowOnLogin>
    </div>
  );
};

export default Profile;
