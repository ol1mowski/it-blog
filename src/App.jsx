import Home from "./pages/Home/Home"
import {  QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from "./util/http"


function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </>
  )
}

export default App
