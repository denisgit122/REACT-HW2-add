
import React, {useEffect, useState} from "react";
import {User} from "../User/User";
import UserApi from "../../api/userApi";
import {PostsUsers} from "../PostsUsers/PostsUsers";


const Users = () => {
    const [users, setUsers] = useState([])
    const [postId,setPostId]=useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(data => setUsers(data))
    },[])

    console.log(postId);
    return (
        <div>
            {!!postId && <PostsUsers postId={postId} />}
            {users.map( user => <User Key={user.id} user={user} onsetId={setPostId}/>)}
        </div>
    );
};

export {Users};