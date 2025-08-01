import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext);

  if (!user) {
    return <h1>Fill out your login form</h1>
  }
  return (
      <div>
          <h1>Welcome,{user.username }</h1>
    </div>
  )
}

export default Profile