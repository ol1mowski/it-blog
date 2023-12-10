import Home from "./pages/Home/Home"
import {  QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from "./util/http"
import CategorySection from "./pages/CategorySection/CategorySection"


function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
      <CategorySection />
    </>
  )
}

export default App
