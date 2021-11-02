import { useState, useEffect, useRef } from 'react'

import Image from 'next/image'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'

import { useContextUser } from '@Context/contextUser'
import { CoverageUser, KeysCoverage } from '@Types'

const styleTransition = {
  transitionDuration: '200ms',
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
}

const initialHeight = 94

interface Props {
  coverage: CoverageUser
  keyCoverage: KeysCoverage
}

const Coverage: React.FC<Props> = ({ coverage, keyCoverage }) => {
  const [isOpenCoverage, setIsOpenCoverage] = useState<boolean>(false)
  const [height, setHeight] = useState<number>(initialHeight)

  const { title, description, price, image, isSelected } = coverage

  const refDiv = useRef<HTMLDivElement>(null)
  const { addCoverage, deleteCoverage } = useContextUser()

  useEffect(() => {
    //calculate the height
    if (isOpenCoverage) {
      const height = refDiv.current.getBoundingClientRect().height
      setHeight(height)
    } else {
      setHeight(initialHeight)
    }
  }, [isOpenCoverage])

  const handleOpenCoverage = () => {
    setIsOpenCoverage(!isOpenCoverage)
  }

  const handleSelectCoverage = () => {
    if (isSelected) {
      //remove coverage
      deleteCoverage({
        keyCoverage,
        idCoverage: coverage.id,
        priceCoverage: coverage.price,
      })
    } else {
      //TODO: add coverage
      addCoverage({ coverage, keyCoverage })
    }
  }

  return (
    <article
      className="overflow-hidden"
      style={{
        minHeight: `${height}px`,
        height: `${height}px`,
        ...styleTransition,
      }}
    >
      <div ref={refDiv} className="h-auto flex justify-between">
        <div className="min-w-12 h-12 mr-4">
          <Image
            layout="responsive"
            src={image}
            alt={title}
            width={20}
            height={20}
          />
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <h5 className="flex-grow-1 text-left">{title}</h5>
            <button onClick={handleOpenCoverage}>
              <KeyboardArrowDownIcon className="text-purple-primary" />
            </button>
          </div>
          <button
            onClick={handleSelectCoverage}
            className="text-purple-primary text-xs font-semibold mb-2"
          >
            {isSelected ? (
              <>
                <RemoveCircleOutlineIcon className="mr-1" />
                QUITAR
              </>
            ) : (
              <>
                <AddCircleOutlineIcon className="mr-1" />
                AGREGAR
              </>
            )}
          </button>
          <div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Coverage
