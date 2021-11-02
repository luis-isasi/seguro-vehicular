import { useRouter } from 'next/router'
import CheckIcon from '@mui/icons-material/Check'

import BtnPrimaryRed from '@/src/components/buttons/BtnPrimaryRed'
import { useContextUser } from '@Context/contextUser'

const CheckIconCustomer = () => (
  <CheckIcon className="text-green-300 mr-3" style={{ fontSize: '20px' }} />
)

const AmountPerMonth = () => {
  const {
    user: {
      plan: { amount },
    },
    resetUser,
  } = useContextUser()
  const router = useRouter()

  const handleGetInsurance = () => {
    resetUser()
    router.push('/thanks')
  }

  return (
    <div className="relative top-20 text-gray-700">
      <div className="border-b-2 border-gray-300 py-7 mb-7">
        <p className="mb-2">MONTO</p>
        <p className="text-4xl mb-2">$ {amount}</p>
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
      <BtnPrimaryRed onClick={handleGetInsurance}>
        LO QUIERO AHORA
      </BtnPrimaryRed>
    </div>
  )
}

export default AmountPerMonth
