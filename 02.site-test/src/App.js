import React from 'react';
import Nav from '../src/components/Nav';
import Firstpage from '../src/components/Firstpage';
import SecondPage from './components/Secondpage';



function App() {
  return (
    <div className="ContainerArea">
      <Nav />
      <Firstpage />
      <SecondPage />
    </div>
  );
}

export default App;
