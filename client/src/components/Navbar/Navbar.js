import React from 'react';
import { AppBar, Toolbar, Button, Stack, Typography } from '@mui/material';
function Navbar() {
	return (
		<>
			<AppBar
				position="fixed"
				sx={{
					backgroundColor: 'brown',
				}}
			>
				<Toolbar>
					<Typography
						variant="h4"
						sx={{
							fontWeight: 'bold',
						}}
					>
						Friends App
					</Typography>
					<Stack flexGrow={1} direction="row" justifyContent="flex-end">
						<Button
							sx={{
								color: 'white',
								fontWeight: 'bold',
							}}
						>
							Add Event
						</Button>

						<Button
							sx={{
								color: 'white',
								fontWeight: 'bold',
							}}
						>
							Add Friends
						</Button>

						<Button
							sx={{
								color: 'white',
								fontWeight: 'bold',
							}}
						>
							Log Out
						</Button>
					</Stack>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
}

export default Navbar;
