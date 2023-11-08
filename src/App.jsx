import { RouterProvider } from 'react-router-dom'
import router from './router'
import StoreContextProvider from './context/StoreContext'



function App() {
  return (
    <StoreContextProvider>
      <RouterProvider router={router} />
    </StoreContextProvider>
  )
}

export default App
