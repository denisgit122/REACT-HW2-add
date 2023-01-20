

import React, { useEffect, useState } from "react";
import './App.css';

import { getUsers } from "./api/getUsers";
import {UsersG} from "./component/UsersG";
import {Posts} from "./component/Posts";

function App() {

     const [user,setUser]=useState([])
     const [userId, setUserId] = useState(null);

    useEffect(() => {
        getUsers().then(value => setUser(value))
    },[])


  return (
      <div className="App">
          {!!user.length && <UsersG users={user}
                                    setPostId={setUserId}
          />}

        {/*<hr/>*/}
          {!!userId && <Posts id={userId} /> }



      </div>


  );
}

export default App;
