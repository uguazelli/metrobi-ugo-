const Hero = () => {
	return (
		<div
			style={{
				backgroundColor: "#D7C9E3",
				color: "white",
				textAlign: "center",
				marginBottom: 5,
				flex: 2,
			}}
		>
			<h3>Hero </h3>
		</div>
	);
};

const Sidebar = () => {
	return (
		<div
			style={{
				backgroundColor: "#9FC363",
				color: "white",
				textAlign: "center",
				flex: 4,
			}}
		>
			<h3>Sidebar</h3>
		</div>
	);
};

const MainContent = () => {
	return (
		<div style={{ backgroundColor: "#F5C632", color: "white", textAlign: "center", marginBottom: 5, flex: 5 }}>
			<h3>Main Content</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
			</p>
		</div>
	);
};

const ExtraContent = () => {
	return (
		<div style={{ backgroundColor: "#898989", color: "white", textAlign: "center", flex: 1 }}>
			<h3>Sidebar</h3>
		</div>
	);
};

const Main = () => {
	return (
		<div style={{ display: "flex", width: "100%", marginTop: 10, height: 640 }}>
			<div style={{ flex: 1, height: "100%", marginRight: 5 }}>
				<div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
					<Hero />
					<Sidebar />
				</div>
			</div>
			<div style={{ flex: 3 }}>
				<div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
					<MainContent />
					<ExtraContent />
				</div>
			</div>
		</div>
	);
};

export default Main;
