import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><strong>Anshul Kushwaha</strong></p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/anshulcivil/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a className="App-link" href="https://www.instagram.com/anshulthakur111/" target="_blank" rel="noopener noreferrer"> Instagram </a>
        <a href="tel:9953709702">9953709702</a>
        
        {/* <img class="circular--portrait" src="https://d1fdloi71mui9q.cloudfront.net/p8NgH3hcQaGTXLSESeSg_uPOgU2I29wNEiwwd" alt="Anshul Kushwaha" /> */}
      </header>

    </div>
  );
}

export default App;
