import React from "react";
import { Link, NavLink } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>EMS</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <NavLink to="/listing">Manage Employees</NavLink>

            </li>

            <li>
              <NavLink to="/sales">sales</NavLink>

            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
