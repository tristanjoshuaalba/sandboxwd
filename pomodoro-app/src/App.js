import React, {Component} from 'react';
// import CardList from '../../MyFirstReactApp/robofriends/src/components/CardList';
import './App.css';

// Components
import Controller from './components/Controls';
import SliderInput from './components/SliderInput';
import TimerDisplay from './components/TimerDisplay';



class App extends Component {
  constructor() {
    super();
    this.state = {
      resetStatus: 0,
      resetFocusTime: 25,
      resetRestTime: 5,
      focusTime: 25,
      restTime: 5,
      status: 'pause'
      // searchfield: ''
    }
  }

  onfocusTimeChange = (event) => {
    this.setState({focusTime: event.target.ariaValueNow})
    this.setState({resetFocusTime: event.target.ariaValueNow})
    // console.log(event.target.ariaValueNow)
  }

  onrestTimeChange = (event) => {
    this.setState({restTime: event.target.ariaValueNow})
    this.setState({resetRestTime: event.target.ariaValueNow})
  }



 
  // startTimer = () => {
  //    for (const i = 0; i < 10; i++){
  //      setTimeout(()=>{console.log("hello")}, 1000)
  //    }
  // }

  clockTick = (timeleft) => {
    const timer = setInterval(()=> {
      timeleft--;
      if(this.state.resetStatus === 0){
      this.setState({focusTime:timeleft})}
      
      if(timeleft<=0 | this.state.status === 'pause' | this.state.resetStatus == 1){
        clearInterval(timer);
      }}, 1000);
    }
 
  onButtonClick = (event) => {
    if(this.state.status === 'pause'){
      this.setState({status: 'play'})

        let timeleft = this.state.focusTime;
        this.clockTick(timeleft)
        

      
    } else {
      this.setState({status: 'pause'})
      // clearInterval()
      // clearInterval(timer);
    }
    console.log(this.state.status)
  }

  onResetClick = (event) => {
    if(this.state.resetStatus === 0) {
      this.setState({resetStatus: 1})
      this.setState({focusTime: this.state.resetFocusTime})
      this.setState({restTime: this.state.resetRestTime})

      // To do: Change Play/Pause Button with Reset
    } 

    

    setTimeout(()=> {this.setState({resetStatus: 0})}, 1000)
    
  }


  render() {
    // let timeleft = 100;
    // const timer = setInterval(()=>{
    //   timeleft--;
    //   console.log(timeleft)
    
    // if(timeleft<=0){
    //   clearInterval(timer);
    // }}, 1000);
    

    return(
      <div className = 'center w-third vh-75 ma5 bg-light-red br3 b-dashed shadow-5'>
        <h1 className = 'f2 tc white pt3'>Pomodoro</h1>
        <TimerDisplay focusTime = {this.state.focusTime} restTime = {this.state.restTime}/>
        <SliderInput focusTime = {this.onfocusTimeChange} restTime = {this.onrestTimeChange}/>
        <Controller status = {this.onButtonClick} reset = {this.onResetClick} statusLabel = {this.state.status}/>
      </div>
    )
  }

}


export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       focusTime: focusTime,
//       restTime: restTime,
//     }
//   }

//   onfocusTimeChange = (event) => {
//     this.setState({focusTime: event.target.value})
//   }

//   onrestTimeChange = (event) => {
//     this.setState({restTime: event.target.value})
//   }

//   render() {
//     const focusTime = this.state.focusTime 
//     const restTime = this.state.restTime
//     return(
//       <div className = 'center w-third vh-75 ma5 bg-light-red br3 b-dashed shadow-5'>
//         <h1 className = 'f2 tc white pt3'>Pomodoro</h1>
//         <TimerDisplay time = {focusTime, restTime}/>
//         <SliderInput onfocusTimeChange = {focusTime} onrestTimeChange = {restTime}/>
//         <Controls/>
//       </div>
//     )
//   }

// }

// export default App;
