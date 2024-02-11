import React, { useEffect } from "react";
import axios from "axios";

const UserLogout = () => {
  useEffect(() => {
    const logout = async () => {
      try {
        await axios.post("https://naphtal112.pythonanywhere.com/api/v1/users/logout/");
        console.log("Logout successful"); // Handle the success response
      } catch (error) {
        console.error(error); // Handle the error response
      }
    };

    logout();
  }, []);

  return <h2>Logging out...</h2>;
};

export default UserLogout;
