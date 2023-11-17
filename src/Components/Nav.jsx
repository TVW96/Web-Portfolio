import React from "react";
import Logo from "../code.png";

function Nav() {
	return (
		<nav className="navigation">
			<div className="container">
				<div className="section_one">
					<ul>
						<img src={Logo} alt="logo" className="Logo" />
					</ul>
					<ul>About</ul>
					<ul>Skills</ul>
					<ul>Experience</ul>
				</div>
				<div className="section_two">
					<ul>contact</ul>
					<ul>photo</ul>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
