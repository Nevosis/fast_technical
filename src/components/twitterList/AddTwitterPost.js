import React, { Component } from "react";
import { addPost } from "../../actions/twitterActions";
import store from "../../store";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

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
				addPost(
					this.state.newPostTitle,
					this.state.newPostBody.replace(/[\n\r]/g, " ")
				)
			);
			this.setState({ newPostTitle: "", newPostBody: "" });
		}
		event.preventDefault();
	}
	render() {
		return (
			<Card style={{ marginTop: 50, width: "100%" }}>
				<Card.Body>
					<Card.Title>Ajouter un tweet</Card.Title>
					<Form onSubmit={e => this.handleSubmit(e)}>
						<Form.Group controlId="Title">
							<Form.Control
								placeholder="Titre"
								value={this.state.newPostTitle}
								onChange={this.updateTitle}
							/>
						</Form.Group>
						<Form.Group controlId="Body">
							<Form.Control
								as="textarea"
								rows="3"
								placeholder="Contenu"
								value={this.state.newPostBody}
								onChange={this.updateBody}
							/>
						</Form.Group>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Card.Body>
			</Card>
		);
	}
}

export default AddTwitterPost;
