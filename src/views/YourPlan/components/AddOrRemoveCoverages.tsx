import { useState } from 'react'

const PROTECT_CAR = 'PROTECT_CAR'
const PROTECT_ROUNDED = 'PROTECT_ROUNDED'
const PROTECT_PLAN = 'PROTECT_PLAN'

const AddOrRemoveCoverages = () => {
  const [isOpenProtectCar, setIsOpenProtectCar] = useState<boolean>(true)
  const [isOpenProtectRounded, setIsOpenProtectRounded] =
    useState<boolean>(false)
  const [isOpenProtectPlan, setIsOpenProtectPlan] = useState<boolean>(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget

    if (name === PROTECT_CAR) {
      setIsOpenProtectCar(true)
      setIsOpenProtectRounded(false)
      setIsOpenProtectPlan(false)
    }

    if (name === PROTECT_ROUNDED) {
      setIsOpenProtectCar(false)
      setIsOpenProtectRounded(true)
      setIsOpenProtectPlan(false)
    }

    if (name === PROTECT_PLAN) {
      setIsOpenProtectCar(false)
      setIsOpenProtectRounded(false)
      setIsOpenProtectPlan(true)
    }
  }

  return (
    <div>
      <p className="mb-10">Agrega o Quita coverturas</p>
      <div>
        <div className="text-xs flex">
          <button
            name={PROTECT_CAR}
            onClick={handleClick}
            className={`flex-grow-1 h-18 border-b-3 border-gray-300 ${
              isOpenProtectCar && 'border-red-rimac'
            }`}
          >
            PROTEGE A TU AUTO
          </button>
          <button
            name={PROTECT_ROUNDED}
            onClick={handleClick}
            className={`flex-grow-1 h-18 border-b-3 border-gray-300 ${
              isOpenProtectRounded && 'border-red-rimac'
            }`}
          >
            PROTEGE A LOS QUE TE RODEAN
          </button>
          <button
            name={PROTECT_PLAN}
            onClick={handleClick}
            className={`flex-grow-1 h-18 border-b-3 border-gray-300 ${
              isOpenProtectPlan && 'border-red-rimac'
            }`}
          >
            MEJORA TU PLAN
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddOrRemoveCoverages
