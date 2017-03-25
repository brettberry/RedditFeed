import React from 'react';
import TiHeart from 'react-icons/lib/ti/heart';
import './home.styles.scss';

function Footer() {
  return (
    <div className="row">
      <p className="footnote">made with</p>
      <TiHeart className="heart"/>
      <p className="footnote">by brett berry</p>
    </div>
  );
}

export default Footer;
