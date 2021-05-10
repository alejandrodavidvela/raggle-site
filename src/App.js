import './App.css';
import Header from './Header'
import RaggleItems from './RaggleItems';
import EnterAll from './EnterAll'


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
    <div className="app">
      <Header />
      {/* raggle items and buttons to enter specific item */}
      <RaggleItems data={data} />
      {/* button to enter for any item  */}
      <EnterAll />
    </div>
  );
}

export default App;
