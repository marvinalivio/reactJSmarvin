import React, { createContext, useState, useEffect, useContext } from "react";
// import axios from "axios"; // Import axios

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





    const initialValue = {
        data,
        setData,
        movieData,
        setMovieData,
        currentUser, 
        setCurrentUser,
        userLoggedIn, 
        setUserLoggedIn
    };

    return (
        <AuthContext.Provider value={initialValue}>
            {children}
        </AuthContext.Provider>
    );

}