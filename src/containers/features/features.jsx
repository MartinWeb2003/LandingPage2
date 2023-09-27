import React from 'react';
import Feature from '../../components/feature/feature';
import './features.css';

const featuresData = [
  {
    title: 'Enhance Wealth',
    text: '-Enjoy a lifestyle you have always dreamed of.',
  },
  {
    title: 'Create Time',
    text: '-Spend more time doing what you love. Spend time with loved ones, explore or discover your passion',
  },
  {
    title: 'Decrease Worry',
    text: '-Allow money to work for you even while you sleep and enjoy your time off.',
  },
  {
    title: 'Enjoy Life',
    text: '-Feel what it is like to retire while still young.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is here and Waiting for You. Step Into a World of Financial Freedom and Fullfilment.</h1>
      <p>Get Started Right Away</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;