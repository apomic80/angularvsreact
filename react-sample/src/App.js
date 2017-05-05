import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DevDay from './DevDay'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      napoli: true,
      salerno: false,
      benevento: false
    };
    this.select = this.select.bind(this);
  }

  select(id) {
    this.setState({
      napoli: id=== 'napoli',
      salerno: id === 'salerno',
      benevento: id === 'benevento'
    });
  }

  render() {
    return (
      <div className="App">
       <DevDay id="napoli" select={this.state.napoli} onSelect={this.select} city="Napoli" />
       <DevDay id="salerno" select={this.state.salerno} onSelect={this.select} city="Salerno" />
       <DevDay id="benevento" select={this.state.benevento} onSelect={this.select} city="Benevento" />
      </div>
    );
  }
}

export default App;
