import React from 'react';
import Features from './components/Features'
import FeatureList from './components/FeatureList'


const App = () => (
  <div>
    <div style={{ display: 'flex' }}>
      <Features />
      <FeatureList />
    </div>
  </div>
);

export default App;
