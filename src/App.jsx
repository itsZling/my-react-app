import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Button from "./Buttton.jsx";
import Students from "./Students.jsx";
import NavBar from "./NavBar.jsx";
import pfp from './assets/pfp.png'
import thanks from './assets/thanks.png'

function App() {

  return(
    <>
      <Card name='Apothecary' pfp={pfp}/>
      <Card name='Apothecary' pfp={thanks}/>
      <NavBar/>
      <Students name='Spongbob' age={30} isStudent={true}/>
      <Button/>
      <Footer/>
    </>
  );
}

export default App
