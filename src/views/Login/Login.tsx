import { useLayoutEffect } from 'react'
import { useRouter } from 'next/router'

import Form from '@Components/Form'
import NewInsurance from './sections/NewInsurance'
import { useContextUser } from '@Context/contextUser'

const Login = () => {
  const { user, isLoading } = useContextUser()

  const router = useRouter()

  useLayoutEffect(() => {
    if (!isLoading && user) {
      router.push('/yourplan')
    }
  }, [user, isLoading])

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row">
      <div className="w-full mb-5 lg:mb-0 lg:min-w-[450px] lg:max-w-[480px] xl:max-w-[600px] lg:flex-grow-1">
        <NewInsurance />
      </div>
      <div className="flex justify-center items-center lg:flex-grow-2">
        <Form />
      </div>
    </div>
  )
}

export default Login
