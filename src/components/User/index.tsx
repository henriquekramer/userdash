import { memo, useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { User as UserType } from '../../types/user'
import './styles.scss'

function UserComponent({ 
  id,
  name, 
  email, 
  address, 
  phone, 
  image, 
}: Omit<UserType, 'birthdate'>) {
  const { selectedUser, setSelectedUser} = useContext(UserContext)

  return (
    <li className={selectedUser === id ? 'isActive' : ''} onClick={()=> setSelectedUser(id)}>
      <section className="info">
        <img src={image} alt={`${name} avatar`} />
        <div>
          <h2>{name}</h2>
          <span>{email}</span>
          <span>{phone}</span>
        </div>
      </section>
      <aside className="address">
        <div>
          <span>PAÍS</span>
          {address.country}
        </div>
        <div>
          <span>ESTADO</span>
          {address.state}
        </div>
        <div>
          <span>ENDEREÇO</span>
          {address.street}
        </div>
      </aside>
    </li>
  )
}

export const User = memo(UserComponent)