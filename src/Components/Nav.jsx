import React from "react";
import Logo from "../code.png";
import { Link } from "react-router-dom";
import ScrollToHashElement from "../Utils/ScrollToHashElement";

function Nav() {
	return (
		<nav className="navigation">
			<ScrollToHashElement />
			<div className="container">
				<div className="section_one">
					<ul>
						<img src={Logo} alt="logo" className="Logo" />
					</ul>
					<Link to="#About">About</Link>
					<Link to="#Skills">Skills</Link>
					<Link to="#Experience">Experience</Link>
				</div>
				<div className="section_two">
					<Link to="#contact">contact</Link>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
