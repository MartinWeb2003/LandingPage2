import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Create Your Account</h4>
      <h1 className="gradient__text">The Results are <br />Better Than Ever.</h1>
      <p>Investing is no longer a game only for rich people. With a subscription ot AInvestor, you can outperform even the best present day investors.</p>
      <h4>Choose a Subscription Plan</h4>
    </div>
  </div>
);

export default Possibility;