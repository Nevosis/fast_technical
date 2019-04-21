import React, { Component } from "react";
import TwitterListContainer from "./components/twitterList/TwitterListContainer";

class App extends Component {
	render() {
		return (
			<div>
				<div style={{ textAlign: "center", marginTop: 20 }}>
					<span style={{ fontSize: 35 }}>Tweet me</span>
				</div>
				<TwitterListContainer />
			</div>
		);
	}
}

export default App;
