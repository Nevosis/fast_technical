import React, { Component } from "react";
import { removePost, updatePost } from "../../actions/twitterActions";
import store from "../../store";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Form from "react-bootstrap/Form";

class TwitterPost extends Component {
	constructor(props) {
		super(props);
		this.removePost = this.removePost.bind(this);
		this.editPost = this.editPost.bind(this);
		this.cancelEdit = this.cancelEdit.bind(this);
		this.saveEdit = this.saveEdit.bind(this);
		this.updateBody = this.updateBody.bind(this);
		this.state = { editing: false, bodyEditing: "" };
	}
	removePost() {
		store.dispatch(removePost(this.props.id));
	}
	editPost() {
		this.setState({ editing: true, bodyEditing: this.props.body });
	}
	cancelEdit() {
		this.setState({ editing: false });
	}
	saveEdit() {
		store.dispatch(
			updatePost(
				this.props.id,
				this.state.bodyEditing.replace(/[\n\r]/g, "") //removing cariage return.
			)
		);
		this.setState({ editing: false });
	}
	updateBody(event) {
		this.setState({ bodyEditing: event.target.value });
	}
	render() {
		let bodyJsx = null;
		let footerJsx = null;

		if (this.state.editing) {
			bodyJsx = (
				<Form.Control
					as="textarea"
					rows="3"
					value={this.state.bodyEditing}
					onChange={this.updateBody}
				/>
			);
			footerJsx = [
				<Button key={"remove"} onClick={this.cancelEdit}>
					Annuler
				</Button>,
				<Button
					key={"edit"}
					onClick={this.saveEdit}
					style={{ marginLeft: 10 }}
				>
					Sauvegarder
				</Button>
			];
		} else {
			bodyJsx = this.props.body;
			footerJsx = [
				<Button key={"remove"} onClick={this.removePost}>
					Supprimer
				</Button>,
				<Button
					key={"edit"}
					onClick={this.editPost}
					style={{ marginLeft: 10 }}
				>
					Editer
				</Button>
			];
		}

		return (
			<Card style={{ width: "100%" }}>
				<Card.Body>
					<Card.Title>{this.props.title}</Card.Title>
					<Card.Text>{bodyJsx}</Card.Text>
					{footerJsx}
				</Card.Body>
			</Card>
		);
	}
}

export default TwitterPost;
