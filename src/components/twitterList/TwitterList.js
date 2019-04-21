import React, { Component } from "react";
import TwitterPost from "./TwitterPost";
import AddTwitterPost from "./AddTwitterPost";

class TwitterList extends Component {
	render() {
		let twitterListJsx = [];
		this.props.posts.forEach(post => {
			twitterListJsx.push(
				<div key={post.id} style={{ marginTop: 40 }}>
					<TwitterPost id={post.id} title={post.title} body={post.body} />
				</div>
			);
		});

		return (
			<div>
				<AddTwitterPost />
				{twitterListJsx}
			</div>
		);
	}
}

export default TwitterList;
