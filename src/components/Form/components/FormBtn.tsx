import BtnPrimaryRed from '@Components/buttons/BtnPrimaryRed'

interface Props {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  isDisabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const FormBtn: React.FC<Props> = ({ isDisabled, type, children, onClick }) => {
  return (
    <BtnPrimaryRed type={type} onClick={onClick} isDisabled={isDisabled}>
      {children}
    </BtnPrimaryRed>
  )
}

export default FormBtn
