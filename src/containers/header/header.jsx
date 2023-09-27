import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Take Your Investment Portfolio to a New Level</h1>
      <p>Together we can take your investment portfolio to the next level. Using AI we combine all the available investment knowledge into the ultimate  intelligent investor, and it costs barely 5th of a price of a real one.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">

        <p>-1,673 people requested access within last 7 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt='nothing'/>
    </div>
  </div>
);

export default Header;