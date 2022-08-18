import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Calendar from './pages/Calendar/Calendar';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/calendar" element={<Calendar />} />
			</Routes>
		</Router>
	);
}

export default App;
