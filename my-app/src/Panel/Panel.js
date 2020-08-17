import React from 'react';
import './Panel.css';

class Panel extends React.Component {

    render() {
      const { Location, Temp, Weather,Wind,Humidity} = this.props.panel;
      return (
        <div className="panel">
            <div className="location-cont">{Location}</div>
            <div className="top-element first-column">
              <div className="bottom-element">{Temp}</div>
              <div>{Weather}</div>
            </div>
            <div className="top-element second-column">
              <div className="bottom-element">Wind: {Wind}</div>
              <div>Humidity: {Humidity}</div>
            </div>
            <div></div>
        </div>                    
      )
    }
  }

export default Panel;
