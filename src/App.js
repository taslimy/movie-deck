import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      torrents: []
    };
  }

  componentDidMount() {
    axios
      .get(`movies/1`)
      .then(res => {
        console.log(res.data);
        this.setState({
          movies: res.data,
          torrents: res.data.torrents
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const x = this.state.movies;
    const torrents = this.state.torrents;
    const ticket =
      'https://videospider.in/getticket.php?key=aS8lAlSImxCzltfq&secret_key=uuhbhey4lq3dhq9qati52mhi2uul3g';
    return (
      <div className='App'>
        <div>hello you working?</div>
        {x.map((movies, index) => (
          <div key={index}>
            <h2>{movies.title}</h2>
            <a
              href={`https://videospider.stream/getvideo?key=aS8lAlSImxCzltfq&video_id=${movies._id}&ticket=${ticket}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {movies.title}
            </a>
            <h4>{movies.torrents.en['1080p'].provider}</h4>
            <img src={movies.images.banner} alt={movies.title} />
          </div>
        ))}

        <div></div>
      </div>
    );
  }
}
export default App;
