import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Button from "./Buttton.jsx";
import NavBar from "./NavBar.jsx";
import pfp from './assets/pfp.png'
import thanks from './assets/thanks.png'

function App() {

  return(
    <>
      <Card name='Apothecary' pfp={pfp}/>
      <Card name='N0t_a_nam3' pfp={thanks}/>
      <NavBar/>
      <Button/>
      <Footer/>
    </>
  );
}

export default App
