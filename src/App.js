import React from 'react'
import './App.css';
import Login from './Login'
import SignUp from './SignUp'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './screens/Home'
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute'


const data = [
  {
    id: 1,
    title: "Uline Gloves",
    description: "high quality gloves",
    imageUrl: "https://images.uline.com/is/image//content/dam/images/S/S15500/S-15332L.jpg?$MediumRHD$&iccEmbed=1&icc=AdobeRGB"
  },
  {
    id: 2,
    title: "Uline Wagon",
    description: "high quality wagon",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71DyEQCMuzL._AC_SL1500_.jpg"
  }
]



function App() {
 



  return (
    <AuthProvider>
    <Router>
    <div>
      <PrivateRoute exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
