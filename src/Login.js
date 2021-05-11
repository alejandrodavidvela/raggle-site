import React, {useCallback, useContext} from "react";
import "./Login.css"
import app from "./firebase";
import { AuthContext} from './Auth'
import { withRouter } from "react-router";
import { Redirect } from 'react-router-dom'




const Login = ({ history }) => {
    const handleLogin = useCallback(async event => {
        event.preventDefault()
        const {email, password } = event.target.elements
        try {
            await app
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
            history.push("/")
        } catch (error) {
            alert(error)
        }
    }, [history])

    const {currentUser} = useContext(AuthContext)
    if (currentUser) {
        return <Redirect to="/" />
    }


  return (
      <div >
          <h1>Login</h1>
                    <form onSubmit={handleLogin}>
                        <label>
                            Email
                            <input name="email" type="email" placeholder="Email" />
                        </label>
                        <label>
                            Password
                            <input name="password" type="password" placeholder="Password" />
                        </label>
                        <button type="submit">Submit</button>
                    </form>

      </div>
  );
}

export default withRouter(Login)