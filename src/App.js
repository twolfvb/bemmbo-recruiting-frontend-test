import './App.css';
import { getPendingInvoices } from './api/bemmbo.js';
import ReceivedInvoicesTable from './received-invoices-table.js';
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

  const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
          <ReceivedInvoicesTable
            invoices={invoices.filter(invoice => invoice.type === 'received')}
            selectedInvoiceId={selectedInvoiceId}
            setSelectedInvoiceId={setSelectedInvoiceId}
          />
      </header>
    </div>
  );
}

export default App;
