import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import {SeatsView} from './Components/SeatsView/seats-view.component'


class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: []

    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render(){


    return (
      <div className="App">
       <SeatsView monsters={this.state.monsters}/>
       {/* { this.state.monsters.map(monsters => <h1 key={monsters.id}>  { monsters.name}</h1> ) } */}
        {/* </CardList>  */}
      
      {/* {CardList} */}
    </div>
    )
  }
}

export default App;
