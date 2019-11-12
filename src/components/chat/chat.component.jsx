import React from "react";
import FormInput from "../form-input/form-input.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus-solid.svg";
import CircleButton from "../circle-btn/circle-btn.component.jsx";
import "./chat.styles.scss";

class Chat extends React.Component {

	autosize(){
	    this.style.cssText = 'height:auto';
	    let newHeight = this.scrollHeight + 'px';
	    this.style.cssText = 'height:' + newHeight;
	}

	componentDidMount(){
		let chatbox = document.getElementById("chatbox");
		chatbox.addEventListener('keydown', this.autosize);
	}

	render() {
		return (
			<div className="chatContainer">
				<div className="chatHistory"/>
				<textarea id="chatbox" className="chatTextInput"/>
				<div className="chatButtons">
					<CustomButton className="send">
						Send
					</CustomButton>
					<CircleButton className="attach"
						icon={<PlusIcon />}
					/>
				</div>
			</div>
		);
	}
}

export default Chat;