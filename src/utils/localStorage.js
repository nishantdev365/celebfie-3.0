
export const setItem = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error("Error setting item in local storage:", error);
    }
  };
  

  export const getItem = (key) => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error("Error getting item from local storage:", error);
      return null;
    }
  };
  