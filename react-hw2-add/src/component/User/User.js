


const User = ({user,onsetId}) => {
    const {id,name}=user

return (
  <div>
      <div>{id}</div>
      <div>{name}</div>
      <button onClick={()=>onsetId(id)}>
          click
      </button>

  </div>
);
};

export {User };