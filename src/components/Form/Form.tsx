import { useReducer } from 'react'
import { useRouter } from 'next/router'

import { useContextUser } from '@Context/contextUser'
import { FormField, FormCheckedTerms, FormBtn } from './components'
import type { User } from '@Types'
import type { FormAction, InitialState } from './types'
import { CLEAN_ERROR, SET_ERROR, SET_FIELD } from './constants'

const initialState: InitialState = {
  dni: '',
  phone: '',
  placa: '',
  isAceptTerms: false,
  errorsMessage: {
    error: '',
    dni: '',
    phone: '',
    placa: '',
    isAceptTerms: '',
  },
}

const formReducer = (state: InitialState, action: FormAction) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      }
    case SET_ERROR:
      return {
        ...state,
        errorsMessage: {
          ...state.errorsMessage,
          [action.name]: action.message,
        },
      }
    case CLEAN_ERROR:
      return {
        ...state,
        errorsMessage: {
          ...state.errorsMessage,
          [action.name]: '',
        },
      }
    default:
      return state
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState)
  const { updateUser } = useContextUser()
  const router = useRouter()

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const newUser: User = {
      name: '',
      dni: state.dni,
      phone: state.phone,
      vehicle: {
        marca: '',
        model: '',
        year: '',
        placa: state.placa,
      },
      plan: {
        insuredSum: 14500,
        amount: 20,
        coverage: {
          car: [],
          around: [],
          plan: [],
        },
      },
    }

    updateUser(newUser)
    router.push('/yourplan')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    dispatch({
      type: SET_FIELD,
      name,
      value,
    })

    if (name === 'dni') {
      validateDni({ name, value })
    }
    if (name === 'phone') {
      validatePhone({ name, value })
    }
  }

  const validateDni = ({ name, value }: { [key: string]: string }) => {
    if (value.length === 8) {
      //   //clean error if there is one
      if (state.errorsMessage.dni) {
        dispatch({ type: CLEAN_ERROR, name })
      }
    } else {
      dispatch({
        type: SET_ERROR,
        name,
        message: 'El DNI debe tener 8 digitos',
      })
    }
  }

  const validatePhone = ({ name, value }: { [key: string]: string }) => {
    if (value.length === 9) {
      //clean error if there is one
      if (state.errorsMessage.phone) {
        dispatch({ type: CLEAN_ERROR, name })
      }
    } else {
      dispatch({
        type: SET_ERROR,
        name,
        message: 'El numero debe tener 9 digitos',
      })
    }
  }

  const handleCheckedTerms = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget
    dispatch({
      type: SET_FIELD,
      name,
      value: !state.isAceptTerms,
    })
  }

  const isDisabled = () => {
    if (
      !state.errorsMessage.dni &&
      !state.errorsMessage.phone &&
      !state.errorsMessage.placa &&
      !state.errorsMessage.isAceptTerms &&
      state.dni &&
      state.phone &&
      state.placa &&
      state.isAceptTerms
    ) {
      return false
    } else return true
  }

  return (
    <div className="w-76 flex flex-col items-center px-4 sm:px-0">
      <p className="text-2xl lg:text-3xl text-center mb-4 lg:mb-8">
        Déjanos tus datos
      </p>
      <form className="w-full flex flex-col">
        <FormField
          type="number"
          name="dni"
          placeholder="DNI"
          value={state.dni}
          onChange={handleChange}
          errorMessage={state.errorsMessage.dni}
        />
        <FormField
          type="number"
          name="phone"
          placeholder="Celular"
          value={state.phone}
          onChange={handleChange}
          errorMessage={state.errorsMessage.phone}
        />
        <FormField
          name="placa"
          placeholder="Placa"
          value={state.placa}
          onChange={handleChange}
          errorMessage={state.errorsMessage.placa}
        />
      </form>
      <FormCheckedTerms
        name="isAceptTerms"
        isChecked={state.isAceptTerms}
        onClick={handleCheckedTerms}
      />
      <FormBtn type="submit" onClick={onSubmit} isDisable={isDisabled()}>
        COTÍZALO
      </FormBtn>
    </div>
  )
}

export default Form
