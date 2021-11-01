import {
  MEDIAQUERY_SM,
  MEDIAQUERY_MD,
  MEDIAQUERY_LG,
  MEDIAQUERY_XL,
  MEDIAQUERY_2X1,
} from '@Constants'

//Media Query
export type MediaQuery =
  | typeof MEDIAQUERY_SM
  | typeof MEDIAQUERY_MD
  | typeof MEDIAQUERY_LG
  | typeof MEDIAQUERY_XL
  | typeof MEDIAQUERY_2X1

export interface User {
  dni: string
  phone: string
  name: string
  vehicle: {
    marca: string
    model: string
    year: string
    placa: string
  }
}
