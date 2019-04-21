import React, { Component } from "react";

class TwitterPost extends Component {
	render() {
		return (
			<div>
				<div>{this.props.title}</div>
				<div>{this.props.body}</div>
			</div>
		);
	}
}

export default TwitterPost;
