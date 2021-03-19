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

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pet: props.location.state.pet
        };

        this.cleanPoop = this.cleanPoop.bind(this);
        this.clickPet = this.clickPet.bind(this);
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

    clickPet() {
        let pet = this.state.pet;
        pet.petAnimal();
        this.setState({pet: pet});
        setTimeout(pet.recovered.bind(pet), 1000);  //the pet-gif plays for 1 second
        this.setState({pet: pet});
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
                                <Actions/>
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
