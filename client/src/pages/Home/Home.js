import React from 'react';
import "./home.css";

function Home() {
	return (
		<div className="brownContainer">
			<div className="orangeContainer">
				<div className ="whiteContainer">
					<h1 className = "titleContainer1">Friends</h1>
					<h1 className = "titleContainer2">Friends</h1>
					<div className ="sloganContainer1">
						<p>Plan.</p>
						<p>Schedule.</p>
						<p>HangOut.</p>
					</div>
					<div className ="sloganContainer2">
						<p>Plan.</p>
						<p>Schedule.</p>
						<p>HangOut.</p>
					</div>
					<div className="buttonContainer">
						<button className="registerButton">REGISTER</button>
						<button className="loginButton">LOGIN</button>
					</div>
				</div>
			</div>

		</div>
	);
}
export default Home;
