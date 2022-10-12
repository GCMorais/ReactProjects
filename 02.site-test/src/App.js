import React from 'react';
import Nav from '../src/components/Nav';
import Firstpage from '../src/components/Firstpage';
import SecondPage from './components/Secondpage';
import Thirdpage from './components/Thirdpage';


function App() {
  return (
    <div className="ContainerArea">
      <Nav />
      <Firstpage />
      <SecondPage />
      <Thirdpage />
      
    </div>
  );
}

export default App;
