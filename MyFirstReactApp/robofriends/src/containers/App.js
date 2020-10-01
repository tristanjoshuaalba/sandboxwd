import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary'
// import {robots} from './robots.js';
import Scroll from '../components/Scroll.js';
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
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
                        return response.json();
      })
      .then(users => {
        this.setState({robots:users})
      })
    
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
    // Destructuring so you can access the objects without repeating 
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    // Changed if-else to ternary conditionals to make it cleaner
    return !robots.length ?
     (<h1> Loading </h1>)
    : (
      // 3.2. Rendering using updated state
      <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange = {this.onSearchChange}/>

          <Scroll>
                <ErrorBoundary>
                       <CardList robots = {filteredRobots}/>
                </ErrorBoundary>
                
          </Scroll>
          
      </div>   
      )
    }
  
};

export default App;
