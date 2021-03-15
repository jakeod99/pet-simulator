import '../App.css';
import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import HealthIcon from '@material-ui/icons/Favorite';
import HungerIcon from '@material-ui/icons/Restaurant';

class Status extends Component {
	render(){
	    return (
	    	<div className="game-display-column">
                <div className="status-bar-container">
                    <HealthIcon fontSize="large" style={{ color: 'var(--black)' }} /> 
                    <Progress className="status-bar" value={this.props.health} />
                </div>
                <div className="status-bar-container">
                    <HungerIcon fontSize="large" style={{ color: 'var(--black)' }} />  
                    <Progress className="status-bar" value={this.props.hunger} />
                </div>
	    	</div>
	    );
    }
}

export default Status;