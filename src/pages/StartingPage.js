import '../App.css';
import React, {Component} from 'react';
import GameWindow from '../components/GameWindow.js'
import PetCarousel from '../components/PetCarousel.js'
import Banner from '../components/Banner.js'
import PageTitle from '../components/PageTitle.js'
import NameInputBox from "../components/NameInputBox";

class StartingPage extends Component {


    render() {
        return ([
            <div className="App">
                <div className="Page">
                    <div style={{textAlign: 'center'}}>
                        <PageTitle/>
                    </div>
                    <GameWindow page={'Adoption'}
                                style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <Banner bannerMessage={'Adopt a Pet!'}/>
                        <br/><br/>
                        <div className={"carouselContainer"}>
                            <PetCarousel/>
                        </div>
                        <br/>
                        <div className={"inputContainer"}>
                            <NameInputBox/>
                        </div>
                    </GameWindow>
                </div>
            </div>
        ]);
    }
}

export default StartingPage;
