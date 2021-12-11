// Code SimpleComponent Here
import React from "react";

export default class SimpleComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			mood: "happy"
		}
	}

	render() {
		return(
			<div  onClick={this.handleClick}>
				{this.state.mood}
			</div>
		)
	}

	handleClick = () => {
		this.setState(prevState => {
				if (prevState.mood === "happy") {
					this.setState({mood: "sad"});
				} else {
					this.setState({mood: "happy"});
				}
			}
		)
	}
}