import '../App.css';
import React, { Component } from 'react';
import Adoption from '../assets/adoption-background.jpg';
import Game from '../assets/game-background.jpg';

class GameWindow extends Component {
	render(){
	    return (
	    	<div className="game-window" style={{backgroundImage: `url(${this.props.page == 'Adoption' ? Adoption : Game})`, backgroundSize: 'cover'}}>
	    		{this.props.children}
	    	</div>
	    );
    }
}

export default GameWindow;
