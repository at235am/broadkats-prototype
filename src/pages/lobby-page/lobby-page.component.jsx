import React from "react";

import Sidebar from "../../components/sidebar/sidebar.component";

import "./lobby-page.styles.scss";

const LobbyPage = () => (
	<div className="lobby-page">
		<Sidebar className="sidebar-panel"/>
		<div className="lobby-content"> HELP</div>
	</div>
);

export default LobbyPage;
