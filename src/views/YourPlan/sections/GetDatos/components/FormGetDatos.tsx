import { useState } from 'react'

import { FormField, FormBtn } from '@Components/Form/components'
import type { StateFormGetData } from '../types'
import { useContextUser } from '@Context/contextUser'
import { User } from '@/src/types'

// const initialState: StateFormGetData = {
//   name: '',
//   marca: '',
//   model: '',
//   year: '',
//   errors: {
//     year: '',
//   },
// }

//TODO: asegurarse que siempre halla un user
interface Props {
  onSuccess?: () => void
}

const Form: React.FC<Props> = ({ onSuccess }) => {
  const { user, updateUser } = useContextUser()
  const [state, setState] = useState<StateFormGetData>({
    name: user.name,
    marca: user.vehicle.marca,
    model: user.vehicle.model,
    year: user.vehicle.year,
    errors: { year: '' },
  })

  console.log({ user })

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const updatedUser: User = {
      ...user,
      name: state.name,
      vehicle: {
        ...user.vehicle,
        marca: state.marca,
        model: state.model,
        year: state.year,
      },
    }

    updateUser(updatedUser)
    onSuccess && onSuccess()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    setState({ ...state, [name]: value })
  }

  const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    if (value.length === 4) {
      setState({
        ...state,
        [name]: value,
        errors: { ...state.errors, [name]: '' },
      })
    } else {
      setState({
        ...state,
        [name]: value,
        errors: { ...state.errors, [name]: 'El año debe ser de 4 digitos' },
      })
    }
  }

  const isDisabled = () => {
    if (
      !state.errors.year &&
      state.name &&
      state.marca &&
      state.model &&
      state.year
    ) {
      return false
    } else return true
  }

  return (
    <form className="p-2 flex flex-col">
      <FormField
        name="name"
        placeholder="Nombre del propietario"
        value={state.name}
        onChange={handleChange}
      />
      <FormField
        name="marca"
        placeholder="Marca de su vehiculo"
        value={state.marca}
        onChange={handleChange}
      />
      <FormField
        name="model"
        placeholder="Modelo de su vehiculo"
        value={state.model}
        onChange={handleChange}
      />
      <FormField
        type="number"
        name="year"
        placeholder="Año de su vehiculo"
        value={state.year}
        onChange={handleYear}
        errorMessage={state.errors.year}
      />
      <FormBtn onClick={onSubmit} type="submit" isDisable={isDisabled()}>
        Continuar
      </FormBtn>
    </form>
  )
}

export default Form
