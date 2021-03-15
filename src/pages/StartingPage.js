import '../App.css';
import React, { Component } from 'react';
import GameWindow from '../components/GameWindow.js'
import PetCarousel from '../components/PetCarousel.js'
import Banner from '../components/Banner.js'
import PageTitle from '../components/PageTitle.js'
import NameInputBox from "../components/NameInputBox";

import * as Pet from '../data/Pet';

class StartingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPet: null,
            petName: '',
        };

        // ensure this is bound correctly after passing to child component
        this.petTypeHandler = this.petTypeHandler.bind(this);
        this.petNameHandler = this.petNameHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.getState = this.getState.bind(this);
    }

    petTypeHandler(val) {
        this.setState({
            selectedPet: val
        });
    }

    petNameHandler(event) {
        this.setState({
            petName: event.target.value
        });
    }

    getState() {
        return this.state;
    }

    submitHandler() {
        const adoptedPet = Pet.adoptPet(this.state.selectedPet, this.state.petName);
        this.props.history.push({
            pathname: '/game',
            state: { pet: adoptedPet },
        });
    }

    render() {
        return (
            <div className="App">
                <div className="Page">
                    <div style={{ textAlign: 'center' }}>
                        <PageTitle />
                    </div>
                    <GameWindow page={'Adoption'}
                        style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
                        key='gameWindow'>
                        <Banner bannerMessage={'Adopt a Pet!'} />
                        <br /><br />
                        <div className={"carouselContainer"}>
                            <PetCarousel
                                handler={this.petTypeHandler}
                                getState={this.getState} />
                        </div>
                        <br />
                        <div className={"inputContainer"}>
                            <NameInputBox
                                handler={this.petNameHandler}
                                submitHandler={this.submitHandler}
                                getState={this.getState} />
                        </div>
                    </GameWindow>
                </div>
            </div>
        );
    }
}

export default StartingPage;
