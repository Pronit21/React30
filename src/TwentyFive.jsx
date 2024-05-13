import {useState} from 'react'

function TwentyFive() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
        <h1>Welcome on Board Sunny Leone</h1>
        {isLoggedIn && (
            <div>
                <h2>User Dashboard</h2>
                <p>Welcome back, User!</p>
                <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
            </div>
        )
        }
        {!isLoggedIn && (
            <div>
                <h2>Login Form</h2>
                <label htmlFor='username'>Username: </label>
                <input type='text' id='username' name="name" required/>
                <label htmlFor='password'>Password: </label>
                <input type='password' id='password' name="password" required/>
                <button onClick={()=>setIsLoggedIn(true)}>Login</button>
            </div>
        )}
        <footer>
            <p>Copyright &copy; 2021. All rights reserved</p>
        </footer>
    </div>
  )
}

export default TwentyFive