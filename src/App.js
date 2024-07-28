import "./App.css";
import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Socials from "./Components/Socials/Socials";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
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
							Software Engineer
						</div>
					</header>
					<Hero />
					<Socials />
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
	)
}

export default App;
