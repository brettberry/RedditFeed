
import React, { Component, PropTypes } from 'react';
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
      const { items } = this.state;
      return (
          <div className="container">
            <h1 className="subreddit">{!!items.length && items[0].data.subreddit}</h1>
            <h3 className="username">{this.props.location.query.username}</h3>
            <Post items={items}/>
          </div>
        );
    }
}

class Post extends Component {

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.any)
  }

  render() {
    return (
      <div className="itemContainer">
        {map(this.props.items, (item, key) => (
          <div className="featuredDiv" key={key}>
            <h3 className="title">{item.data.title}</h3>
            <p className="author">{item.data.author}</p>
            <div className="imageContainer">
              <img src={item.data.thumbnail} className="image"/>
            </div>
          </div>
        ))}
      </div>
    );
  }
}


export default Home;
