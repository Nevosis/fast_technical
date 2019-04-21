import React, { Component } from "react";
import { connect } from "react-redux";

class TwitterListContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div>toto</div>;
	}
}

const mapStateToProps = function(store) {
	return {};
};

export default connect(mapStateToProps)(TwitterListContainer);
