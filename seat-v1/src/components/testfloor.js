import React, {Component} from 'react'


class TestMap extends Component {

  seatStatus={};

  constructor(props) {
      super(props);

      this.state = {data:[]};
  }

  myFunc(){
    
  }
  componentDidMount(){
      fetch('http://0.0.0.0:3001/api/listings')
        .then(res => res.json())
        .then(data => this.setState({ data }));

  }

  render () { 

    console.log(this.state.data); 
    this.state.data.map( data => {
       if (data.status == "occ") {
          this.seatStatus[data.id] = "#D46F6A"
        }
     else if (data.status == "uno") {
        this.seatStatus[data.id] = "#D4B26A"
     }
     else {
      this.seatStatus[data.id] = "#FFFFFF"
     }

    }); 



    return ( 
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="600px"
           height="400px" viewBox="0 0 600 400" enable-background="new 0 0 600 400">
        <g id="Layer_1">
        </g>
        <g id="Layer_3">
          <rect x="-0.5" y="0.5" fill="#417C81" stroke="#000000" stroke-miterlimit="10" width="601" height="400"/>
        </g>
        <g id="Layer_2">
          <rect x="548.5" y="32.5" fill={this.seatStatus["0"]} stroke="#000000" stroke-miterlimit="10" width="52" height="52"/>
          <rect x="548.5" y="84.5" fill={this.seatStatus["1"]} stroke="#000000" stroke-miterlimit="10" width="52" height="52"/>
          <rect x="548.5" y="136.5" fill={this.seatStatus["2"]} stroke="#000000" stroke-miterlimit="10" width="52" height="52"/>
          <rect x="548.5" y="188.5" fill={this.seatStatus["3"]} stroke="#000000" stroke-miterlimit="10" width="52" height="52"/>
          <rect x="548.5" y="240.5" fill={this.seatStatus["4"]} stroke="#000000" stroke-miterlimit="10" width="52" height="52"/>
        </g>
        </svg>

    )
    
  }
}

export default TestMap
