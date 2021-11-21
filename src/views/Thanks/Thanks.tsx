import Image from 'next/image'

import Header from '@Components/Header'
import BtnPrimaryRed from '@Components/buttons/BtnPrimaryRed'
import PersonURL from '@Public/img/person-happy.svg'
import MuebleURL from '@Public/img/mueble.svg'

const Thanks = () => {
  return (
    <div className="relative min-h-screen h-screen">
      <div className="absolute top-0 w-full">
        <Header />
      </div>
      <div className="flex flex-col md:flex-row h-full pt-12 md:pt-16">
        <div className="bg-[#F7F8FC] flex-grow-1 p-5 md:p-0 min-h-30 h-42 overflow-hidden md:overflow-visible md:h-auto flex justify-center md:items-center">
          <figure className="z-4 relative left-10 md:left-5 lg:left-10 xl:left-35 2xl:left-40">
            <Image
              src={PersonURL}
              alt="person-happy"
              width={195}
              height={440}
            />
          </figure>
          <figure className="md:absolute">
            <Image src={MuebleURL} alt="mueble" width={320} height={355} />
          </figure>
        </div>
        <div className="flex-grow-2 flex justify-center items-center p-5 md:p-0">
          <div className="w-98">
            <p className="text-2xl md:text-4xl text-red-rimac mb-5">
              ¡Te damos la bienvenida!
            </p>
            <p className="text-2xl md:text-4xl mb-5">
              Cuenta con nosotros para proteger tu vehículo
            </p>
            <p className="mb-10">
              Enviaremos la confirmación de compra de tu Plan Vehícular Tracking
              a tu correo.
            </p>
            <BtnPrimaryRed>CÓMO USAR MI SEGURO</BtnPrimaryRed>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Thanks
