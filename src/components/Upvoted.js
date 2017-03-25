
import React, { Component, PropTypes } from 'react';
import Menu from './Menu';
import { List } from 'immutable';
import map from 'lodash/map';

import Footer from './Footer';
import './voted.styles.scss';

class Upvoted extends Component {

    static contextTypes = {
      upvoted: PropTypes.instanceOf(List)
    }

    render() {
      const { username } = this.props.location.query;
      const { upvoted } = this.context;
      return (
        <div className="postContainer">
          <Menu username={username}/>
          <h1 className="header">Upvoted</h1>
          {upvoted.size === 0 && <h2 className="directions">nothing here...make sure to vote!</h2>}
          {map(upvoted.toJS(), upvote => {
            return (
              <div className="post">
                <a href={`https://www.reddit.com${upvote.data.permalink}`}
                   className="externalLink"
                   target="_blank">
                  <h3 className="title">{upvote.data.title}</h3>
                  <p className="author">{upvote.data.author}</p>
                  <div className="imageContainer">
                    <img src={upvote.data.thumbnail} className="image"/>
                  </div>
                </a>
              </div>
            );
          })}
          <Footer/>
        </div>
        );
    }
}

export default Upvoted;
