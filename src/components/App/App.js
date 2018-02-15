import React, { Component } from 'react';
import './App.scss';
import { Main } from '../Main/Main';
import { fetchAndParse } from '../../helper';
import { clientID } from '../../apiKey';

class App extends Component {
  constructor () {
    super();
  }

  componentDidMount () {
    fetchAndParse(`https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${clientID}&redirect_uri=localhost:3000/`);
  }

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
