import Ninjas from './Ninjas';

function App() {
  return (
    <div className="App">
     <h1>My first React app !</h1>
     <p> Welcome:)</p>
     <Ninjas name ="kaya" age ="25" belt="black" />
     <Ninjas name ="bishu" age ="34" belt="white" />
    </div>
  );
}

export default App;
