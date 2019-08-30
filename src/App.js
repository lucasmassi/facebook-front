import React from 'react';
import './App.css';

import Menu from './components/Menu/Menu';
import Timeline from './components/Timeline/Timeline';

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Timeline />
    </React.Fragment>
  );
}

export default App;