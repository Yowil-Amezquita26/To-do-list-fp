import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import './styles/normalize.css'
import './App.css'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import Task from './pages/taskPage/Task'
import "./components/task/AddTicket.css"
import LandingPage from './pages/LandingPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}>
        </Route>
        <Route path="/home" element={<HomePage/>}>
        </Route>
        <Route path="/user-page" element={<UserPage/>}>
        </Route>
        <Route path="/task" element={<Task/>}>
        </Route>
      </Routes>

      </Router>
    </div>
  )
}

export default App
