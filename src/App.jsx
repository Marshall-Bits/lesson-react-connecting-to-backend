import ApartmentsPage from './pages/ApartmentsPage'
import AddApartmentPage from './pages/AddApartmentPage'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

import './App.css'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/apartments' element={<ApartmentsPage />} />
        <Route path='/apartments/add' element={<AddApartmentPage />} />
      </Routes>
    </>
  )
}

export default App
