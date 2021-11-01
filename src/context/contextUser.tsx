import { createContext, useContext, useState, useEffect } from 'react'

import { USER_SESSION } from '@Constants'
import { User } from '@Types'

interface ContextUser {
  user: User
  setUser: (user: User) => void
}

//we create context theme
const ContextUser = createContext<ContextUser | undefined>(undefined)

//Provider of context theme
export const ContextUserProvider = ({ children }) => {
  const [user, setUser] = useState<undefined | User>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (user) {
      setIsLoading(false)
    }
  }, [user])

  useEffect(() => {
    const user: User = JSON.parse(sessionStorage.getItem(USER_SESSION))

    if (user) {
      setUser(user)
    } else {
      // const newUser: User = {
      //   id: usersList ? usersList.length : 0,
      //   name: 'anonimo',
      //   chats: [],
      // }
      // setUser(newUser)
    }
  }, [])

  return (
    <ContextUser.Provider value={{ user, setUser }}>
      {children}
    </ContextUser.Provider>
  )
}

export const useContextUser = () => {
  const data = useContext(ContextUser)

  if (data === undefined) {
    throw new Error('You must be whithin Provider context user')
  }

  return data
}
