import React from 'react';
import './App.css';
import Panel from '../Panel/Panel';

const WeatherData = {
  Location: "krakow",
  Temp: "25C", 
  Weather: "windy",
  Wind: "5kmh",
  Humidity: "50%",
}

class App extends React.Component {

  getData() {
    console.log("CIPSKO");
  };

  render() {
    return (
      <div className="main-cont">
  
      <input type="text" name="name" />
      <button onClick={this.getData}>Wyślij</button>
  
       <Panel panel={WeatherData}></Panel>
       <Panel panel={WeatherData}></Panel>
       <Panel panel={WeatherData}></Panel>
      </div>
    );
  }
}

export default App;
