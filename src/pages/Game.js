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

    MockPet = { // basic mock pet object until pet logic is ready to swap in
        name: "Blobby",
        type: "blob",
        state: "idle",
        poop: true,
        thought: "happy",
        health: 80,
        hunger: 25
    }

    render() {
        let displayName = this.MockPet.name + " the " + this.MockPet.type[0].toUpperCase() + this.MockPet.type.substr(1);

        return (
            <div className="App">
                <div className="Page">
                    <PageTitle />
                    <GameWindow page={'Game'}>
                        <Banner bannerMessage={displayName}/>
                        <div class="game-box">
                            <div class="left-game">
                                <Actions />
                                <div class={"poop-container " + (this.MockPet.poop ? "" : "hide")}>
                                    <FaPoop size="3em" style={{ color: 'var(--brown)' }} /> 
                                </div>
                            </div>
                            <div class="center-game">
                                <ThoughtBubble thought={this.MockPet.thought} />
                                <img src={Animations[this.MockPet.type][this.MockPet.state]} class="pet" alt="your simulated pet" />
                            </div>
                            <div class="right-game">
                                <Status health={this.MockPet.health} hunger={this.MockPet.hunger} />
                            </div>
                        </div>
                    </GameWindow>
                </div>
            </div>
        );
    }
}

export default Game;
