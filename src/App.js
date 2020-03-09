import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import {SeatsView} from './Components/SeatsView/seats-view.component'
import BookingForm from './Components/BookingForm/form.component'



class App extends Component {
  constructor(){
    super();
    this.state = {
      longitude: null,
      latitude: null,
      userAddress: null,
      view: false,
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
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
  }

  getLocation(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
      }else {
      alert("Geolocation is not supported by this browser.");}}
      
  getCoordinates(position){
      this.setState({
      latitude: position.coords.latitude,
      longitude: 	position.coords.longitude
      })
  }

  componentDidMount(){
    //window.confirm('Private Jet Bookings would like to access your geolocation')
    this.getLocation()
    var i;
    for (i = 0; i< this.state.plane.length; i++){
      const numberofbooked = this.state.plane.filter((item) => item.status === "booked")
      const num = this.randomSeats();
      // if(num !== 4 && this.state.plane[num].status !== "booked"){
      //   if(numberofbooked.length < 3){
      //     let plane = this.state.plane
      //     let seat = {...plane[num]}
      //     seat.status = "booked";
      //     plane[num] = seat
      //     this.setState({
      //       plane, 
      //     })
      //   }
      // }

      if (this.state.networth !== '1 billion +'){
        if(num !== 0 && num !== 1 && num !== 2 && num !== 3 && num !== 4 && this.state.plane[num].status !== "booked"){
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
        else if (this.state.networth === '1 billion +') {
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
            }}



    }
    
   }

  randomSeats = () => Math.floor(Math.random() * 9)

  
  render(){
      // console.log(this.state)
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
