// localStorage.js

// Function to set an item in local storage
export const setItem = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error("Error setting item in local storage:", error);
    }
  };
  
  // Function to get an item from local storage
  export const getItem = (key) => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error("Error getting item from local storage:", error);
      return null;
    }
  };
  