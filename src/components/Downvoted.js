
import React, { Component, PropTypes } from 'react';
import Menu from './Menu';
import { List } from 'immutable';
import map from 'lodash/map';
import './voted.styles.scss';

class Downvoted extends Component {

    static contextTypes = {
      downvoted: PropTypes.instanceOf(List)
    }

    render() {
      const { username } = this.props.location.query;
      const { downvoted } = this.context;
      return (
        <div className="postContainer">
          <Menu username={username}/>
          <h1 className="header">Downvoted</h1>
          {downvoted.size === 0 && <h2 className="directions">nothing here...make sure to vote!</h2>}
          {map(downvoted.toJS(), downvote => (
            <div className="post">
              <h3 className="title">{downvote.data.title}</h3>
              <p className="author">{downvote.data.author}</p>
              <div className="imageContainer">
                <img src={downvote.data.thumbnail} className="image"/>
              </div>
            </div>
          ))}
        </div>
        );
    }
}

export default Downvoted;
