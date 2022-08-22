import { useCallback, useState } from 'react'
import { AxiosError, AxiosPromise } from 'axios'

interface BaseActionParams<T, P, E> {
  action: (actionParams: P) => AxiosPromise<T>,
  onSuccess: (data: T) => void
  onError: (err: AxiosError<E>) => void
}

interface StateType<T, E> {
  data?: T
  error?: AxiosError<E>
  isLoading: boolean
}

const useBaseAction = <T, P, E = T>({ action, onSuccess, onError }: BaseActionParams<T, P, E>) => {

  const [response, setResponse] = useState<StateType<T, E>>()

  const execRequest = useCallback((params: P) => {
    setResponse({ isLoading: true })
    action(params).then(res => {
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
  }, []) // eslint-disable-next-line

  return {
    ...response,
    execRequest
  }
}

export default useBaseAction