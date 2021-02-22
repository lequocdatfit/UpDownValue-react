import React, { Component } from 'react';
import UpDownBtn from './components/UpDownBtn';

class App extends Component{
  constructor() {
    super();
    this.state = {
      globalValue : 0,
    }
  }

  handleBtnUpClicked() {
    this.setState({
      globalValue: ++this.state.globalValue,
    })
  }

  handleBtnDownClicked() {
    this.setState({
      globalValue: --this.state.globalValue,
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Step number</h2>
        <UpDownBtn value={this.state.globalValue} fnUp={this.handleBtnUpClicked.bind(this)} fnDown={this.handleBtnDownClicked.bind(this)}/>
      </div>
    );
  }
}

export default App;
