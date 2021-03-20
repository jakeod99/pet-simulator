import '../App.css';
import React from 'react';
import { Button } from 'reactstrap';
import EatIcon from '@material-ui/icons/Restaurant';
import DrinkIcon from '@material-ui/icons/LocalDrink';
import BathIcon from '@material-ui/icons/Bathtub';
import WalkIcon from '@material-ui/icons/DirectionsRun';
import PlayIcon from '@material-ui/icons/SportsBaseball';
import TrainIcon from '@material-ui/icons/Sports';

import * as Pet from '../data/Pet.js';

function Actions(props) {
    return (
        <div className="game-display-column">
            <Button className="btn-circle" onClick={() => props.petInteraction(Pet.STATES.EAT)}> 
                <EatIcon fontSize="large" style={{ color: 'var(--white)' }} /> 
            </Button>
            <Button className="btn-circle" onClick={() => props.petInteraction(Pet.STATES.DRINK)}> 
                <DrinkIcon fontSize="large" style={{ color: 'var(--white)' }} /> 
            </Button>
            <Button className="btn-circle" onClick={() => props.petInteraction(Pet.STATES.BATH)}> 
                <BathIcon fontSize="large" style={{ color: 'var(--white)' }} /> 
            </Button>
            <Button className="btn-circle" onClick={() => props.petInteraction(Pet.STATES.WALK)}> 
                <WalkIcon fontSize="large" style={{ color: 'var(--white)' }} /> 
            </Button>
            <Button className="btn-circle" onClick={() => props.petInteraction(Pet.STATES.PLAY)}> 
                <PlayIcon fontSize="large" style={{ color: 'var(--white)' }} /> 
            </Button>
            <Button className="btn-circle" onClick={() => props.petInteraction(Pet.STATES.TRAIN)}> 
                <TrainIcon fontSize="large" style={{ color: 'var(--white)' }} /> 
            </Button>
        </div>
    );
}

export default Actions;