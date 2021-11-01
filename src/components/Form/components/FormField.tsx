interface Props {
  name: string
  type?: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: string
}

const FormField: React.FC<Props> = ({
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  errorMessage,
}) => {
  return (
    <div className="w-full mb-4">
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-14 px-4 border-1 border-gray-300 rounded-md mb-1 outline-none"
      />
      {errorMessage ? (
        <p className="text-red-500 text-center font-semibold text-xs ">
          {errorMessage}
        </p>
      ) : null}
    </div>
  )
}

export default FormField
