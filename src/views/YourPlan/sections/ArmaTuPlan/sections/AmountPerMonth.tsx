import { useContextUser } from '@Context/contextUser'
import CheckIcon from '@mui/icons-material/Check'

import BtnPrimaryRed from '@Components/buttons/BtnPrimaryRed'

const CheckIconCustomer = () => (
  <CheckIcon className="text-green-300 mr-3" style={{ fontSize: '20px' }} />
)

const AmountPerMonth = () => {
  const { user } = useContextUser()

  return (
    <div className="relative top-20 text-gray-700">
      <div className="border-b-2 border-gray-300 py-7 mb-7">
        <p className="mb-2">MONTO</p>
        <p className="text-4xl mb-2">$ {user.plan.amount}</p>
        <span className="mb-2">Mensuales</span>
      </div>
      <div>
        <p>El precio incluye:</p>
        <ul className="text-xs py-3">
          <li className="mb-2">
            <CheckIconCustomer /> Llanta de respuesto
          </li>
          <li className="mb-2">
            <CheckIconCustomer />
            Analisis de motor
          </li>
          <li className="mb-2">
            <CheckIconCustomer /> Aros gratis
          </li>
        </ul>
      </div>
      <BtnPrimaryRed>LO QUIERO AHORA</BtnPrimaryRed>
    </div>
  )
}

export default AmountPerMonth
