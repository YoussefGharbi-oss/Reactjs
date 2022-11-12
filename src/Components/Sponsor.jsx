import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
 

function Sponsor(props) {
    return (
        <div className="sponsor-icons">
        <div>
          <img src={google} />
        </div>
        <div>
          <img src={slack} />
        </div>
        <div>
          <img src={atlassian} />
        </div>
        <div>
          <img src={dropbox} />
        </div>
        <div>
          <img src={shopify} />
        </div>
      </div>
    );
}

export default Sponsor;