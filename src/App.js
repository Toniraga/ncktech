import Nav from './components/Nav';
import Payment from './components/Payment';
import CostBreakdown from './components/CostBreakdown';
import './App.css';

function App() {
	return (
		<div className="app">
			<Nav />
			<Payment />
			<CostBreakdown />
		</div>
	);
}

export default App;
