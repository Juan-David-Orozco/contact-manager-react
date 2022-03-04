//import './App.css';
import ContactManager from './components/ContactManager';

const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

function App() {
  return (
    <div className="App">

      <ContactManager data={contacts} />

    </div>
  );
}

export default App;
