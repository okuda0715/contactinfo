import React, { Component } from 'react';
import './App.css';
import Form from './Form';

class App extends Component {



  addInfo = (newfName, newlName, newAddress, newCity, newState, newzipCode, newCountry, newEmail) => {
    
  }



  render() {
    return (
      <div className="App">
        <div>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
