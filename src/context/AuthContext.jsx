import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";

export const FirebaseAuthContext = createContext();

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

// Fetch reviews
const fetchAllReviews = async () => {
  try {
    const reviewsCollection = collection(db, "reviews");
    const reviewsSnapshot = await getDocs(reviewsCollection);
    const reviews = reviewsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    toast.error("Error fetching reviews");
    return [];
  }
};

  // Fetching user details
  const fetchUserDetails = async (userId) => {
    try {
      const userDoc = await getDoc(doc(db, `users/${userId}`));
      if (userDoc.exists()) {
        return userDoc.data();
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      return null;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDetails = await fetchUserDetails(user.uid);
        setUser({ ...user, ...userDetails });
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Register with email and password and store user data
  const storeUserDetails = async (userId, name, email) => {
    try {
      await setDoc(doc(db, "users", userId), {
        name,
        email,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const registerWithEmailAndPassword = async (email, password, name) => {
    setLoading(true);
    try {
      // Check if the email is already registered
      const userSnapshot = await getDoc(doc(db, "users", email));
      if (userSnapshot.exists()) {
        throw new Error("Email is already registered.");
      }
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await storeUserDetails(user.uid, name, email);
      toast.success("Registered Successfully");
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Login with email and password
  const loginWithEmailAndPassword = async (email, password) => {
    setIsLoggedIn(false);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      toast.success("Logged In Successfully");
      setIsLoggedIn(true); // Update isLoggedIn state
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      throw error;
    }
  };

  //Add review
  //Add review
  const addReview = async (rating, amenity, description, name) => {
    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        // Fetch user details from Firestore
        const userDetails = await fetchUserDetails(currentUser.uid);
        if (userDetails) {
          await addDoc(collection(db, "reviews"), {
            userId: currentUser.uid,
            name: name || "Anonymous",
            rating: rating,
            amenity: amenity,
            description: description,
            createdAt: new Date(),
          });
          console.log("Review created successfully");
          toast.success("Review created successfully");
        } else {
          console.error("User details not found");
          toast.error("User details not found");
        }
      } else {
        console.error("User is not logged in");
        toast.error("User is not logged in");
      }
    } catch (error) {
      console.error("Error creating review:", error);
      toast.error("Error creating review:", error);
    }
  };

  // Logout
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error(error);
      throw error; // Re-throw error to be caught by the caller
      toast.error(error.message);
    }
  };

  return (
    <FirebaseAuthContext.Provider
      value={{
        error,
        setError,
        user,
        setUser,
        loading,
        isLoggedIn,
        registerWithEmailAndPassword,
        loginWithEmailAndPassword,
        fetchAllReviews,
        addReview,
        logout,
      }}
    >
      {children}
    </FirebaseAuthContext.Provider>
  );
};
