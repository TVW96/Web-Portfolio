import "./App.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";

import github from "./OctoZombie.png";
import linkedin from "./LinkedIn.png";
import instagram from "./Instagram.png";
import stackoverflow from "./StackOverflow.png";

import { BrowserRouter, Link } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="">
				<div className="Landing" id="About">
					<Nav />
					<header className="Header">
						Troy Washington
						<div className="center">
							<br />
							Bootcamp Developer
						</div>
					</header>
					<Hero />
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
				<section id="Skills">
					<Skills />
				</section>
				<section id="Experience">
					<Experience />
				</section>
				<section id="contact">
					<Footer />
				</section>
			</div>
		</BrowserRouter>
	);
}

export default App;
