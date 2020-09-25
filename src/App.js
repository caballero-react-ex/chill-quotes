import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import ChipContainer from './components/ChipContainer';
import Modal from './components/Modal';

function App() {
  return (
    <div>
      <div className="fullheight">
        <Nav />
        <Header/>
        <ChipContainer />
        <Modal/>
      </div>
     
      <Footer />
    </div>
  );
}

export default App;
