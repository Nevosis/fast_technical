import React, { Component } from "react";
import TwitterPost from "./TwitterPost";

class TwitterList extends Component {
	render() {
		let twitterListJsx = [];
		this.props.posts.forEach(post => {
			twitterListJsx.push(
				<div key={post.id} style={{marginTop:20}}>
					<TwitterPost title={post.title} body={post.body} />
				</div>
			);
		});
		return twitterListJsx;
	}
}

export default TwitterList;
