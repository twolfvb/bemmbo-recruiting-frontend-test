import { useState, useEffect } from 'react';
import './App.css';
import { getPendingInvoices } from './api/bemmbo.js';
import ReceivedInvoicesTable from './received-invoices-table.js';
import CreditNotes from './credit-notes.js';

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
  const [selectedCreditNote, setSelectedCreditNote] = useState(null);

  useEffect(() => {
    setSelectedCreditNote(null);
  }, [selectedInvoiceId]);

  return (
    <div className="flex min-h-screen flex-col items-center overflow-auto pt-32">

      <div className='mt-8 flex flex-col items-center'>
        <p className="font-bold text-xl mb-8">
          Selecciona una factura
        </p>

        <ReceivedInvoicesTable
          invoices={invoices.filter(invoice => invoice.type === 'received')}
          selectedInvoiceId={selectedInvoiceId}
          setSelectedInvoiceId={setSelectedInvoiceId}
        />
      </div>

      <div className='my-8 flex flex-col items-center'>
        <CreditNotes
          invoices={invoices}
          selectedInvoiceId={selectedInvoiceId}
          setSelectedCreditNote={setSelectedCreditNote}
          selectedCreditNote={selectedCreditNote}
        />
      </div>
    </div>
  );
}

export default App;
