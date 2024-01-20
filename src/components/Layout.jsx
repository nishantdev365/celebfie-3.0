// Layout.js

import { HelmetProvider } from "react-helmet-async";  // Correct import statement
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <HelmetProvider>
      <Navbar />
      {children}
    </HelmetProvider>
  );
};

export default Layout;
