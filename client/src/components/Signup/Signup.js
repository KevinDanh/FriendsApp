import {
	Paper,
	Container,
	Typography,
	TextField,
	Grid,
	Button,
} from '@mui/material';
import React from 'react';
import './Signup.css';

function Login() {
	// *********** TODO ***************************
	const handleSubmit = () => {};

	//when called will navigate to sign up page
	const switchMode = () => {};

	return (
		<Container maxWidth="xs">
			<Paper className="container"
				sx={{
					mt: 2,
					padding: 2,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography variant="h5">Sign Up</Typography>
				<form
					style={{
						width: '100%',
						marginTop: 10,
					}}
					onSubmit={handleSubmit}
				>
					<Grid container direction={'column'} spacing={2}>
						<Grid item>
							<TextField
								id="username"
								label="Username"
								type="text"
								fullWidth
								required
							/>
						</Grid>
						<Grid item>
							<TextField
								id="email"
								label="Email Address"
								type="email"
								fullWidth
								required
							/>
						</Grid>
						<Grid item xs>
							<TextField
								id="password"
								label="Password"
								type="password"
								fullWidth
								required
							/>
						</Grid>
                        <Grid item xs>
							<TextField
								id="confirm_password"
								label="Confirm Password"
								type="password"
								fullWidth
								required
							/>
						</Grid>
					</Grid>
					<Grid item xs>
						<Button className="signup_button" type="submit">
							Sign Up
						</Button>
						<Button variant="text" size="small" onClick={switchMode}>
							Don't have an account? Sign up
						</Button>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
}

export default Login;
