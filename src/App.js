import './App.css';

const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last name: {props.lastName}</h2>
    <h2>Age: 30</h2>
    </>
    
  )
}

const App = () => {
  return (
    <div className="App">
      <Person name={'John'} lastName={'Wett'}/>
      <Person name={'Aneta'} lastName={'Wellington'}/>
    </div>
  );
}

export default App;
