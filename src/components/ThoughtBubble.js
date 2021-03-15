import '../App.css';
import React, { Component } from 'react';
import EatIcon from '@material-ui/icons/Restaurant';
import DrinkIcon from '@material-ui/icons/LocalDrink';
import BathIcon from '@material-ui/icons/Bathtub';
import WalkIcon from '@material-ui/icons/DirectionsRun';
import PlayIcon from '@material-ui/icons/SportsBaseball';
import TrainIcon from '@material-ui/icons/Sports';
import HappyIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SadIcon from '@material-ui/icons/SentimentDissatisfied';

class ThoughtBubble extends Component {

    thoughtBubble() { // thoughts here will likely change, these are just Jake's placeholders
        switch (this.props.thought) {
            case "eat":
                return (
                    <div className="thought-bubble" data-testid="thought-eat">
                        <EatIcon className="thought" fontSize="large" /> 
                    </div>
                );
            case "drink":
                return (
                    <div className="thought-bubble" data-testid="thought-drink">
                        <DrinkIcon className="thought" fontSize="large" /> 
                    </div>
                );
            case "bath":
                return (
                    <div className="thought-bubble" data-testid="thought-bath">
                        <BathIcon className="thought" fontSize="large" /> 
                    </div>
                );
            case "walk":
                return (
                    <div className="thought-bubble" data-testid="thought-walk">
                        <WalkIcon className="thought" fontSize="large" /> 
                    </div>
                );
            case "play":
                return (
                    <div className="thought-bubble" data-testid="thought-play">
                        <PlayIcon className="thought" fontSize="large" /> 
                    </div>
                );
            case "train":
                return (
                    <div className="thought-bubble" data-testid="thought-train">
                        <TrainIcon className="thought" fontSize="large" /> 
                    </div>
                );
            case "happy":
                return (
                    <div className="thought-bubble" data-testid="thought-happy">
                        <HappyIcon className="thought" fontSize="large" /> 
                    </div>
                );
            case "sad":
                return (
                    <div className="thought-bubble" data-testid="thought-sad">
                        <SadIcon className="thought" fontSize="large" /> 
                    </div>
                );
            default:
                return (
                    <div className="thought-bubble hide" data-testid="thought-hidden"></div>
                );
        }
    }

	render(){
	    return (
            <div className="thought-bubble-container">
                { this.thoughtBubble() }
            </div>
	    );
    }
}

export default ThoughtBubble;
