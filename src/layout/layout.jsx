import React from 'react';
import './styles.css';
import Navbar from '../components/navbar';
const Layout = ({ children }) => {
  return (
    <div className="principal-container-layout">
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
