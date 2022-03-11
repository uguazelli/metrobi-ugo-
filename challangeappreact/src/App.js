import "./css/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Related from "./components/Related";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="center">
			<div className="container">
				<Header />
				<Main />
				<Related />
				<Footer />
			</div>
		</div>
	);
}

export default App;
