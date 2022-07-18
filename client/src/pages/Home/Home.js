import React from 'react';
import { Button } from '@mui/material';
import Login from '../../components/Login/Login';
function Home() {
	return (
		<div>
			<Button variant="contained" color="secondary">
				Login
			</Button>
			<Button variant="contained">Register</Button>
		</div>
	);
}

export default Home;
