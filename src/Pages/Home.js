
import React, { Component, PropTypes } from 'react';
import MdDehaze from 'react-icons/lib/md/dehaze';
import Promise from 'bluebird';
import fetch from 'isomorphic-fetch';

import Post from './Post';
import './home.styles.scss';

class Home extends Component {

    state = {
      posts: []
    }

    componentDidMount() {
      this.getRedditData();
    }

    getRedditData() {
      Promise.resolve()
        .then(() => fetch('//www.reddit.com/r/aww.json'))
        .then(response => {
          if (response.status >= 400) {
            throw new Error('Bad response from server');
          }
          return response.json();
        })
        .then(dataResponse => {
          this.setState({ posts: dataResponse.data.children });
        });
    }

    render() {
      const { posts } = this.state;
      return (
          <div className="container">
            <MdDehaze className="hamburger"/>
            <h3 className="username">hello, {this.props.location.query.username}! here's the latest from r/</h3>
            <h1 className="subreddit">{!!posts.length && posts[0].data.subreddit}</h1>
            <Post posts={posts}/>
          </div>
        );
    }
}

export default Home;
