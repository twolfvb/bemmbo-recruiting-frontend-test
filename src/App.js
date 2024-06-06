import './App.css';
import { getPendingInvoices } from './api/bemmbo.js';
import ReceivedInvoicesTable from './received-invoices-table.js';
import AvailableCreditNotesTable from './available-credit-notes-table.js';
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
  const [selectedCreditNote, setSelectedCreditNote] = useState(null);

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

      { selectedInvoiceId && (
        <div className='my-8 flex flex-col items-center'>

          <p className="font-bold text-xl mb-8">
            Selecciona una nota de credito
          </p>
          <AvailableCreditNotesTable
            creditNotes={invoices.filter(invoice => invoice.type === 'credit_note' && invoice.reference === selectedInvoiceId)}
            selectedCreditNote={selectedCreditNote}
            setSelectedCreditNote={setSelectedCreditNote}
          />
        </div>
      )}
    </div>
  );
}

export default App;
