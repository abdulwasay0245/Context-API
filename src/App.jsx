import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
 

  return (
    
    <UserContextProvider>
      <h1>Hi there, Please fill the form</h1>
      <Login />
      <Profile />
      </UserContextProvider>
    
  )
}

export default App
