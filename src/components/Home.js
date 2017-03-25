
import React, { Component } from 'react';
import Promise from 'bluebird';
import fetch from 'isomorphic-fetch';
import MdArrowBack from 'react-icons/lib/md/arrow-back';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';

import Menu from './Menu';
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
      const { username } = this.props.location.query;
      return (
          <div className="container">
            <Menu username={username}/>
            <h3 className="username">hello, {username}</h3>
            <h1 className="subreddit">{!!posts.length && posts[0].data.subreddit}</h1>
            <div className="row">
              <MdArrowBack className="arrow"/>
              <p className="directions">swipe to vote</p>
              <MdArrowForward className="arrow"/>
            </div>
            <Post posts={posts}/>
          </div>
        );
    }
}

export default Home;
