import { FormField, FormBtn } from '@Components/Form/components'
import { useContextUser } from '@Context/contextUser'

// 5. La obtención de la marca, año y modelo queda a criterio del desarrollador.
const GetDatos = () => {
  const { user } = useContextUser()

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="w-80">
        <p className="text-2xl text-center mb-4">
          Por favor, ingrese los siguientes datos 😀
        </p>
        <form className="p-2 flex flex-col">
          <FormField
            name="name"
            placeholder="Nombre"
            value=""
            onChange={() => {}}
          />
          <FormField
            name="marca"
            placeholder="Marca"
            value=""
            onChange={() => {}}
          />
          <FormField
            name="modelo"
            placeholder="Modelo"
            value=""
            onChange={() => {}}
          />
          <FormField
            type="number"
            name="año"
            placeholder="Año"
            value=""
            onChange={() => {}}
          />
          <FormBtn isDisable={false}>Continuar</FormBtn>
        </form>
      </div>
    </div>
  )
}

export default GetDatos
