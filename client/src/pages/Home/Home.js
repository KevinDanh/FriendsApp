import { React, useState } from 'react';
import './home.css';
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';

function Home() {
	const [clicked, setClicked] = useState(false);
	const [component, setComponent] = useState('');
	const displayLogin = (e) => {
		e.preventDefault();
		setClicked(true);
		setComponent(<Login />);
	};
	const displayRegister = (e) => {
		e.preventDefault();
		setClicked(true);
		setComponent(<Signup />);
	};

	return (
		<div className="background">
			<div className="brownContainer">
				<div className="orangeContainer">
					<div className="whiteContainer">
						<div onClick={() => setClicked(false)}>
							<h1 className="titleContainer1"> Friends </h1>
						</div>
						{!clicked ? (
							<div className="sloganContainer1">
								<p>Plan.</p>
								<p>Schedule.</p>
								<p>HangOut.</p>
							</div>
						) : (
							component
						)}
						<div className="buttonContainer">
							<button onClick={displayRegister} className="registerButton">
								SIGN UP
							</button>
							<button onClick={displayLogin} className="loginButton">
								LOGIN
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Home;
