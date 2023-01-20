import {useEffect, useState} from "react";
import {getPosts} from "../api/getUsers";


const Posts = ({id}) => {
    const [user,setUser]=useState(null)

    useEffect(() => {
        if (id){
            getPosts(id).then(value =>setUser(value) )
        }

    },[id])
    if (!user)return null
console.log(user)
return (
  <div>
      <h1>Posts</h1>
      <h2>id: {user.id}</h2>
     <p>title: {user.title}</p>
      body: {user.body}
  </div>
);
};

export {Posts};