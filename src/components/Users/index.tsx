import { memo, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { User } from "../User";
import './styles.scss'

function UsersComponent(){
  const { users, filterUsers } = useContext(UserContext)

  useEffect(()=> {
    filterUsers('');
  }, [])

  return (
    <ul>
      {users.map(user => (
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
          address={user.address}
          image={user.image}
        />
      ))}
    </ul>
  )
}

export const Users = memo(UsersComponent)