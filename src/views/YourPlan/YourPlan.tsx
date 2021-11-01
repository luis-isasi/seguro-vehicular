import { useState } from 'react'
import Header from '@Components/Header'

import GetDatos from './sections/GetDatos'
import ArmaTuPlan from './sections/ArmaTuPlan'
import BtnCircle from '@Components/buttons/BtnCircle'

const YourPlan = () => {
  const [isOpenGetDatos, setIsOpenGetDatos] = useState<boolean>(true)

  const handleOpenDatos = () => {
    setIsOpenGetDatos(true)
  }

  const handleOpenPlan = () => {
    setIsOpenGetDatos(false)
  }

  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-full">
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
          {isOpenGetDatos ? <GetDatos /> : <ArmaTuPlan />}
        </div>
      </div>
    </div>
  )
}

export default YourPlan
