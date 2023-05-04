// App.js
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Doctor from './Pages/Doctor'
import CalendlyMD from './Pages/CalendlyBookingMD'
import CalendlyWD from './Pages/CalendlyBookingWD'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/book1' element={<CalendlyMD />} />
        <Route path='/book2' element={<CalendlyWD />} />
        <Route path='/doctor' element={<Doctor/>}/>
      </Routes>
      {/* <Home/> */}
    </>
  )
}

export default App
