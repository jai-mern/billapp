import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1 style={{ backgroundColor: 'green' }}>Inventory Billing App</h1>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/billing">Billing</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>

      <div className="user-info">
        <span style={{ color: 'red' }}>Welcome to jaihind</span>
        {/* Add more user-related information or actions */}
        {/* Example: Logout button */}
        {/* <button>Logout</button> */}
      </div>

      {/* Additional header content */}
      <p>This is additional content in the header.</p>

      {/* Add any other header content */}
    </header>
  );
};

export default Header;
     {/* Add more user-related information or actions */}
        {/* Example: Logout button */}
        {/* <button>Logout</button> */}