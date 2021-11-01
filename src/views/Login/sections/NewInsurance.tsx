import Image from 'next/image'

import useResponsive from '@Hooks/useResponsive'
import { MEDIAQUERY_LG } from '@Constants'
import Illustracion from '/public/img/Illustracion-desktop.svg'
import MaskGroup from '/public/img/Mask-Group.svg'
import logoRimac from '/public/img/logo-rimac.svg'

const NewInsurance = () => {
  const isMobileAndTablet = useResponsive({ maxMediaQuery: MEDIAQUERY_LG })

  if (isMobileAndTablet) {
    return (
      <div className="bg-gray-light w-full h-58 md:h-64 px-5 py-5 flex justify-between items-center">
        <div className="mx-auto">
          <span className="font-medium text-xs">¡NUEVO!</span>
          <h2 className="text-2xl my-4">
            Seguro <p className="text-red-500">Vehicular Tracking</p>
          </h2>
          <p className="text-xs">
            Cuentanos donde le haras seguimiento a tu seguro
          </p>
        </div>
        <figure className=" relative top-4 sm:top-7 md:top-10">
          <Image src={Illustracion} alt="ilustración-rimac" />
        </figure>
      </div>
    )
  }
  return (
    <div className="relative bg-gray-light h-full  flex flex-col">
      <figure className="absolute top-2 left-5 lg:left-10 z-2">
        <Image src={logoRimac} alt="logo-rimac" width={120} height={40} />
      </figure>
      <div className="h-auto relative flex justify-center items-center">
        <figure className="w-full absolute top-0">
          <Image layout="responsive" src={MaskGroup} alt="ilustración-rimac" />
        </figure>
        <figure className="relative top-20">
          <Image src={Illustracion} alt="ilustración-rimac" />
        </figure>
      </div>
      <div className="w-82 mx-auto relative top-40">
        <span className="font-medium">¡NUEVO!</span>
        <h2 className="text-4xl my-4">
          Seguro <p className="text-red-500">Vehicular Tracking</p>
        </h2>
        <p>Cuentanos donde le haras seguimiento a tu seguro</p>
      </div>
    </div>
  )
}

export default NewInsurance
