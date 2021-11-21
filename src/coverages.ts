import { CoverageData } from '@Types'

import AtropelloImg from '@Public/img/atropello.svg'
import ChoqueImg from '@Public/img/choque-luz-roja.svg'
import LlantaRobadaImg from '@Public/img/llanta-robada.svg'

const coveragesCar: CoverageData[] = [
  {
    id: 1,
    title: 'Llanta robada',
    description:
      'Si te roban una llanta, nuestro seguro cubre el daño y te damos una nueva llanta 😀',
    price: 15,
    image: LlantaRobadaImg,
  },
  {
    id: 2,
    title: 'Choque y/o pasarte la luz roja',
    description: 'Pasarte la luz roja no será un problema para nosotros 😀',
    price: 20,
    image: ChoqueImg,
  },
  {
    id: 3,
    title: 'Atropello en la vía Evitamiento',
    description: 'Nosotros juntamos las esferas del dragón y lo revivimos 😀',
    price: 50,
    image: AtropelloImg,
  },
]

const coverages = {
  protectCar: coveragesCar,
  protectAround: [],
  protectPlan: [],
}

export default coverages
