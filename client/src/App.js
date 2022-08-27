import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './pages/Home/Home';
import Calendar from './pages/Calendar/Calendar';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/calendar" exact element={<Calendar />} />
				<Route path="/login" exact element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
