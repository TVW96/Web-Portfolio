import React from "react";
import "./Hero.scss";

function Hero() {
	return (
		<div className="hero_container">
			<div className="Hero">
				Skills & Frameworks
				<div className="hero_innerContainer">
					<div className="scrolling-text-container">
						<div className="scrolling-text">
							<h2>ReactJS</h2>
						</div>
						<div className="scrolling-text">
							<h2>Java</h2>
						</div>
						<div className="scrolling-text">
							<h2>Python</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
