import React, { Component } from "react";
import { removePost } from "../../actions/twitterActions";
import store from "../../store";

class TwitterPost extends Component {
	constructor(props) {
		super(props);
		this.removePost = this.removePost.bind(this);
	}
	removePost() {
		store.dispatch(removePost(this.props.id));
	}
	render() {
		return (
			<div>
				<div>{this.props.title}</div>
				<div>{this.props.body}</div>
				<button onClick={this.removePost}>Remove</button>
			</div>
		);
	}
}

export default TwitterPost;
