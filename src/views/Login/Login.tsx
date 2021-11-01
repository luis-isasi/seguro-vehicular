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
      <div className="flex-grow" style={{ flexGrow: 2 }}>
        <div>FORM</div>
      </div>
    </div>
  )
}

export default Login
