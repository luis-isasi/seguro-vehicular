import Form from '@Components/Form'
import NewInsurance from './sections/NewInsurance'

const Login = () => {
  return (
    <div className="w-full h-screen flex">
      <div
        className="min-w-[450px] max-w-[480px] xl:max-w-[600px]"
        style={{ flexGrow: 1 }}
      >
        <NewInsurance />
      </div>
      <div
        className="flex-grow flex justify-center items-center"
        style={{ flexGrow: 2 }}
      >
        <Form />
      </div>
    </div>
  )
}

export default Login
