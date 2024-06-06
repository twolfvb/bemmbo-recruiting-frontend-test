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
    <div className="flex min-h-screen flex-col items-center overflow-auto pt-32">
      <p className="font-bold text-xl mb-8">
        Selecciona una factura
      </p>

      <ReceivedInvoicesTable
        invoices={invoices.filter(invoice => invoice.type === 'received')}
        selectedInvoiceId={selectedInvoiceId}
        setSelectedInvoiceId={setSelectedInvoiceId}
      />
    </div>
  );
}

export default App;
