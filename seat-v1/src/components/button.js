import React, {Component} from 'react'
import Button from 'simple-react-button'

class FloorButton extends Component {

	clicked() {

	}

	render() {

        return (
    		<div>
            	<Button 
            	color="#B1ECE1" 
            	full style={{fontSize: '13px'}}>
            	//onClick() = {this.clicked()}> 
        		Floor1</Button>   

        		<button 
            	color="#B1ECE1" 
            	full style={{fontSize: '13px'}}>
            	//onClick() = {this.clicked()}> 
        		Floor2</button>


        		<button 
            	color="#B1ECE1" 
            	full style={{fontSize: '13px'}}>
            	//onClick() = {this.clicked()}> 
        		Floor3</button>

        		<button 
            	color="#B1ECE1" 
            	full style={{fontSize: '13px'}}>
            	//onClick() = {this.clicked()}> 
        		Floor4</button>


        		<button 
            	color="#B1ECE1" 
            	full style={{fontSize: '13px'}}>
            	//onClick() = {this.clicked()}> 
        		Floor5</button>

        		<button 
            	color="#B1ECE1" 
            	full style={{fontSize: '13px'}}>
            	//onClick() = {this.clicked()}> 
        		Floor6</button>
            </div>

        )
	}
}

export default FloorButton