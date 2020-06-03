import React from 'react';
import Particles from 'react-particles-js';
import Countdown from 'react-countdown';
import './App.css'


const particleConfig = require('./particlesjs-config.json')
const finalDay = new Date('2020-06-10T12:00:00')

function App() {
  return (
      <div className="App">
        <Particles className="particle-canvas" params={particleConfig}/>
        <div className="countdown">
          <Countdown date={finalDay} />
        </div>
      </div>
  );
}

export default App;
