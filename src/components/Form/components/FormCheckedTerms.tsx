import { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check'

interface Props {
  name: string
  isChecked: boolean
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const FormCheckedTerms: React.FC<Props> = ({ isChecked, onClick, name }) => {
  return (
    <div className="flex items-center mb-8">
      <button
        onClick={onClick}
        name={name}
        className={`w-5 h-5 flex justify-center items-center p-2 rounded-sm mx-2 border ${
          isChecked
            ? 'bg-green-300 border-transparent'
            : 'bg-transparent border-gray-300'
        }`}
      >
        {isChecked ? <CheckIcon style={{ fontSize: '22px' }} /> : null}
      </button>
      <p className="font-light text-sm text-gray-500">
        Acepto la{' '}
        <u className="font-normal">
          Política de Protecciòn de Datos Personales
        </u>{' '}
        y los <u className="font-normal">Términos y Condiciones.</u>
      </p>
    </div>
  )
}

export default FormCheckedTerms
