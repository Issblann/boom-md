import React from 'react';
import './styles.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer'

const Layout = ({ children }) => {
  return (
    <div className="principal-container-layout">
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
      <Footer />
    </div>
  );
};

export default Layout;
