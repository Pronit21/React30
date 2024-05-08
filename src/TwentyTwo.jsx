import {useAuth} from './AuthContext'
function TwentyTwo() {
    const {user, login, logout} = useAuth();
  return (
    <div>
        <h1>User Authentication example</h1>
        {
        user ? (
            <div>
            <p>Welcome, {user.username}</p>
            <button onClick={logout}>Logout</button>
            </div>
        ):(
            <button onClick={()=>login({username: 'user12345'})}>Login</button>
        )
        }
    </div>
  )
}

export default TwentyTwo