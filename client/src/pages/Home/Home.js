import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
	const navigate = useNavigate();
	return (
		<div className="brownContainer">
			<div className="orangeContainer">
				<div className="whiteContainer">
					<h1 className="titleContainer1">Friends</h1>
					<h1 className="titleContainer2">Friends</h1>
					<div className="sloganContainer1">
						<p>Plan.</p>
						<p>Schedule.</p>
						<p>HangOut.</p>
					</div>
					<div className="sloganContainer2">
						<p>Plan.</p>
						<p>Schedule.</p>
						<p>HangOut.</p>
					</div>
					<div className="buttonContainer">
						<button className="registerButton">REGISTER</button>
						<button className="loginButton" onClick={() => navigate('/login')}>
							LOGIN
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Home;
