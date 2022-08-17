import base from 'infrastruture/base'
import useBaseProvider from 'infrastruture/requestHooks/useBaseProvider'
import Response from 'interfaces/response'

const { get } = base()

interface InitialDataType {
  message: string
}

const useGetInitialData = () => useBaseProvider<Response<InitialDataType>>({
  action: () => get<Response<InitialDataType>>('/a')
})

export default useGetInitialData