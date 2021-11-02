import { useContextUser } from '@Context/contextUser'

const InsuredSum = () => {
  const {
    increaseSum,
    decreaseSum,
    user: {
      plan: { insuredSum },
    },
  } = useContextUser()

  return (
    <div className="flex justify-between">
      <div className="flex flex-col items-center">
        <p>Indica la suma asegurada</p>
        <p className="text-gray-400 text-sm">MIN $12,500 | MAX $16,500</p>
      </div>
      <div className="border-2 rounded-md border-gray-200 py-1 px-4 flex items-center ">
        <button
          onClick={decreaseSum}
          className="text-purple-primary font-light text-4xl relative -top-1"
        >
          -
        </button>
        <span className="mx-4 text-gray-600">$ {insuredSum}</span>
        <button
          onClick={increaseSum}
          className="text-purple-primary font-light text-4xl relative -top-1"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default InsuredSum
