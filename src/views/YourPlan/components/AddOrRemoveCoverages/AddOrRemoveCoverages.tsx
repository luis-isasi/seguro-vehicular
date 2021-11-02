import { useState } from 'react'

import BtnCoverage from './components/Buttons/BtnCoverage'
import ProtectYourCar from './components/ProtectYourCar'
import ProtectRounded from './components/ProtectRounded'
import ImproveYourPlan from './components/ImproveYourPlan'

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
          <BtnCoverage
            name={PROTECT_CAR}
            onClick={handleClick}
            isOpen={isOpenProtectCar}
          >
            PROTEGE A TU AUTO
          </BtnCoverage>
          <BtnCoverage
            name={PROTECT_ROUNDED}
            onClick={handleClick}
            isOpen={isOpenProtectRounded}
          >
            PROTEGE A LOS QUE TE RODEAN
          </BtnCoverage>
          <BtnCoverage
            name={PROTECT_PLAN}
            onClick={handleClick}
            isOpen={isOpenProtectPlan}
          >
            MEJORA TU PLAN
          </BtnCoverage>
        </div>
      </div>
      <div>
        {isOpenProtectCar && <ProtectYourCar />}
        {isOpenProtectRounded && <ProtectRounded />}
        {isOpenProtectPlan && <ImproveYourPlan />}
      </div>
    </div>
  )
}

export default AddOrRemoveCoverages
