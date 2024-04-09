import React from "react";
import { CreateReview, Error, Home, Login, Register, Review } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProtectedRoute, PublicRoute } from "./routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="">
      <Router>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              height: "70px",
            },
          }}
        />
        <Routes>
          <Route
            path="/register"
            element={<PublicRoute element={Register} />}
          />
          <Route path="/login" element={<PublicRoute element={Login} />} />
          <Route path="/review/:amenity" element={<ProtectedRoute element={Review} />} />
          <Route path="/review" element={<ProtectedRoute element={Review} />} />
          <Route
            path="/create-review"
            element={<ProtectedRoute element={CreateReview} />}
          />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
