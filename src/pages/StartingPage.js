import '../App.css';
import React, {Component} from 'react';
import GameWindow from '../components/GameWindow.js'
import Example from '../components/PetCarousel.js'
import Banner from '../components/Banner.js'
import PageTitle from '../components/PageTitle.js'

class StartingPage extends Component {


    render() {
        return ([
            <div className="App">

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                    <div style={{textAlign: 'center'}}>
                        <p>Starting Page</p>
                        <PageTitle/>
                    </div>

                </div>
                <div className="StartingPage" class="Page" style={{minHeight: 0}}>
                    <GameWindow page={'Adoption'}>
                        <Banner bannerMessage={'Adopt a Pet!'}/>
                        <br/><br/>
                        <Example/>
                    </GameWindow>

                </div>
            </div>
        ]);
    }
}

export default StartingPage;
