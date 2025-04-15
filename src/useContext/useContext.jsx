import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios"; // Import axios

const AuthContext = createContext();

export const Context = () => {
  return useContext(AuthContext);
}


export const UserProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [movieData, setMovieData] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [isEmailUser, setIsEmailUser] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("https://marvinbackend.onrender.com/");
            setData(response.data || []);
            console.log(response)
          } catch (error) {
            console.error("Error fetching users:", error);
            setError(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

      // const accessProtectedRoute = async () => {
      //   if (!token) {
      //     setMessage("Error: No token provided.");
      //     return;
      //   }
      //   try {
      //     const response = await axios.get('http://localhost:3000/protected', {
      //       headers: { Authorization: `Bearer ${token}` }
      //     });
      //     setMessage(response.data.message);
      //   } catch (error) {
      //     console.error("Error accessing protected route:", error);
      //     if (error.response) {
      //       if (error.response.status === 403) {
      //         setMessage("Access denied: You do not have permission to access this resource.");
      //       } else {
      //         setMessage(`Error: ${error.response.data.message || 'An error occurred'}`);
      //       }
      //     } else if (error.request) {
      //       setMessage('Error: No response received from the server.');
      //     } else {
      //       setMessage(`Error: ${error.message}`);
      //     }
      //   }
      // };
    
    const initialValue = {
        data,
        setData,
        movieData,
        setMovieData,
        currentUser, 
        setCurrentUser
        // accessProtectedRoute
    };

    return (
        <AuthContext.Provider value={initialValue}>
            {children}
        </AuthContext.Provider>
    );

}