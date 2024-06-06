function InvoiceRow({ invoice }) {
    return (
      <tr className="text-gray-600">
        <td>
          <p className="text-gray-800 font-semibold text-left">
            {invoice.id}
            <span className="text-gray-600 font-normal"> ({invoice.organization_id}) </span>
          </p>
        </td>
        <td>
          <p>
            {invoice.amount}
            <span>
              <span className="text-gray-600 font-normal"> {invoice.currency} </span>
            </span>
          </p>
        </td>
        <td>
          {invoice.type}
        </td>
      </tr>
    );
  }

function InvoiceTable({ invoices }) {
    return (
      <table className="bg-gray-100 rounded-lg">
        <tbody>
            {invoices.length > 0 && 
                invoices.map(invoice => (
                    <InvoiceRow
                      key={invoice.id}
                      invoice={invoice}
                    />
                ))
            }
        </tbody>
      </table>
    );
}

export default InvoiceTable;