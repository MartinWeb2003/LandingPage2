import React from 'react';
import { google, microsoft, dropbox, shopify, amazon } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt='nothing'/>
    </div>
    <div>
      <img src={shopify} alt='nothing'/>
    </div>
    <div>
      <img src={dropbox} alt='nothing'/>
    </div>
    <div>
      <img src={microsoft} alt='nothing'/>
    </div>
    <div>
      <img src={amazon} alt='nothing' className='amazon'/>
    </div>
  </div>
);

export default Brand;