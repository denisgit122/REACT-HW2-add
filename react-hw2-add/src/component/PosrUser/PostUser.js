const PostUser = ({post}) => {
const {id, userId, title,body}=post
return (
  <div>
<div>{}</div>
    <div>{id}</div>
    <div>{userId}</div>
    <div>{title}</div>
    <div>{body}</div>
  </div>
);
};

export {PostUser};