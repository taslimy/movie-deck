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
        `movies?key=b0tLcG5KaWdvcW1jbUhPZ29xbWNtS0NpcVp5WVlhR1lwMkdhbXErR202S3FVMytjcHFlY29abz0`
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          movies: res.data
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
            <a
              target='_blank'
              without
              rel='noopener noreferrer'
              href={`https://gomostream.com/movie/${movies.slug}`}
            >
              {movies.title}
            </a>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
