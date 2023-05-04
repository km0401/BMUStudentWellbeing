// App.js
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import CalendlyMD from './Pages/CalendlyBookingMD'
import CalendlyWD from './Pages/CalendlyBookingWD'
import Doctors from './Pages/Doctors'
import Student from './Pages/Student'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/book1' element={<CalendlyMD />} />
        <Route path='/book2' element={<CalendlyWD />} />
        <Route path='/doctor' element={<Doctors/>}/>
        <Route path='/student' element={<Student/>}/>
      </Routes>
      {/* <Home/> */}
    </>
  )
}

export default App
