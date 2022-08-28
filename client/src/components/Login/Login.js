import React from 'react';
import { Container, Button } from '@mui/material';
import { useGoogleLogin } from '@react-oauth/google';
import './Login.css';

function Login() {
	// *********** TODO ***************************
	const googleSuccess = () => {};
	const googleFailure = () => {};

	const login = useGoogleLogin({
		onSuccess: googleSuccess,
		onFailure: googleFailure,
		flow: 'auth-code',
	});

	return (
		<Container maxWidth="md">
			<Button
				sx={{ backgroundColor: 'brown' }}
				fullWidth
				onClick={login}
				disabled={false}
				variant="contained"
			>
				Sign in with Google
			</Button>
		</Container>
	);
}

export default Login;
