import React, {Component} from 'react';
import './Home.css';
import { Feed } from '../Feed/Feed';
import { connect } from 'react-redux';

export class Home extends Component {
  render () {
    return(
      <section>
        <Feed />
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  history: state.history,
});

export default connect(mapStateToProps)(Home);