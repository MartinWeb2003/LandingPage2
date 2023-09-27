import React from 'react';
import Article from '../../components/article/article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Want to learn more? <br />Check out related articles.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Oct 20, 2023" text="Artificial Intellgience is the future? See what do the experts say about it." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 13, 2023" text="Will AI replace regular jobs?" />
        <Article imgUrl={blog03} date="Mar 08, 2023" text="How to get ahead of the curve and use AI to your advantage" />
        <Article imgUrl={blog05} date="Jan 29, 2023" text="Is AI dangerous? Should we be worried about information leaks?" />
        <Article imgUrl={blog04} date="Aug 11, 2023" text="10 Great AI tools to boost your productivity" />
      </div>
    </div>
  </div>
);

export default Blog;