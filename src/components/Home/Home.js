import React, {Component} from 'react';
import './Home.css';
import { connect } from 'react-redux';

export class Home extends Component {
  render () {
    return (
      <section>
        I am Home
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  history: state.history
});

export default connect(mapStateToProps)(Home);