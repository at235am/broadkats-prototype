import React from "react";

import Sidebar from "../../components/sidebar/sidebar.component";
import CollapsibleContent from "../../components/collapsible-content/collapsible-content.component";

import "./lobby-page.styles.scss";

const LobbyPage = () => (
	<div className="lobby-page">
		<Sidebar className="left-sidebar-panel" visible="false">
			<CollapsibleContent id="collapsible-activity" label="Activity"
      			content={"WHATEVER"}
      		/>
      		<CollapsibleContent id="collapsible-friends" label="Friends"
      			content={"WHATEVER2"}
      		/>
		</Sidebar>
		
		<div className="lobby-content">
			HELP
		</div>
	</div>
);

export default LobbyPage;
