import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary'
// import {robots} from './robots.js';
import Scroll from '../components/Scroll.js';
import './App.css';
import {connect} from 'react-redux';
import {setSearchField} from '../actions,js';

// This is just syntax
const mapStateToProps = state => {
  return {
      searchField: state.searchRobots.searchField
  }
}

const mapDispatchtoProps = dispatch => {
  return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

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
      // searchfield: ''
    }
  }

  componentDidMount(){
    console.log(this.props.store.getState())
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
                        return response.json();
      })
      .then(users => {
        this.setState({robots:users})
      })
    
  }


  // 2. State Modification function via DOM events 
  // onSearchChange = (event) => {
      // this.setState({searchfield: event.target.value})
      // console.log(event.target.value);
      // console.log(filteredRobots)
  // }

  // 3. Render
  render() {
    // 3.1 Preprocessing of state
    // Destructuring so you can access the objects without repeating 
    const {robots, searchfield} = this.state;
    const {searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
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

// connect() accepts 2 parameters
// Subscribe to any state changes in the redux store
export default connect(mapStateToProps, mapDispatchtoProps)(App);
