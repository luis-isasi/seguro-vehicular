import Image from 'next/image'
import IllustracionPersonURL from '/public/img/illustracion-person.svg'

import { Vehicle } from '@Types'

interface Props {
  vehicle: Vehicle
}

const VehicleInfo: React.FC<Props> = ({ vehicle }) => {
  const { marca, model, placa, year } = vehicle

  return (
    <div className="border-3 border-gray-200 rounded-xl flex justify-between px-8">
      <div className="flex flex-col justify-center">
        <span className="text-gray-400 text-xs">Placa: {placa}</span>
        <p className="text-2xl">
          {model} - {year}
        </p>
        <span className="text-2xl">{marca}</span>
      </div>
      <figure className="relative -top-2 ">
        <Image src={IllustracionPersonURL} alt="ilustración-rimac" />
      </figure>
    </div>
  )
}

export default VehicleInfo
