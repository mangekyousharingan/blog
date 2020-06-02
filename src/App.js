import React from 'react';
import Particles from 'react-particles-js';
import './App.css'


const particleConfig = require('./particlesjs-config.json')

function App() {
  return (
      <div className="App">
        <Particles className="particle-canvas" params={particleConfig}/>
      </div>
  );
}

export default App;
