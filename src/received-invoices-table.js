const USD_TO_CLP = 920;


function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

function InvoiceRow({ invoice, isSelected, onSelect }) {
    const handleRadioChange = (e) => {
      // Prevent the event from propagating to the row's onClick handler
      e.stopPropagation();
      onSelect();
    };

    const clpAmount = invoice.currency === 'USD' ? invoice.amount * USD_TO_CLP : invoice.amount;
    const usdAmount = invoice.currency === 'CLP' ? invoice.amount / USD_TO_CLP : invoice.amount;


    return (
      <tr className="text-gray-600 cursor-pointer" onClick={onSelect}>
        <td className="flex flex-row items-center" >
          <input type="radio" checked={isSelected} onChange={handleRadioChange}/>
          <p className="text-gray-800 font-semibold text-left pl-4">
            {invoice.id}
            <span className="text-gray-600 font-normal"> ({invoice.organization_id}) </span>
          </p>
        </td>
        <td>
          <p>
            <span className="text-gray-600 font-normal"> ${round(clpAmount)} CLP </span>
            <span className="text-gray-600 font-normal"> (${round(usdAmount)} USD) </span>
          </p>
        </td>
        <td>
          {invoice.type}
        </td>
      </tr>
    );
  }

function InvoiceTable({ invoices }) {
    const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);
  
    return (
      <table className="bg-gray-100 rounded-lg">
        <tbody>
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
    );
}

export default InvoiceTable;