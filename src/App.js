import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import ChipContainer from './components/ChipContainer';



function App() {
  return (
    <div>
      <div className="fullheight">
        <Nav />
        <Header/>
        <ChipContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
