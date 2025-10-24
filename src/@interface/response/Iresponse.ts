export interface IResponse<T> {
  data: T | null
  success: boolean
  message: string

  loading: boolean
  statusCode: number
  timestamp: string
  errors: string[]
  meta?: {
    total?: number
    page?: number
    perPage?: number
  }
}
export interface IResponseSingle<T> {
  data: T | null
  success: boolean
  message: string
  errors: string[]
}
