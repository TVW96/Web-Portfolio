import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import github from "../github.png";
import linkedin from "../LinkedIn.png";
import instagram from "../Instagram.png";
import stackoverflow from "../StackOverflow.png";

function Footer() {
	return (
		<footer>
			<div className="footer-heading">
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
			</div>
			<div className="footer-top">
				<div className="footer-title">
					<h3>Hire Me! 👨🏾‍💻</h3>
				</div>
			</div>
			<div className="footer-middle">
				<div className="footer-section1">
					<b>Follow Me</b>
					<ul>
						<li>Github</li>
						<li>Twitter</li>
						<li>Linkedin</li>
						<li>Spotify</li>
					</ul>
				</div>
				<div className="footer-section2">
					<b>Resources</b>
					<ul>
						<li>Documentation</li>
						<li>My styles</li>
						<li>Color palettes</li>
						<li>CSS White paper</li>
					</ul>
				</div>
				<div className="footer-section3">
					<b>Developer stats</b>
					<ul>
						<li>Leetcode</li>
						<li>StackOverflow</li>
						<li>Github</li>
					</ul>
				</div>
				<div className="footer-section4">
					<b>About</b>
					<ul>
						<li>Me</li>
					</ul>
				</div>
			</div>
			<div className="footer-bottom">
				<p>© 2023 TroyWashington All rights reserved</p>
			</div>
		</footer>
	);
}

export default Footer;
