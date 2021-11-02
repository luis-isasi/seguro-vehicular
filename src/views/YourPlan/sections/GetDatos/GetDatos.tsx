import FormGetDatos from '../../components/FormGetDatos'

interface Props {
  onSuccess?: () => void
}

const GetDatos: React.FC<Props> = ({ onSuccess }) => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="w-80">
        <p className="text-2xl text-center mb-4">
          Por favor, ingrese los siguientes datos 😀
        </p>
        <FormGetDatos onSuccess={onSuccess} />
      </div>
    </div>
  )
}

export default GetDatos
