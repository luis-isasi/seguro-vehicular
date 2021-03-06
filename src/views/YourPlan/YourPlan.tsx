import { useState } from 'react'
import Header from '@Components/Header'

import GetDatos from './sections/GetDatos'
import ArmaTuPlan from './sections/ArmaTuPlan'
import BtnCircle from '@Components/buttons/BtnCircle'
import ProtectRoute from '@Hoc/ProtectRoute'

const YourPlan = () => {
  const [isOpenGetDatos, setIsOpenGetDatos] = useState<boolean>(true)

  const handleOpenDatos = () => {
    setIsOpenGetDatos(true)
  }

  const handleOpenPlan = () => {
    setIsOpenGetDatos(false)
  }

  const onSuccessGetDatos = () => {
    setIsOpenGetDatos(false)
  }

  return (
    <ProtectRoute>
      <div className="h-screen flex flex-col">
        <div className="w-full absolute top-0">
          <Header />
        </div>
        <div className="flex h-full pt-12 md:pt-16">
          <div className="w-76 h-full bg-gray-lighter flex flex-col items-center">
            <BtnCircle
              onClick={handleOpenDatos}
              className={`my-2 ${
                isOpenGetDatos &&
                'bg-purple-primary text-white border-purple-primary !important'
              }`}
            >
              1
            </BtnCircle>
            <div className=" h-10 border-r-2 border-dashed border-gray-300" />
            <BtnCircle
              onClick={handleOpenPlan}
              className={`my-2 ${
                !isOpenGetDatos &&
                'bg-purple-primary text-white border-purple-primary !important'
              }`}
            >
              2
            </BtnCircle>
          </div>
          <div className="flex-grow-1">
            {isOpenGetDatos ? (
              <GetDatos onSuccess={onSuccessGetDatos} />
            ) : (
              <ArmaTuPlan handleReturnStepGetDatos={handleOpenDatos} />
            )}
          </div>
        </div>
      </div>
    </ProtectRoute>
  )
}

export default YourPlan
