import '../App.css';
import React, { Component } from 'react';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import { Button } from 'reactstrap';
import PageTitle from '../components/PageTitle';
import GameWindow from '../components/GameWindow';
import Banner from '../components/Banner';

class Styles extends Component {
    render() {
        return (
            <div className="App">
                <div className="Page">
                    <div style={{height: 'fitContent', width: '70%', borderStyle: 'solid', padding: '20px', borderRadius: '20px', backgroundColor: '#FFFF'}}>
                        <div>
                            <div style={{textAlign: 'center'}} >
                                <h1> Style References </h1>
                            </div>
                            <i>
                                This is a reference page for the styles we will be using for the cite. Reference this for questions on how to set up
                                various components as well as getting fonts and colors.
                            </i>
                        </div>
                    </div>

                    <br />

                    <div style={{height: 'fitContent', width: '70%', borderStyle: 'solid', padding: '20px', borderRadius: '20px', backgroundColor: '#FFFF'}}>
                        <div>
                            <h5>Our Color Scheme</h5>
                            <br />
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <div style={{height: '50px', width: '50px', borderStyle: 'solid', borderRadius: '10px', backgroundColor: '#FDE6E6'}} />
                                <div style={{height: '50px', width: '50px', borderStyle: 'solid', borderRadius: '10px', backgroundColor: '#FFA18F'}} />
                                <div style={{height: '50px', width: '50px', borderStyle: 'solid', borderRadius: '10px', backgroundColor: '#A0CED9'}} />
                                <div style={{height: '50px', width: '50px', borderStyle: 'solid', borderRadius: '10px', backgroundColor: '#C6F4D0'}} />
                                <div style={{height: '50px', width: '50px', borderStyle: 'solid', borderRadius: '10px', backgroundColor: '#FFFFFF'}} />
                                <div style={{height: '50px', width: '50px', borderStyle: 'solid', borderRadius: '10px', backgroundColor: '#111111'}} />
                            </div>
                        </div>
                    </div>

                    <br />

                    <div style={{height: 'fitContent', width: '70%', borderStyle: 'solid', padding: '20px', borderRadius: '20px', backgroundColor: '#FFFF'}}>
                        <div>
                            <h5>Our Fonts</h5>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <p style={{fontFamily: 'Acme, sans-serif', fontSize: '30px'}}> Acme </p>
                                <p style={{fontFamily: 'Montserrat, sans-serif', fontSize: '30px'}}> Montserrat </p>
                            </div>
                        </div>
                    </div>

                    <br />

                    <div style={{height: 'fitContent', width: '70%', borderStyle: 'solid', padding: '20px', borderRadius: '20px', backgroundColor: '#FFFF'}}>
                        <div>
                            <h5>Our Libraries</h5>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <div style={{textAlign: 'center'}} >
                                    <a style={{fontSize: '25px'}} href="https://reactstrap.github.io/components/alerts/">Reactstrap</a>
                                    <br />
                                    <Button> Button </Button>
                                </div>
                                <div style={{textAlign: 'center'}}>
                                    <a style={{fontSize: '25px'}} href="https://material-ui.com/components/material-icons/">Material Icons</a>
                                    <br />
                                    <Button className="btn-circle"> <SportsBaseballIcon fontSize="large" style={{ color: 'white' }} /> </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />

                    <div style={{height: 'fitContent', width: '70%', borderStyle: 'solid', padding: '20px', borderRadius: '20px', backgroundColor: '#FFFF'}}>
                        <div>
                            <h5>Shared Components</h5>
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                <div style={{textAlign: 'center'}} >
                                    <p>Page Title</p>
                                    <PageTitle />
                                </div>
                                <br />
                                <div style={{textAlign: 'center'}} >
                                    <p>Game Windows and Banners</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />

                    <GameWindow page={'Adoption'}>
                        <Banner bannerMessage={'Adopt a Pet!'}/>  
                    </GameWindow>

                    <br/>

                    <GameWindow page={'Game'}>
                        <Banner bannerMessage={'Stanley the Dog'}/>
                    </GameWindow>

                    <br/>
                </div>
            </div>
        );
    }
}

export default Styles;
