import React from 'react'
import { Link } from 'react-router-dom';
import github from "../../images/github.png";
import linkedin from "../../images/LinkedIn.png";
import instagram from "../../images/Instagram.png";
import stackoverflow from "../../images/StackOverflow.png";
import "./Socials.scss";

function Socials() {
  return (
    <div className="social-icons">
      <ul>
        <li>
          <Link to="https://github.com/TVW96" target="_blank">
            <img src={github} width={100} height={100} alt="" />
          </Link>
          <h3>Github</h3>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/troy-washington-726583200/"
            target="_blank"
          >
            <img src={linkedin} width={100} height={100} alt="" />
          </Link>
          <h3>LinkedIn</h3>
        </li>
        <li>
          <Link to="https://www.instagram.com/troyvw96/" target="_blank">
            <img src={instagram} width={100} height={100} alt="" />
          </Link>
          <h3>Instagram</h3>
        </li>
        <li>
          <Link
            to="https://stackoverflow.com/users/20181986/tvw96"
            target="_blank"
          >
            <img src={stackoverflow} width={100} height={100} alt="" />
          </Link>
          <h3>StackOverflow</h3>
        </li>
      </ul>
    </div>
  )
}

export default Socials
