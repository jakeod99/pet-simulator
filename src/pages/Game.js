import '../App.css';
import React, {Component} from 'react';
import PageTitle from '../components/PageTitle.js';
import GameWindow from '../components/GameWindow.js';
import Banner from '../components/Banner.js';
import Actions from '../components/Actions.js';
import Status from '../components/Status.js';
import ThoughtBubble from '../components/ThoughtBubble.js';
import {FaPoop} from "react-icons/fa"; // (F)ont (a)wesome (Poop) - this name cannot change
import Animations from '../animations.js'

import * as Pet from '../data/Pet';

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pet: props.location.state.pet
        };

        this.cleanPoop = this.cleanPoop.bind(this);
        this.clickPet = this.clickPet.bind(this);
        this.petInteraction = this.petInteraction.bind(this);
    }

    /**
     * This is how to create a ticker that calls a method every second
     */
    componentDidMount() {
        this.interval = setInterval(() => this.petTimer(), 1000);
    }

    /**
     * Need to unmount your intervals when finished to prevent memory leakage
     */
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    /**
     * OnClick event for the Poop icon. Calls the cleanedPoop() method in pet and updates the pet state.
     */
    cleanPoop() {
        let pet = this.state.pet;
        pet.cleanedPoop();
        this.setState({pet: pet});
    }

    /**
     * All pet interactions funnel through here to change state, update status, and follow their runtime
     * @param state - A value from the STATES array in Pet.js
     */
    petInteraction(state) {
        let pet = this.state.pet;
        let duration = Animations[pet.animal][state].runtime;
        pet.updateState(state, duration);
        this.setState({pet: pet});
        setTimeout(pet.idle.bind(pet), duration);
        this.setState({pet: pet});
    }

    /**
     * Triggered by clicking pet
     */
    clickPet() {
        this.petInteraction(Pet.STATES.PET)
    }

    /**
     * Ticker method for seeing if the pet needs updated. Calls updatePet() method in pet and updates the pet state if necessary.
     */
    petTimer() {
        let pet = this.state.pet;
        let petUpdated = pet.updatePet()
        if (petUpdated) {
            this.setState({pet: pet})
        }
    }

    buildPetDisplay() {
        const {name, animal} = this.state.pet;
        return `${name} the ${animal[0].toUpperCase() + animal.substr(1)}`;
    }

    render() {
        if (!this.state.pet) {
            return 'Wait... where\'s your pet?! :(';
        }

        const {pet} = this.state;
        return (
            <div className="App">
                <div className="Page">
                    <PageTitle/>
                    <GameWindow page={'Game'}>
                        <Banner bannerMessage={this.buildPetDisplay()}/>
                        <div className="game-box">
                            <div className="left-game">
                                <Actions petInteraction={this.petInteraction}/>
                                <div className={"poop-container " + (pet.poop ? "" : "hide")}
                                     data-testid="poop-container">
                                    <FaPoop size="3em" style={{color: 'var(--brown)'}} onClick={this.cleanPoop}
                                            data-testid="poop"/>
                                </div>
                            </div>
                            <div className="center-game">
                                <ThoughtBubble thought={pet.thought}/>
                                <img src={Animations[pet.animal][pet.state].gif} onClick={this.clickPet} className="pet"
                                     alt="your simulated pet"/>
                            </div>
                            <div className="right-game">
                                <Status health={pet.health} hunger={pet.hunger}/>
                            </div>
                        </div>
                    </GameWindow>
                </div>
            </div>
        );
    }
}

export default Game;
