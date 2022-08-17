import useGetInitialData from 'api/useGetInitialData'

const App = () => {

  const { data, isLoading, error } = useGetInitialData()

  if (isLoading) return (
    <div>Cargando</div>
  )

  if (error) return (
    <div>{`${error.response?.data}`}</div>
  )

  return (
    <>
      <div>Holi</div>
      <div>{`${data?.data}`}</div>
    </>
  )
}

export default App;
