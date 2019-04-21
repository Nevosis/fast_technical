import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../actions/twitterActions";
import store from "../../store";

class TwitterListContainer extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		//store.dispatch(loginUser(login, password))
	}
	render() {
		if (this.props.posts.length) return <div>toto</div>;
		return null;
	}
}

const mapStateToProps = function(store) {
	return { posts: store.twitterState.posts };
};

export default connect(mapStateToProps)(TwitterListContainer);
