import React from "react";

import Sidebar from "../../components/sidebar/sidebar.component";
import CollapsibleContent from "../../components/collapsible-content/collapsible-content.component";
import "./room-page.styles.scss";

const RoomPage = () => 
	<div className="room-page">
		<Sidebar side="left" visible="false">
			<CollapsibleContent id="collapsible-activity" label="Activity"
      			content={"WHATEVER"}
      		/>
      		<CollapsibleContent id="collapsible-friends" label="Friends"
      			content={"WHATEVER2"}
      		/>
		</Sidebar>

		Room Page
		
		<Sidebar side="right" visible="true">
			<CollapsibleContent id="collapsible-CHAT" label="Chat"
      			content={"PEOPLE TALKING WILL GO HERE I GWUESS"}
      		/>
		</Sidebar>
	</div>;

export default RoomPage;
