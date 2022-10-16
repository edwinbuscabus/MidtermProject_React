import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar bg-secondary">
        <h2>Midterm Project</h2>

            <div className="links">
          <h2>
            <Link to="/">Dashboard</Link>
            <Link to="/venues">Venues</Link>
          </h2>
            </div>

      </nav>
    );
}
 
export default Navbar;