import React, { Component } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import HomePage from './pages/homepage/homepage';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tvShows: [],
      loading: true
    };
  }

  componentDidMount() {
    axios
      .get(`shows`)
      .then(res => {
        console.log(res);
        this.setState({
          tvShows: res.data,
          loading: false
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
        <HomePage />
        {this.state.loading ? (
          'please wait loading tv show data . . . . '
        ) : (
          <Container
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
            maxWidth='xl'
          >
            {shows.map(tv => (
              <Card
                style={{ maxWidth: 345, margin: 20, textAlign: 'left' }}
                key={tv.id}
              >
                <CardActionArea>
                  <CardMedia
                    style={{ height: 350, backgroundPosition: 'cover center' }}
                    image={tv.image.original}
                    title={tv.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {tv.name}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      {tv.summary.replace(/<[^>]*>?/gm, '').substring(0, 150)}{' '}
                      ...
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    Read More
                    {/* {tv.genres.join(' / ')} */}
                  </Button>
                  <Button size='small' color='primary'>
                    {tv.status}
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Container>
        )}
      </div>
    );
  }
}
export default App;
