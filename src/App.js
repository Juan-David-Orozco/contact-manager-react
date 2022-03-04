import './App.css';
import ContactManager from './components/ContactManager';

const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];
//const contacts = []
console.log(contacts)

function App() {
  return (
    <ContactManager data={contacts} />
  );
}

export default App;
