import { createContext, useContext, useState } from 'react'

// import { USER_SESSION } from '@Constants'
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

  console.log({ user })

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
