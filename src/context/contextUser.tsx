import { createContext, useContext, useState, useEffect } from 'react'

import { USER_SESSION } from '@Constants'
import { User, CoverageUser, KeysCoverage } from '@Types'

interface ContextUser {
  user: User
  updateUser: (user: User) => void
  isLoading: boolean
  increaseSum: () => void
  decreaseSum: () => void
  addCoverage: ({}: {
    coverage: CoverageUser
    keyCoverage: KeysCoverage
  }) => void
  deleteCoverage: ({}: {
    idCoverage: number
    priceCoverage: number
    keyCoverage: KeysCoverage
  }) => void
}

//we create context theme
const ContextUser = createContext<ContextUser | undefined>(undefined)

//Provider of context theme
export const ContextUserProvider = ({ children }) => {
  const [user, setUser] = useState<undefined | null | User>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(true)

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

  const increaseSum = () => {
    const newSum = user.plan.insuredSum + 100
    setUser({
      ...user,
      plan: {
        ...user.plan,
        insuredSum: newSum > 16500 ? 16500 : newSum,
      },
    })
  }
  const decreaseSum = () => {
    const newSum = user.plan.insuredSum - 100

    setUser({
      ...user,
      plan: {
        ...user.plan,
        insuredSum: newSum < 12500 ? 12500 : newSum,
      },
    })
  }

  const addCoverage = ({
    coverage,
    keyCoverage,
  }: {
    coverage: CoverageUser
    keyCoverage: KeysCoverage
  }) => {
    setUser({
      ...user,
      plan: {
        ...user.plan,
        amount: user.plan.amount + coverage.price,
        coverage: {
          ...user.plan.coverage,
          [keyCoverage]: [...user.plan.coverage[keyCoverage], coverage],
        },
      },
    })
  }

  const deleteCoverage = ({
    idCoverage,
    priceCoverage,
    keyCoverage,
  }: {
    idCoverage: number
    priceCoverage: number
    keyCoverage: KeysCoverage
  }) => {
    const newArr = user.plan.coverage[keyCoverage].filter(
      (coverage) => coverage.id !== idCoverage
    )

    setUser({
      ...user,
      plan: {
        ...user.plan,
        amount: user.plan.amount - priceCoverage,
        coverage: {
          ...user.plan.coverage,
          [keyCoverage]: newArr,
        },
      },
    })
  }

  return (
    <ContextUser.Provider
      value={{
        user,
        updateUser,
        isLoading,
        addCoverage,
        deleteCoverage,
        increaseSum,
        decreaseSum,
      }}
    >
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
