import InvoiceRow from "./bemmbo-invoice-row";
  
function ReceivedInvoicesTable({ invoices, selectedInvoiceId, setSelectedInvoiceId }) {
    return (
      <div className="bg-white rounded-lg border border-gray-200">
        <table>
          <tbody className="divide-y">
              {invoices.length > 0 && 
                  invoices.map(invoice => (
                      <InvoiceRow
                        key={invoice.id}
                        invoice={invoice}
                        isSelected={selectedInvoiceId === invoice.id}
                        onSelect={() => {
                          setSelectedInvoiceId(invoice.id)
                        }}
                      />
                  ))
              }
          </tbody>
        </table>
      </div>
    );
}

export default ReceivedInvoicesTable;