import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import Swipeable from 'react-swipeable';
import { List } from 'immutable';
import './post.styles.scss';

class Posts extends Component {

  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.any)
  }

  static contextTypes = {
    upvote: PropTypes.func,
    downvote: PropTypes.func,
    upvoted: PropTypes.instanceOf(List),
    downvoted: PropTypes.instanceOf(List)
  }

  handleSwipeLeft(post) {
    this.context.downvote(post);
  }

  handleSwipeRight(post) {
    this.context.upvote(post);
  }

  render() {
    return (
      <div className="postContainer">
        {map(this.props.posts, (post, key) => {
          if (this.context.upvoted.includes(post) || this.context.downvoted.includes(post)) {
            return;
          }
          return (
            <Swipeable onSwipedLeft={() => this.handleSwipeLeft(post)}
                       onSwipedRight={() => this.handleSwipeRight(post)}
                       className="swipe"
                       trackMouse
                       key={key}>
              <a href={`https://www.reddit.com${post.data.permalink}`}
                 className="externalLink"
                 target="_blank">
                <h3 className="title">{post.data.title}</h3>
              </a>
                <p className="author">{post.data.author}</p>
                <div className="imageContainer">
                  <img src={post.data.thumbnail} className="image"/>
                </div>
            </Swipeable>
          );
        })}
      </div>
    );
  }
}

export default Posts;
