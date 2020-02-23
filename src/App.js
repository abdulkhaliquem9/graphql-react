import React from 'react';
import Features from './components/Features'
import FeatureList from './components/FeatureList'
import Measurements from './components/Measurements'

const App = () => (
  <div style ={{display:'flex', flexDirection:'column'}}>
    <div style={{ display: 'flex' }}>
      <Features />
      <FeatureList />
    </div>
    <Measurements/>
  </div>
);

export default App;
