import './App.css';
import pastaa from "./pastaa.jpeg";

function SecretComponenet() {
  return <h1>Secret information for authorized users only</h1>
}

function RegularComponent() {
  return <h1>Everyone can see this component</h1>;
}

function App(props) {
  return (
    <>
    {props.authorized ? <SecretComponenet />:  <RegularComponent />}
    </>
  );
  
  
}

export default App;
