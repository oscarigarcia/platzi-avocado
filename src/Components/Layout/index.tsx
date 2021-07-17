import React from "react";

import NavBar from "@components/NavBar";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <footer>El footer próximamente</footer>
    </div>
  );
};
export default Layout;
