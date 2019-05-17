import React from 'react';
import styles from './WeatherBlock.module.scss';
import {DARK, LIGHT} from "../../../App";

export class WeatherBlock extends React.PureComponent{

  state={
    weather: '...'
  };

  componentDidMount(){
    const nowHours = new Date().getHours();
    this.setState({
      mode: (nowHours > 18 || nowHours < 6) ? DARK : LIGHT
    });
    fetch('https://api.openweathermap.org/data/2.5/weather?id=498817&appid=bcae149a17be581d7c3528ce08e41099')
      .then(res => res.json())
      .then(json => this.setState({
        weather: Math.floor(json.main.temp - 273.15)
      }));
  }

  changeMode = () => this.setState(prevState => ({mode: prevState.mode === LIGHT ? DARK : LIGHT}));

  render(){

    const { weather } = this.state;

    const { mode, city } = this.props;

    return(
      <div onClick={this.changeMode} className={`${styles.block} ${mode === LIGHT ? styles.day : styles.night}`}>
        {
          mode === LIGHT ?
            <div className={styles.sun}/>
            :
            <div className={styles.moon}/>
        }
        <div className={`${styles.cloud} ${styles.cloudFront}`}/>
        <div className={`${styles.cloud} ${styles.cloudBack}`}/>
        <div className={styles.text}>
          <span>{city}</span>
          <span className={styles.num}>{weather}°C</span>
        </div>
      </div>
    );
  }
}