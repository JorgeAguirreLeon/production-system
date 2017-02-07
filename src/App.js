import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Switch from './components/Switch/Switch.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fast: false,
      good: false,
      cheap: false,
    }
  }

  render() {

    const clickHandler = (type)=> {
      this.setState((prev_state, current_props)=> {
        let update = {}
        update[type] = !prev_state[type]
        return update
      }, ()=> {
        if (this.state.fast && this.state.good && this.state.cheap) {
          // Unset the other, hardcode it
          let unset = {}
          if (type === 'fast') unset = {cheap: false}
          if (type === 'cheap') unset = {good: false}
          if (type === 'good') unset = {fast: false}
          this.setState(unset);
        }
      })
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>How production works:</h2>
        </div>
        <div className='switch-container'>
          <Switch
            className='switch--fast'
            checked={this.state.fast}
            onClick={clickHandler.bind(this, 'fast')}
          />
          <span className='switch-label'>Fast</span>
        </div>
        <div className='switch-container'>
          <Switch
            className='switch--good'
            checked={this.state.good}
            onClick={clickHandler.bind(this, 'good')}
          />
          <span className='switch-label'>Good</span>
        </div>
        <div className='switch-container'>
          <Switch
            className='switch--cheap'
            checked={this.state.cheap}
            onClick={clickHandler.bind(this, 'cheap')}
          />
          <span className='switch-label'>Cheap</span>
        </div>
      </div>
    );
  }
}

export default App;
