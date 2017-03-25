import React, { Component, PropTypes } from 'react';
import MdDehaze from 'react-icons/lib/md/dehaze';
import FaRedditAlien from 'react-icons/lib/fa/reddit-alien';
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up';
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down';
import classnames from 'classnames';
import clickOutside from 'react-click-outside';
import { Link } from 'react-router';
import './menu.styles.scss';

@clickOutside
class Menu extends Component {

  state = {
    showMenu: false
  }

  static propTypes = {
    username: PropTypes.string
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  handleClickOutside() {
    this.setState({ showMenu: false });
  }

  render() {
    const { showMenu } = this.state;
    const { username } = this.props;
    return (
      <div className={classnames('menuContainer', showMenu && 'showMenu')}
           onClick={this.toggleMenu.bind(this)}>
        <MdDehaze className="hamburger"/>
        <div className="menu">
          <Link to={{ pathname: '/home', query: { username: username } }}
                className="menuLink">
            <FaRedditAlien className="icon"/>
            <h3 className="menuItems">feed</h3>
          </Link>
          <Link to={{ pathname: '/upvoted', query: { username: username } }}
                className="menuLink">
            <FaThumbsUp className="icon"/>
            <h3 className="menuItems">upvoted</h3>
          </Link>
          <Link to={{ pathname: '/downvoted', query: { username: username } }}
                className="menuLink">
            <FaThumbsDown className="icon"/>
            <h3 className="menuItems">downvoted</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;
