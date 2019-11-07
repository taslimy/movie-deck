import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tvShows: []
    };
  }

  componentDidMount() {
    axios
      .get(`shows`)
      .then(res => {
        console.log(res);
        this.setState({
          tvShows: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const shows = this.state.tvShows;

    return (
      <div className='App'>
        {shows.map(tv => (
          <div key={tv.id}>
            <h2>{tv.name}</h2>
            <p>{tv.summary.replace(/<[^>]*>?/gm, '')}</p>
            <h3>{tv.genres.join(' / ')}</h3>
            <p>Status: {tv.status}</p>
            <img src={tv.image.medium} alt={tv.name} />
          </div>
        ))}

        <div></div>
      </div>
    );
  }
}
export default App;
