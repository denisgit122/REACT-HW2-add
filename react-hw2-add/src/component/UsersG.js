import React from "react";

const UsersG = ({users,setPostId}) => {

    return (
        <div>
            {users.map((item) => {
                const {id, name} = item;
                return (
                    <div key={`${id}-item`}>
                        {name}
                        <button
                            onClick={() => setPostId(id)}
                        >Select user</button>
                    </div>
                )
            })}
        </div>
    );
};

export {UsersG};