import React from 'react';
import Nav from '../src/components/Nav';
import Firstpage from '../src/components/Firstpage';
import SecondPage from './components/Secondpage';
import Thirdpage from './components/Thirdpage';
import Fourthpage from './components/Fourthpage';
import Fifithpage from './components/Fifithpage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="ContainerArea">
      <Nav />
      <Firstpage />
      <SecondPage />
      <Thirdpage />
      <Fourthpage />
      <Fifithpage />
      <Footer />
    </div>
  );
}

export default App;
