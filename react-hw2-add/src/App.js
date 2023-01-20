import React, {useEffect, useState} from "react";

import './App.css';
import {Users} from "./component/Users/Users";
import {PostsUsers} from "./component/PostsUsers/PostsUsers";
// import {PostsUsers} from "./component/PostsUsers/PostsUsers";
// import {User} from "./component/User/User";


function App() {
  return (
    <div className={'App'}>
<Users/>
       <PostsUsers/>
    </div>
  );
}

export default App;
