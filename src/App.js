import logo from './logo.svg';
import './App.css';
import { getPendingInvoices } from './api/bemmbo.js';
import { useState, useEffect } from 'react';

function App() {

  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    async function fetchInvoices() {
      const data = await getPendingInvoices();
      setInvoices(data);
    }
    fetchInvoices();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {JSON.stringify(invoices)}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
