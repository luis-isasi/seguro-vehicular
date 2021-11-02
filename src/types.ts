import {
  MEDIAQUERY_SM,
  MEDIAQUERY_MD,
  MEDIAQUERY_LG,
  MEDIAQUERY_XL,
  MEDIAQUERY_2X1,
  KEY_AROUND,
  KEY_CAR,
  KEY_PLAN,
} from '@Constants'

export type KeysCoverage = typeof KEY_AROUND | typeof KEY_CAR | typeof KEY_PLAN

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
  vehicle: Vehicle
  plan: Plan
}

export interface Plan {
  amount: number
  coverage: {
    car: CoverageUser[]
    around: CoverageUser[]
    plan: CoverageUser[]
  }
}

export interface CoverageData {
  id: number
  title: string
  description: string
  price: number
  image?: string
}

export interface CoverageUser extends CoverageData {
  isSelected: boolean
}

export interface Vehicle {
  marca: string
  model: string
  year: string
  placa: string
}
