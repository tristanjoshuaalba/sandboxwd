import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox.js';
import {robots} from './robots.js';
import './App.css';

// The App Component has two states: robots and searchfield
// States are what changes the APP
// And since App is a class, they can use methods like constructor and render to access the states
// Virtual DOM just collects the states to render and pass them down as props as components
class App extends Component {
  // 1. State Declaration
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }
  // 2. State Modification function via DOM events 
  onSearchChange = (event) => {
      this.setState({searchfield: event.target.value})
      // console.log(event.target.value);
      // console.log(filteredRobots)
  }

  // 3. Render
  render() {
    // 3.1 Preprocessing of state
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      // 3.2. Rendering using updated state
      <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange = {this.onSearchChange}/>
          <CardList robots = {filteredRobots}/>
      </div>   
      )
  }
};


export default App;
