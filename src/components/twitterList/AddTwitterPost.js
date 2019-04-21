import React, { Component } from "react";
import { addPost } from "../../actions/twitterActions";
import store from "../../store";

class AddTwitterPost extends Component {
	constructor(props) {
		super(props);
		this.state = { newPostTitle: "", newPostBody: "" };

		this.updateTitle = this.updateTitle.bind(this);
		this.updateBody = this.updateBody.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	updateBody(event) {
		this.setState({ newPostBody: event.target.value });
	}
	updateTitle(event) {
		this.setState({ newPostTitle: event.target.value });
	}
	handleSubmit(event) {
		if (this.state.newPostTitle && this.state.newPostBody) {
			store.dispatch(
				addPost(this.state.newPostTitle, this.state.newPostBody)
			);
			this.setState({newPostTitle:"", newPostBody:""})
		}
		event.preventDefault();
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>AddPost</div>
				<div>
					<input
						type="text"
						value={this.state.newPostTitle}
						onChange={this.updateTitle}
					/>
				</div>
				<div>
					<input
						type="text"
						value={this.state.newPostBody}
						onChange={this.updateBody}
					/>
				</div>

				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default AddTwitterPost;
