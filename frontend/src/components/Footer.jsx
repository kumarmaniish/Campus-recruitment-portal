import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
  FaSquareGithub,
  Fa0,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Knowledge Park 2 Greater Noida, India</li>
            <li>kumarmanishgupta45@gmail.com</li>
            <li>+91 6205404805</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li to={"/"}>
              <Link>Home</Link>
            </li>
            <li to={"/jobs"}>
              <Link>Jobs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <Link to={"https://twitter.com/Manisho30456369/"}>
                <span>
                  <FaSquareXTwitter />
                </span>
                <span>Twitter (X)</span>
              </Link>
            </li>
            <li>
              <Link to={"https://github.com/kumarmaniish/Portfolio.github.io/"}>
                <span>
                  <FaSquareGithub />
                </span>
                <span>GitHub</span>
              </Link>
            </li>
            <li>
              <Link to={"https://kumarmaniish.github.io/Portfolio.github.io/"}>
                <span>
                  <Fa0 />
                </span>
                <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.linkedin.com/in/themanishkumar82/"}>
                <span>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        &copy; CopyRight 2024. All Rights Reserved By Manish Kumar
      </div>
    </>
  );
};

export default Footer;
