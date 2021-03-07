import '../App.css';
import React, { Component } from 'react';
import PageTitle from '../components/PageTitle.js';
import GameWindow from '../components/GameWindow.js';
import Banner from '../components/Banner.js';
import Actions from '../components/Actions.js';
import Status from '../components/Status.js';
import { FaPoop } from "react-icons/fa"; // (F)ont (a)wesome (Poop) - this name cannot change
import EatIcon from '@material-ui/icons/Restaurant';
import DrinkIcon from '@material-ui/icons/LocalDrink';
import BathIcon from '@material-ui/icons/Bathtub';
import WalkIcon from '@material-ui/icons/DirectionsRun';
import PlayIcon from '@material-ui/icons/SportsBaseball';
import TrainIcon from '@material-ui/icons/Sports';
import HappyIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SadIcon from '@material-ui/icons/SentimentDissatisfied';

class Game extends Component {

    MockPet = { // basic mock pet object until pet logic is ready to swap in
        name: "Blobby",
        type: "Blob",
        state: "idle",
        poop: true,
        thought: "happy",
        health: 80,
        hunger: 25
    }

    thoughtBubble() { // thoughts here will likely change, these are just Jake's placeholders
        switch (this.MockPet.thought) {
            case "eat":
                return (
                    <div class="thought-bubble">
                        <EatIcon className="thought" fontSize="large" /> 
                    </div>
                );
            case "drink":
                return (
                    <div class="thought-bubble">
                        <DrinkIcon className="thought" fontSize="large" /> 
                    </div>
                );
            case "bath":
                return (
                    <div class="thought-bubble">
                        <BathIcon className="thought" fontSize="large" /> 
                    </div>
                );
            case "walk":
                return (
                    <div class="thought-bubble">
                        <WalkIcon className="thought" fontSize="large" /> 
                    </div>
                );
            case "play":
                return (
                    <div class="thought-bubble">
                        <PlayIcon className="thought" fontSize="large" /> 
                    </div>
                );
            case "train":
                return (
                    <div class="thought-bubble">
                        <TrainIcon className="thought" fontSize="large" /> 
                    </div>
                );
            case "happy":
                return (
                    <div class="thought-bubble">
                        <HappyIcon className="thought" fontSize="large" /> 
                    </div>
                );
            case "sad":
                return (
                    <div class="thought-bubble">
                        <SadIcon className="thought" fontSize="large" /> 
                    </div>
                );
            default:
                return (
                    <div class="thought-bubble"></div>
                );
        }
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
                            <div class={"poop-container " + (this.MockPet.poop ? "" : "hide")}>
                                <FaPoop size="3em" style={{ color: 'var(--brown)' }} /> 
                            </div>
                            <div class="pet-container">
                                <div class={"thought-bubble-container " + (this.MockPet.thought === "none" ? "hide" : "")}>
                                    { this.thoughtBubble() }
                                </div>
                            </div>
                            <Status health={this.MockPet.health} hunger={this.MockPet.hunger} />
                        </div>
                    </GameWindow>
                </div>
            </div>
        );
    }
}

export default Game;
