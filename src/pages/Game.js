import '../App.css';
import React, { Component } from 'react';
import PageTitle from '../components/PageTitle.js';
import GameWindow from '../components/GameWindow.js';
import Banner from '../components/Banner.js';
import Actions from '../components/Actions.js';
import Status from '../components/Status.js';

class Game extends Component {

    MockPet = { // basic mock pet object to swap out when pet logic is ready
        name: "Blobby",
        type: "Blob",
        state: "idle",
        health: 80,
        hunger: 25
    }

    render() {
        return (
            <div className="App">
                <div className="Page">
                    <PageTitle />
                    <GameWindow page={'Game'}>
                        <Banner bannerMessage={this.MockPet.name + " the " + this.MockPet.type}/>
                        <div class="game-box">
                            <Actions />
                            <div class="poop-container"></div>
                            <div class="pet-container"></div>
                            <div class="thought-bubble-container"></div>
                            <Status health={this.MockPet.health} hunger={this.MockPet.hunger} />
                        </div>
                    </GameWindow>
                </div>
            </div>
        );
    }
}

export default Game;
