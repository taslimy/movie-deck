import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `movie/popular?api_key=30b8cc2868c889f56c4f30abefa4c5fd&language=en-US&page=1`
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          movies: res.data.results
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const x = this.state.movies;

    return (
      <div className='App'>
        <div>hello you working?</div>
        {x.map((movies, index) => (
          <div key={index}>
            <h2>{movies.title}</h2>
          </div>
        ))}

        <div></div>
      </div>
    );
  }
}
export default App;
