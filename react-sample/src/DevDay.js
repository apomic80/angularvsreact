import React, { Component } from 'react';

class DevDay extends Component {

 constructor(props) {
    super(props);
    this.state = {selected: false};
    this.select = this.select.bind(this);
 }

 select() {
   this.props.onSelect(this.props.id);
 }

  render() {
      if(this.props.select) {
        return <h1 onClick={this.select}>Dev Day {this.props.city}</h1>;
      }
      else {
        return <h2 onClick={this.select}>Dev Day {this.props.city}</h2>;          
      }
  }
}

export default DevDay;