import React, {Component} from 'react';
import './App.css';

// Components
import Controls from './components/Controls';
import SliderInput from './components/SliderInput';
import TimerDisplay from './components/TimerDisplay';


class App extends Component {

  render() {
    return(
      <div className = 'center w-third vh-75 ma5 bg-light-red br3 b-dashed shadow-5'>
        <h1 className = 'f2 tc white pt3'>Pomodoro</h1>
        <TimerDisplay/>
        <SliderInput/>
        <Controls/>
      </div>
    )
  }

}

export default App;
