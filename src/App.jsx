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
      <div className='card'>

      </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
