import { useState, useEffect } from 'react'
import { AxiosError, AxiosPromise } from 'axios'

interface BaseProviderParams<T, E> {
  action: () => AxiosPromise<T>
  dependencies?: Array<any>
  condition?: boolean
  onSuccess?: (data: T) => void
  onError?: (err: AxiosError<E>) => void
}

interface StateType<T, E> {
  data?: T
  error?: AxiosError<E>
  isLoading: boolean
}

const useBaseProvider = <T, E = T>({
  action,
  dependencies = [],
  condition = true,
  onSuccess,
  onError
}: BaseProviderParams<T, E>) => {

  const [response, setResponse] = useState<StateType<T, E>>()

  useEffect(() => {
    setResponse({ isLoading: true })
    action().then(res => {
      setResponse({
        data: res.data,
        isLoading: false,
        error: undefined
      })
      if (onSuccess) onSuccess(res.data)
    }).catch((err: AxiosError<E>) => {
      setResponse({
        data: undefined,
        isLoading: false,
        error: err
      })
      if (onError) onError(err)
    })
  }, [...dependencies, condition]) // eslint-disable-next-line

  return {
    ...response
  }
}

export default useBaseProvider