
import {useEffect, useState} from "react";
import api from "../../api/api";
import {PostUser} from "../PosrUser/PostUser";

const PostsUsers = ({postId}) => {
  const [post,setPost]=useState(null)

useEffect(() => {
  if (postId){
    api(postId).then(value => setPost(value))

  }
},[postId])
  console.log(post)
return (
  <div>
    {<PostUser post={post}/>}
  </div>
);
};

export {PostsUsers};