interface Props {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  isDisable: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const FormBtn: React.FC<Props> = ({ isDisable, type, children, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisable}
      className="bg-red-rimac hover:bg-red-400 disabled:bg-gray-500 disabled:cursor-not-allowed ease-out duration-300 px-12 lg:px-16  py-3 lg:py-4 text-white font-semibold rounded-md"
    >
      {children}
    </button>
  )
}

export default FormBtn
