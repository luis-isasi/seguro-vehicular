interface Props {
  onClick: () => void
  className?: string
}

const BtnCircle: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-5 h-5 bg-transparent text-xs font-bold text-gray-400 hover:text-gray-300 rounded-full border 
       border-gray-400 hover:border-gray-300 flex justify-center items-center ease-out duration-300 ${className}`}
    >
      {children}
    </button>
  )
}

export default BtnCircle
