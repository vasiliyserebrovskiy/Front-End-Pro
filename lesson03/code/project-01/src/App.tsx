import "./App.css";
// import Card from "./components/Card/Card";
import Greeting from "./components/Greeting/Greeting";
import ThankYou from "./components/ThankYou/ThankYou";
import Goodbye from "./components/Goodbye/Goodbye";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import { Counter } from "./components/Counter/Counter";
import PersonalGreeting from "./components/PersonalGreeting/PersonalGreeting";
import WeightCalculator from "./components/WeightCalculator/WeightCalculator";

function App() {
  return (
    <>
      <WeightCalculator />
      <Counter />
      <Counter />
      <PersonalGreeting />
      <Greeting name={"Vasilii"} age={42} />
      <Goodbye />

      {/* <Card url={"/poodle.jpeg"} alt={"Some cat"} /> */}
      <ProfileCard
        avatar={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_OnnNWRipITQo-bd-dGcXJzonSdG-M8YmQ&s"
        }
        name={"Some Name"}
        description={"Some text for my description"}
      />
      <ThankYou />
    </>
  );
}

export default App;
