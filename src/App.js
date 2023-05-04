// App.js
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import CalendlyMD from './Pages/CalendlyBookingMD'
import CalendlyWD from './Pages/CalendlyBookingWD'
import Doctors from './Pages/Doctors'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/book1' element={<CalendlyMD />} />
        <Route path='/book2' element={<CalendlyWD />} />
        <Route path='/doctors' element={<Doctors/>}/>
      </Routes>
      {/* <Home/> */}
    </>
  )
}

export default App
