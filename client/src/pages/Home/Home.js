import { React, useState } from 'react';
import './home.css';
import Login from '../../components/Login/Login';
// import Signup from '../../components/Signup/Signup';

function Home() {
	const [clicked, setClicked] = useState(false);
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
							//added an empty fragment instead of the componenet fragment
							<></>
						)}
						<div className="buttonContainer">
							<Login />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Home;
