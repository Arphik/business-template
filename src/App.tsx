import React from 'react';

import './App.scss';
import Menu from './components/Menu';
import Image from './components/Image';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Content/>
      <Image/>
      <a className="freepik__copyrights" href='https://www.freepik.com/psd/business'>Business psd created by freepik - www.freepik.com</a>
    </div>
  );
}

export default App;