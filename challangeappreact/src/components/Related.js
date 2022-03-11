const RelatedImages = () => {
	return (
		<div
			style={{
				backgroundColor: "#2BB673",
				color: "white",
				textAlign: "center",
				flex: 2,
				marginRight: 5,
			}}
		>
			<h3>RelatedImages</h3>
		</div>
	);
};

const RelatedPosts = () => {
	return (
		<div
			style={{
				backgroundColor: "#F3CCDE",
				color: "white",
				textAlign: "center",
				flex: 4,
			}}
		>
			<h3>RelatedPosts</h3>
		</div>
	);
};

const Related = () => {
	return (
		<div style={{ display: "flex", width: "100%", marginTop: 5, height: 140 }}>
			<div style={{ flex: 1, height: "100%" }}>
				<div style={{ display: "flex", height: "100%" }}>
					<RelatedImages />
					<RelatedPosts />
				</div>
			</div>
		</div>
	);
};

export default Related;
