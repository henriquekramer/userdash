import { createContext, ReactNode, useState } from "react";
import { UserModal } from "../components/UserModal";
import { User } from "../types/user";

interface UserContextProps{
  children: ReactNode;
}

type UserContextType = {
  isOpenModal: boolean;
  setIsOpenModal: (newState: boolean) => void;
  selectedUser: number
  setSelectedUser: (newState: number) => void;
  users: User[];
  setUsers: (newState: User[]) => void;
  filterUsers: (filter: string) => void;
  formName: string;
  setFormName: (newState: string) => void;
  formEmail: string;
  setFormEmail: (newState: string) => void;
  formPhone: string;
  setFormPhone: (newState: string) => void;
  formCountry: string;
  setFormCountry: (newState: string) => void;
  formState: string;
  setFormState: (newState: string) => void;
  formStreet: string;
  setFormStreet: (newState: string) => void;
  formNumber: string;
  setFormNumber: (newState: string) => void;
  formAvatar: string;
  setFormAvatar: (newState: string) => void;
}

const initialValue = {
  isOpenModal: false,
  setIsOpenModal: () => {},
  selectedUser: -1,
  setSelectedUser:() => {},
  users: [],
  setUsers: () => {},
  filterUsers: () => {},
  formName: '',
  setFormName: () => {},
  formEmail: '',
  setFormEmail: () => {},
  formPhone: '',
  setFormPhone: () => {},
  formCountry: '',
  setFormCountry: () => {},
  formState: '',
  setFormState: () => {},
  formStreet: '',
  setFormStreet: () => {},
  formNumber: '',
  setFormNumber: () => {},
  formAvatar: '',
  setFormAvatar: () => {},
}

export const UserContext = createContext<UserContextType>(initialValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const[isOpenModal, setIsOpenModal] = useState(initialValue.isOpenModal)
  const[selectedUser, setSelectedUser] = useState(initialValue.selectedUser)
  const [users, setUsers] = useState<User[]>([])
  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formPhone, setFormPhone] = useState('')
  const [formCountry, setFormCountry] = useState('')
  const [formState, setFormState] = useState('')
  const [formStreet, setFormStreet] = useState('')
  const [formNumber, setFormNumber] = useState('')
  const [formAvatar, setFormAvatar] = useState('')


  const filterUsers = async (filter: string) => {
    const response = await fetch(`http://localhost:3333/users?q=${filter}`)
    const data= await response.json();
    setUsers(data);
  }

  return (
    <UserContext.Provider value={{
      isOpenModal, 
      setIsOpenModal, 
      selectedUser, 
      setSelectedUser,
      users, 
      setUsers, 
      filterUsers,
      formName,
      setFormName,
      formEmail, 
      setFormEmail,
      formPhone, 
      setFormPhone,
      formCountry, 
      setFormCountry,
      formState, 
      setFormState,
      formStreet, 
      setFormStreet,
      formNumber, 
      setFormNumber,
      formAvatar, 
      setFormAvatar
    }}>
      {children}
      {isOpenModal && <UserModal />}
    </UserContext.Provider>
  )
}