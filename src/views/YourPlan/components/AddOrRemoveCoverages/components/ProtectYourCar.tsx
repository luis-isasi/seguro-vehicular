import coverages from '@/src/coverages'
import Coverage from '@Views/YourPlan/components/Coverage'
import { useContextUser } from '@Context/contextUser'
import { KEY_CAR } from '@Constants'

const ProtectYourCar = () => {
  const { user } = useContextUser()

  console.log({ user })

  const renderCoverages = () => {
    return coverages.protectCar.map((coverage, index) => {
      const coveragesUser = user.plan.coverage.car
      const isSelected = coveragesUser.find(
        (coverageUser) => coverageUser.id === coverage.id
      )

      const coverageProps = {
        ...coverage,
        isSelected: isSelected ? true : false,
      }
      return (
        <div key={index} className="my-4">
          <Coverage coverage={coverageProps} keyCoverage={KEY_CAR} />
        </div>
      )
    })
  }
  return <div className="py-4">{renderCoverages()}</div>
}

export default ProtectYourCar
