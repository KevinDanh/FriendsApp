import {
	Paper,
	Container,
	Typography,
	TextField,
	Grid,
	Button,
} from '@mui/material';
import React from 'react';
import './Login.css';

// import makeStyles from './style';

function Login() {
	// *********** TODO ***************************
	const handleSubmit = () => {};

	//when called will navigate to sign up page
	const switchMode = () => {};

	// const styles = makeStyles();

	return (
		<Container maxWidth="xs">
			<Paper
				sx={{
					mt: 10,
					padding: 3,
					mt: 20,
					padding: 2,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography variant="h5">Login</Typography>
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
					</Grid>
					<Button type="submit" className= "login_button" fullWidth variant="contained">
						Login
					</Button>
				</form>
				<Grid
					container
					sx={{
						mt: 2,
					}}
				>
					<Grid item>
						<Button variant="text" size="small" onClick={switchMode}>
							Don't have an account? Sign up.
						</Button>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
}

export default Login;
