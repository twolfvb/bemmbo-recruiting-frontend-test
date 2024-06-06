import InvoiceRow from "./bemmbo-invoice-row";
  
function ReceivedCreditNotesTable({ creditNotes, selectedCreditNote, setSelectedCreditNote }) {
    return (
      <div className="bg-white rounded-lg border border-gray-200">
        <table>
          <tbody className="divide-y">
              {creditNotes.length > 0 && 
                  creditNotes.map(creditNote => (
                      <InvoiceRow
                        key={creditNote.id}
                        invoice={creditNote}
                        isSelected={selectedCreditNote === creditNote.id}
                        onSelect={() => {
                          setSelectedCreditNote(creditNote.id)
                        }}
                      />
                  ))
              }
          </tbody>
        </table>
      </div>
    );
}

export default ReceivedCreditNotesTable;