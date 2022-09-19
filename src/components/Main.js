import React from "react";

export default function Main() {
	return (
		<main>
			<div className="hero-container">
				<h1>raiabril.com</h1>
				<h3>Welcome to my personal portfolio</h3>
				<div className="hero-cards">
				<a href="http://u.pc.cd/7KsctalK">
						<div className="hero-card">
							<img src="cv.png" width="150" height="auto" alt="Resume"></img>
						</div></a>

					<a href="https://www.linkedin.com/in/raimundo-abril-l%C3%B3pez-a700143a/">
						<div className="hero-card">
							<img src="linkedin.png" width="150" height="auto" alt="linkedin"></img>
						</div></a>

					<a href="https://github.com/raiabril/"><div className="hero-card"><img src="github.png" width="150" height="150" alt="github"></img></div></a>


					<a href="https://app.hackthebox.com/profile/804095"><div className="hero-card"><img src="htb.svg" width="150" height="150" alt="hack the box"></img></div></a>

				</div>

			</div>
		</main>
	);
}
