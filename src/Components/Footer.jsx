import React from "react";
import "./Footer.sass";

function Footer() {
	return (
		<footer>
			<div className="footer-heading">
				<ul>
					<li>Github</li>
					<li>LinkedIn</li>
					<li>Instagram</li>
					<li>Stack Overflow</li>
				</ul>
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
