import React, { Component } from 'react';
import './App.css';
import {WeatherBlock} from "./сomponents/dumb/WeatherBlock/WeatherBlock";

export const LIGHT='light';
export const DARK='dark';

class App extends Component {

  state={
    mode: LIGHT
  };

  componentDidMount(){
    const hours = new Date().getHours();
    const isDay = (hours > 6) && (hours < 21);
    this.setState({
      mode: isDay ? LIGHT : DARK
    })
  }

  changeMode = () => this.setState(prevState => ({mode: prevState.mode === LIGHT ? DARK : LIGHT}));

  render() {
    return (
      <div className={`App ${this.state.mode === LIGHT ? 'app_light' : 'app_dark'}`}>
        <div onClick={this.changeMode}>
          <p className={`${this.state.mode === LIGHT ? 'clickTextLight' : 'clickTextDark'}`}>
            Click to change theme:
          </p>
          <WeatherBlock city={'Санкт-Петербург'} mode={this.state.mode}/>
        </div>
      </div>
    );
  }
}

export default App;
