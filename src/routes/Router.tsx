
import { Navigate } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'
// import Resume from '../components/Resume'
import Title from '../components/Title'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Title />} />
            <Route path="/aboutme">
            {/*Temp holder */}
            </Route>
            <Route path="/projects">
            {/*Temp holder */}
            </Route>
            {/* <Route path="/resume" element={<Resume />} /> */}
            <Route path='/resume'  element={() => { 
              window.location.href = 'https://drive.google.com/file/d/1obthN9sq16jpwg8XaESW7y6sy-PSvU1H/preview'; 
              return null;
            }}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router