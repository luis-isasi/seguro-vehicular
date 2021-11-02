import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

import { useContextUser } from '@Context/contextUser'
import BtnCircle from '@Components/buttons/BtnCircle'
import VehicleInfo from '@Views/YourPlan/components/VehicleInfo'
import InsuredSum from '@Views/YourPlan/components/InsuredSum'
import AddOrRemoveCoverages from '@Views/YourPlan/components/AddOrRemoveCoverages'

const ConfigYourPlan = () => {
  const { user } = useContextUser()

  const handleClick = () => {}

  return (
    <section className="w-96 pt-10">
      <div className="border-b-2 border-gray-light pb-10 mb-10">
        <header className="mb-10">
          <div className="flex items-center mb-5">
            <BtnCircle onClick={handleClick} className="mr-2">
              <KeyboardArrowLeftIcon style={{ fontSize: '20px' }} />
            </BtnCircle>
            <p className="text-gray-400 text-xs">VOLVER</p>
          </div>
          <h3 className="text-4xl mb-2">
            ¡Hola, <span className="text-red-400">{user.name}!</span>
          </h3>
          <p className="text-sm">Conoce las coberturas para tu plan</p>
        </header>
        <div className="mb-10">
          <VehicleInfo vehicle={user.vehicle} />
        </div>
        <InsuredSum />
      </div>
      <AddOrRemoveCoverages />
    </section>
  )
}

export default ConfigYourPlan
