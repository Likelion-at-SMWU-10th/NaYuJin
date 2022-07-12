
import React, { useRef, useState,useCallback } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
function App() {
  const [inputs,setInputs]=useState({
    username:' ',
    email: ' '
  });
  const {username,email}=inputs;
  const onChange=useCallback(
    e=>{
       const {name,value}=e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  },
  [inputs]
  );
   
  const [users,setUsers]=useState([
    {
        id: 1,
        username: 'sookmyung',
        email: 'sookmyung@gmail.com',
        active: true
    },
    {
        id: 2,
        username: 'mutsa',
        email: 'mutsa@gmail.com',
        active:false
    },
    {
        id: 3,
        username: 'nana',
        email: 'nana@gmail.com',
        active: false
    },
]);
const nextId=useRef(4);
const onCreate=useCallback(()=>{
  const user={
    id: nextId.current,
    username,
    email
  }
setUsers(users=>users.concat(user));
setInputs({
  username:' ',
  email:' '
})
  nextId.current += 1;
}, [username,email]);
const onRemove=useCallback(
  id=>{
  setUsers(users=>users.filter(user=>user.id!=id));
}, [users]);
const onToggle = useCallback(id => {
  setUsers(
    users.map(user=>
      user.id === id ? { ...user, active: !user.active } : user
    )
  );
},[users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
