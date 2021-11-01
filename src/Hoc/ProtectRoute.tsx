import * as React from 'react'
import { useRouter } from 'next/router'

import { useContextUser } from '@Context/contextUser'
import LoadingScreen from '@Components/LoadingScreen'

const ProtectRoute = ({ children }) => {
  const { user, isLoading } = useContextUser()
  const router = useRouter()

  React.useEffect(() => {
    //pass the current
    if (!isLoading && !user) {
      router.replace('/login')
    }
  }, [isLoading])

  if (isLoading || !user) return <LoadingScreen />

  if (!isLoading && user) return <>{children}</>
}

export default ProtectRoute
