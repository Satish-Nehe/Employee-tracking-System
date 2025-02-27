import './App.css'
import { Route, Routes } from 'react-router'
import Home from './Components/Home'
import OfficesData from './Components/OfficesData'
import ProjectsData from './Components/ProjectsData'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/offices-data/:office_city' element={<OfficesData />} />
      <Route path='/projects-data/:project_name' element={<ProjectsData />} />
     </Routes>
    </>
  )
}

export default App
