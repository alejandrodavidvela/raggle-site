import React, {useCallback, useContext} from "react";
import "./Login.css"
import app from "./firebase";
import { AuthContext} from './Auth'
import { withRouter } from "react-router";
import { Redirect } from 'react-router-dom'
import {Card, CardContent, Button} from '@material-ui/core'




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
      <div className="container" >
          <Card className="login">
              <CardContent className="login__main">
                  <div className="login__items">
                      <div className="login__formItems">
                    <h1>RAGGLE</h1>
                    </div>
                    <div className="login__formItems">
                    <h4 className="login__text_1">LOGIN WITH YOUR</h4>
                    <h4 className="login__text_1">@BUMPERACTIVE.COM GMAIL ADDRESS</h4>
                    </div>
                    
                    <div>
                    <form className="login__form" onSubmit={handleLogin}>
                        <div className="login__formItems">
                        <label>
                            Email
                            <div>
                            <input name="email" type="email" placeholder="Email" />
                            </div>
                        </label>
                        </div>
                        <div className="login__formItems">
                        <label>
                            Password
                            <div>
                            <input name="password" type="password" placeholder="Password" />
                            </div>
                        </label>
                        </div>
                        <div className="login__formItems">
                        <Button className="login__button" variant="contained" color="primary" type="submit">Submit</Button>
                        </div>
                    </form>
                    </div>
                    </div>
                    </CardContent>
            </Card>
      </div>
  );
}

export default withRouter(Login)