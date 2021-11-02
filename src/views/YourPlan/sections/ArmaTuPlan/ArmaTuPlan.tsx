import ConfigYourPlan from './sections/ConfigYourPlan'
import AmountPerMonth from './sections/AmountPerMonth'

interface Props {
  handleReturnStepGetDatos: () => void
}

const ArmaTuPlan: React.FC<Props> = ({ handleReturnStepGetDatos }) => {
  return (
    <div className="h-full flex ">
      <div className="flex-grow-1 flex justify-center px-4 xl:px-0">
        <ConfigYourPlan handleReturnStepGetDatos={handleReturnStepGetDatos} />
      </div>
      <div className="lg:w-72 xl:w-76 2xl:w-88 px-4">
        <AmountPerMonth />
      </div>
    </div>
  )
}

export default ArmaTuPlan
