import React from "react";

export default function Main() {
	return (
		<main>
			<div className="hero-container">
				<h1>raiabril.com</h1>
				<h3>Welcome to my personal portfolio</h3>
				<div className="hero-cards">
				<a href="https://u.pcloud.link/publink/show?code=XZ23n3XZ2hN7SLPU3V4s5fyGIYP1qmdsr1CV">
						<div className="hero-card">
							<img src="cv.png" width="150" height="auto" alt="linkedin"></img>
						</div></a>

					<a href="https://www.linkedin.com/in/raimundo-abril-l%C3%B3pez-a700143a/">
						<div className="hero-card">
							<img src="linkedin.png" width="150" height="auto" alt="linkedin"></img>
						</div></a>

					<a href="https://github.com/raiabril/"><div className="hero-card"><img src="github.png" width="150" height="150" alt="github"></img></div></a>


					<a href="https://app.hackthebox.com/profile/804095"><div className="hero-card"><img src="htb.svg" width="150" height="150" alt="github"></img></div></a>

				</div>

			</div>
		</main>
	);
}
