import React from "react";
// import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Button from "../Button";
function nav() {
  return (
    <div className="bg-gray-500">
      <section className=" flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/discover">Discover</Link>
            </li>
            <button type="submit">Get Started</button>
            <Button children="Button Button" />
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default nav;
