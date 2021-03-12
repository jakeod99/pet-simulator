import '../App.css';
import React, { Component } from 'react';
import PageTitle from '../components/PageTitle.js';
import GameWindow from '../components/GameWindow.js';
import Banner from '../components/Banner.js';
import Actions from '../components/Actions.js';
import Status from '../components/Status.js';
import ThoughtBubble from '../components/ThoughtBubble.js';
import { FaPoop } from "react-icons/fa"; // (F)ont (a)wesome (Poop) - this name cannot change
import Animations from '../animations.js'

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pet: props.location.state.pet
        };
    }

    buildPetDisplay() {
        const { name, animal } = this.state.pet;
        return `${name} the ${animal[0].toUpperCase() + animal.substr(1)}`;
    }

    render() {
        if (!this.state.pet) {
            console.log(this.props);
            return 'Wait... where\'s your pet?! :(';
        }

        const { pet } = this.state;
        console.log(pet);
        return (
            <div className="App">
                <div className="Page">
                    <PageTitle />
                    <GameWindow page={'Game'}>
                        <Banner bannerMessage={this.buildPetDisplay()}/>
                        <div className="game-box">
                            <div className="left-game">
                                <Actions />
                                <div className={"poop-container " + (pet.poop ? "" : "hide")}>
                                    <FaPoop size="3em" style={{ color: 'var(--brown)' }} /> 
                                </div>
                            </div>
                            <div className="center-game">
                                <ThoughtBubble thought={pet.thought} />
                                <img src={Animations[pet.animal][pet.state]} className="pet" alt="your simulated pet" />
                            </div>
                            <div className="right-game">
                                <Status health={pet.health} hunger={pet.hunger} />
                            </div>
                        </div>
                    </GameWindow>
                </div>
            </div>
        );
    }
}

export default Game;
