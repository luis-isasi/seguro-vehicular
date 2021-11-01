interface Props {
  isDisable: boolean
}

const FormBtn: React.FC<Props> = ({ isDisable }) => {
  return (
    <button
      disabled={isDisable}
      className="h-14 bg-red-rimac hover:bg-red-400 disabled:bg-gray-500 disabled:cursor-not-allowed ease-out duration-300 px-16 py-4 text-white font-semibold rounded-md"
    >
      COTÍZALO
    </button>
  )
}

export default FormBtn
