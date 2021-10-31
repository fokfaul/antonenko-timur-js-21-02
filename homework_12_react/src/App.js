import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Shop} from './components/sections/Shop';

class App extends React.Component {
    render(){
      return (
        <div className="App">
          <Header/>
          <Shop/>
        </div>
      );
    }
}

export default App;
