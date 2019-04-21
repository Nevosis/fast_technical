import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import TwitterPost from "./TwitterPost";
import AddTwitterPost from "./AddTwitterPost";

class TwitterList extends Component {
	render() {
		let twitterListJsx = [];
		this.props.posts.forEach(post => {
			twitterListJsx.push(
				<div key={post.id} style={{ marginTop: 40 }}>
					<TwitterPost
						id={post.id}
						title={post.title}
						body={post.body}
					/>
				</div>
			);
		});

		return (
			<div>
				<Col
					sm={12}
					md={{ offset: 1, span: 10 }}
					lg={{ offset: 2, span: 8 }}
				>
					<AddTwitterPost />
					{twitterListJsx}
				</Col>
			</div>
		);
	}
}

export default TwitterList;
