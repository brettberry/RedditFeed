
import React, { Component } from 'react';
import Promise from 'bluebird';
import fetch from 'isomorphic-fetch';
import map from 'lodash/map';
import './home.styles.scss';

class Home extends Component {

    state = {
      items: []
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
          this.setState({ items: dataResponse.data.children });
        });
    }

    render() {
        return (
            <div className="container">
            { map(this.state.items, item => <p>{item.data.author}</p>) }
              {/* <Post/> */}
            </div>
        );
    }
}

class Post extends Component {

  render() {

    return (
      <div className="itemContainer">
        <div className="featuredDiv">
          <h3 className="title">Title</h3>
          <p className="author">author</p>
          <div className="imageContainer">
            {/* <div className="image"
                 style={{ backgroundImage: }}/> */}
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
