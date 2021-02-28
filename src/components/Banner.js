import '../App.css';
import React, { Component } from 'react';
import PetsIcon from '@material-ui/icons/Pets';

class Banner extends Component {
	render(){
	    return (
	    	<div className="banner">
	    		<PetsIcon fontSize="large" style={{ color: 'white' }} />
	    		<p className="banner-text"> {this.props.bannerMessage} </p>
	    		<PetsIcon fontSize="large" style={{ color: 'white' }} />
	    	</div>
	    );
    }
}

export default Banner;