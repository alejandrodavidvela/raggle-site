import React, {useContext} from "react";
import app from './firebase';
import RaggleItems from './RaggleItems'
import Header from './Header'
import { AuthContext} from './Auth'
import './Home.css'

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



const Home = ({history}) => {
    const {currentUser} = useContext(AuthContext)
    return (
        <>
            <Header user={currentUser}/>
            <RaggleItems data={data}/>
            <div className="raggle__button">
            <button onClick={() => app.auth().signOut()}>Sign Out</button>
            </div>
        </>
    )
}

export default Home
