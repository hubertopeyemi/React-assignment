import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Layout">Layout</Link>
      <Link to="/SignIn">SignIn</Link>
      <Link to="/SignUp">SignUp</Link>
    </nav>
    
  );
}

export default NavBar;