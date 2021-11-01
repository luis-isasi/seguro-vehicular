import { createContext, useContext, useState, useEffect } from 'react'

import { USER_SESSION } from '@Constants'
import { User } from '@Types'

interface ContextUser {
  user: User
  updateUser: (user: User) => void
  isLoading: boolean
}

//we create context theme
const ContextUser = createContext<ContextUser | undefined>(undefined)

//Provider of context theme
export const ContextUserProvider = ({ children }) => {
  const [user, setUser] = useState<undefined | null | User>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  console.log({ user })

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(USER_SESSION))
    if (user) {
      setUser(user)
    } else {
      localStorage.setItem(USER_SESSION, JSON.stringify(user))
      setUser(null)
    }
    setIsLoading(false)
  }, [])

  const updateUser = (user: User) => {
    setUser(user)
    localStorage.setItem(USER_SESSION, JSON.stringify(user))
  }

  return (
    <ContextUser.Provider value={{ user, updateUser, isLoading }}>
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
