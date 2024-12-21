import React from "react";
import "./Hero.scss";

function Hero() {
	return (
		<div className="hero_container">
			<div className="Hero">
				<h3 style={{ margin: "0px", padding: "0px" }}>Languages & Frameworks</h3>
				<div className="hero_innerContainer">
					<div className="scrolling-text-container">
						<div className="scrolling-text">
							<h3>ReactJS</h3>
						</div>
						<div className="scrolling-text">
							<h3>Java</h3>
						</div>
						<div className="scrolling-text">
							<h3>C#</h3>
						</div>
						<div className="scrolling-text">
							<h3>Python</h3>
						</div>
						<div className="scrolling-text">
							<h3>SQL</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
