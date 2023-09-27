import React from 'react';
import Feature from '../../components/feature/feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is AInvestor" text="A simple online subscription that allows you to choose how much money you wish to invest, and you can watch it grow. It really is that simple." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The future is here.</h1>
      <p>Watch The Interview</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="No hassle" text="All you have to do is deposit the money, that's it." />
      <Feature title="Investment return" text="Our AInvestor has been tested on over a hundred accounts before it was released, beating regular investors by 32% on average." />
      <Feature title="Safety" text="We can guarantee high odds of positive returns, with over 92% of accounts having a positive return rate so far." />
    </div>
  </div>
);

export default WhatGPT3;