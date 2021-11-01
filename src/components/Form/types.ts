export type StateForm =
  | 'INITIAL'
  | 'READYFORSUBMIT'
  | 'LOADING'
  | 'ERROR'
  | 'COMPLETED'

export interface InitialState {
  dni: string
  phone: string
  placa: string
  isAceptTerms: boolean
  errorsMessage: {
    error: string
    dni: string
    phone: string
    placa: string
    isAceptTerms: string
  }
}

export type FormAction =
  | {
      type: 'SET_FIELD'
      name: string
      value: string | boolean
    }
  | {
      type: 'SET_ERROR'
      name: string
      message: string
    }
  | {
      type: 'CLEAN_ERROR'
      name: string
    }
// | {
//     type: 'SET_STATE_FORM'
//     newState: StateForm
//   }
