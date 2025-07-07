import "./App.css";
import Card from "./components/Card/Card";
import Greeting from "./components/Greeting/Greeting";
import ThankYou from "./components/ThankYou/ThankYou";
import digPictures from "./assets/poodle2.jpeg";

function App() {
  return (
    <>
      <Greeting name={"Vasilii"} age={42} />
      <Greeting name={"Evgenii"} />
      <Card url={"/poodle.jpeg"} alt={"Some cat"} />
      <Card url={digPictures} alt={"Some cat"} />
      <ThankYou />
    </>
  );
}

export default App;
