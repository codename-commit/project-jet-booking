import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import {SeatsView} from './Components/SeatsView/seats-view.component'
import BookingForm from './Components/BookingForm/form.component'

import Popup from "reactjs-popup";


class App extends Component {
  constructor(){
    super();
    this.state = {
      view: true,
      networth:"1 billion +",
      plane: [
        {id: 1, status:'available'},
        {id: 2,status:'available'},
        {id: 3,status:'available'},
        {id: 4,status:'available'},
        {id: 5,status:'available'},
        {id: 6,status:'available'},
        {id: 7,status:'available'},
        {id: 8,status:'available'},
        {id: 9, status:'available'}
      ]

    };
  }

  componentDidMount(){
    var i;
    for (i = 0; i< this.state.plane.length; i++){
      const numberofbooked = this.state.plane.filter((item) => item.status === "booked")
      const num = this.randomSeats();
      if(num !== 4 && this.state.plane[num].status !== "booked"){
        if(numberofbooked.length < 3){
          let plane = this.state.plane
          let seat = {...plane[num]}
          seat.status = "booked";
          plane[num] = seat
          this.setState({
            plane, 
          })
        }
      }
    }
    
   }

  randomSeats = () => Math.floor(Math.random() * 9)

  render(){

    const  {view, plane} = this.state
    return (
      <div className="App">
         
      {view  ? 
       <SeatsView plane={plane} onForm={()=> this.setState({view:false})} onSeat={(index) => alert(index)}/>
       :
       <BookingForm  onForm={()=> this.setState({view:true})} />}
       
    </div>
    )
  }
}

export default App;
