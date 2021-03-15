import '../App.css';
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import EatIcon from '@material-ui/icons/Restaurant';
import DrinkIcon from '@material-ui/icons/LocalDrink';
import BathIcon from '@material-ui/icons/Bathtub';
import WalkIcon from '@material-ui/icons/DirectionsRun';
import PlayIcon from '@material-ui/icons/SportsBaseball';
import TrainIcon from '@material-ui/icons/Sports';

class Actions extends Component {
	render(){
	    return (
	    	<div className="game-display-column">
                <Button className="btn-circle"> 
                    <EatIcon fontSize="large" style={{ color: 'var(--white)' }} /> 
                </Button>
                <Button className="btn-circle"> 
                    <DrinkIcon fontSize="large" style={{ color: 'var(--white)' }} /> 
                </Button>
                <Button className="btn-circle"> 
                    <BathIcon fontSize="large" style={{ color: 'var(--white)' }} /> 
                </Button>
                <Button className="btn-circle"> 
                    <WalkIcon fontSize="large" style={{ color: 'var(--white)' }} /> 
                </Button>
                <Button className="btn-circle"> 
                    <PlayIcon fontSize="large" style={{ color: 'var(--white)' }} /> 
                </Button>
                <Button className="btn-circle"> 
                    <TrainIcon fontSize="large" style={{ color: 'var(--white)' }} /> 
                </Button>
	    	</div>
	    );
    }
}

export default Actions;