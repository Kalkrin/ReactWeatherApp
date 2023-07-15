import React from 'react';
import './App.css';
import NavBar from './components/CardContainer';
import CardContainer from './components/CardContainer';
import Banner from './components/Banner';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="container">
        <SearchBox />
      </div>
      <div className='flexContainer'>
        <CardContainer/>
      </div>
    </div>
  );
}

export default App;
