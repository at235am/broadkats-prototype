import React from "react";

import "./sidebar.styles.scss";

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: this.props.visible === "true",
			side: this.props.side,
			classes: "",
		};
	}

	componentDidMount() {
		this.setState({ classes: `sidebar ${this.state.side} visible-${this.state.visible}` });
	}

	expand() {
		this.setState({ classes: `sidebar ${this.state.side} visible-${!this.state.visible}`})
		this.setState({ visible: !this.state.visible });
	}

	render() {
		return (
			<div className= {this.state.classes}>
				<span className="vertical-button" onClick={this.expand.bind(this)} />
				<div className="sidebar-content">
					{this.state.visible && this.props.children}
				</div>
			</div>
		);
	}
}

export default Sidebar;