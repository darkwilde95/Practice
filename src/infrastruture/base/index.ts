import axios, { AxiosPromise } from 'axios'

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8080'

const base = (instance = axios.create()) => ({
  get: <
    R = Record<string, any>,
    Q = Record<string, any>
  >(url: string, query?: Q): AxiosPromise<R> => instance({
    method: 'get',
    url,
    baseURL,
    params: query
  }),
  post: <
    B = Record<string, any>,
    R = Record<string, any>
  >(url: string, body: B): AxiosPromise<R> => instance({
    method: 'get',
    url,
    baseURL,
    data: body
  }),
  put: <
    B = Record<string, any>,
    R = Record<string, any>
  >(url: string, body: B): AxiosPromise<R> => instance({
    method: 'put',
    url,
    baseURL,
    data: body
  }),
  patch: <
    B = Record<string, any>,
    R = Record<string, any>
  >(url: string, body: B): AxiosPromise<R> => instance({
    method: 'patch',
    url,
    baseURL,
    data: body
  }),
  del: <
    R = Record<string, any>
  >(url: string): AxiosPromise<R> => instance({
    method: 'delete',
    url,
    baseURL
  })
})

export default base