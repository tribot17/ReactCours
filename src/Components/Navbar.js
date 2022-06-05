import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/contact">Contract</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
