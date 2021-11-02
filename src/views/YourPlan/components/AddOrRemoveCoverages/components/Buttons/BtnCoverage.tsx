interface Props {
  name: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  isOpen: boolean
}

const BtnCoverage: React.FC<Props> = ({ name, onClick, isOpen, children }) => {
  return (
    <button
      name={name}
      onClick={onClick}
      className={`flex-grow-1 h-16 border-b-3 border-gray-300 ${
        isOpen && 'border-red-rimac'
      }`}
    >
      {children}
    </button>
  )
}

export default BtnCoverage
