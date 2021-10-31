import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Shop} from './components/sections/Shop';
import {Footer} from './components/footer/Footer';

class App extends React.Component {
    render(){
      return (
        <div className="App">
          <Header/>
          <Shop/>
          <Footer/>
        </div>
      );
    }
}

export default App;
