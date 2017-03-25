import { Component, PropTypes } from 'react';
import { List } from 'immutable';

class App extends Component {

  static childContextTypes = {
    downvote: PropTypes.func,
    upvote: PropTypes.func,
    downvoted: PropTypes.instanceOf(List),
    upvoted: PropTypes.instanceOf(List)
  }

  state = {
    downvoted: new List(),
    upvoted: new List()
  }

  getChildContext() {
    return {
      downvote: this.downvote.bind(this),
      upvote: this.upvote.bind(this),
      downvoted: this.state.downvoted,
      upvoted: this.state.upvoted
    };
  }

  downvote(post) {
    this.setState({ downvoted: this.state.downvoted.push(post) });
  }

  upvote(post) {
    this.setState({ upvoted: this.state.upvoted.push(post) });
  }

  render() {
    return this.props.children;
  }
}

export default App;
