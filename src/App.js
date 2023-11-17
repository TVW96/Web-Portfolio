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

function App() {
	return (
		<div className="">
			<div className="Landing">
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
							<img src={github} width={100} height={100} alt="" />
							<h3>Github</h3>
						</li>
						<li>
							<img src={linkedin} width={100} height={100} alt="" />
							<h3>LinkedIn</h3>
						</li>
						<li>
							<img src={instagram} width={100} height={100} alt="" />
							<h3>Instagram</h3>
						</li>
						<li>
							<img src={stackoverflow} width={100} height={100} alt="" />
							<h3>StackOverflow</h3>
						</li>
					</ul>
				</div>
			</div>
			<div className="">
				<Skills />
				<Experience />
			</div>
			<Footer />
		</div>
	);
}

export default App;
