import './App.css';
import pastaa from "./pastaa.jpeg";

function Header(props) {
  console.log(props);
  return (
  <header>
    <h1>{props.name}'s Kitchen</h1>
  </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>Serving {props.adjective} Food year round.</p>
      <img src={pastaa} height={200} alt="bowl of pasta with basil and tomatoes"/>
<ul style={{textAlign: 'left'}}>
  {props.dishes.map((dish) => (
  <li key={dish.id}>{dish.title}</li>))}
</ul>
    </section>
  );
}


function Footer(props) {
  return (
  <footer>
    <p>Copyright {props.year}</p>
  </footer>
  );
}


const dishes= [
  "mac + cheese",
  "Salmon + Grits",
  "Tofu + Veg",
  "Pumpkin Rav + Sage",
  "Tomato + Garlic Pasta"
];

const dishObjects= dishes.map((dish, i) => ({id:i, title:dish}));
console.log(dishObjects);


function App() {
  return (
    <div className="App">
      <Header name="Marcie" />
      <Main adjective="Unworldly" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
