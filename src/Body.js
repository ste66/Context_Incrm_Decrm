import React from 'react'
import './index.css';

import MyConsumer from "./Context"


const Body = () => (
    <div className="body">


      <MyConsumer>
      {user => (
        <div className="user-stats">
          <div>
          <img
          className={`user-avatar`}
          alt="user avatar"
          src={user.user.avatar}
        />
            {user.name}
          </div>
          <div className="a">
            <h1 className="b">{user.user.followers} Followers</h1>
            <h1 className="c">Following {user.user.following}</h1>
          </div>
        </div>
      )}
    </MyConsumer>
     
    </div>
  );
  
export default Body;