import { USD_TO_CLP } from '../utils/currency';
import round from '../utils/round';

function InvoiceRow({ invoice, isSelected, onSelect }) {
    const handleRadioChange = (e) => {
      // Prevent the event from propagating to the row's onClick handler
      e.stopPropagation();
      onSelect();
    };

    const clpAmount = invoice.currency === 'USD' ? invoice.amount * USD_TO_CLP : invoice.amount;
    const usdAmount = invoice.currency === 'CLP' ? invoice.amount / USD_TO_CLP : invoice.amount;


    return (
      <tr className={`text-gray-600 cursor-pointer ${isSelected ? 'bg-indigo-100' : ''}`} onClick={onSelect}>
        <td className="flex flex-row items-center py-4 px-4" >
          <input type="radio" checked={isSelected} onChange={handleRadioChange}/>
          <p className="text-gray-800 font-bold text-left pl-4">
            {invoice.id}
            <span className="text-gray-400 font-semibold"> ({invoice.organization_id}) </span>
          </p>
        </td>
        <td className="py-4 px-4">
          <p>
            <span className="text-gray-600 font-bold"> ${round(clpAmount)} CLP </span>
            <span className="text-gray-400 font-semibold"> (${round(usdAmount)} USD) </span>
          </p>
        </td>
        <td className="py-4 px-4">
          {
            invoice.type === 'received' ? 
            invoice.type :
            invoice.reference
          }
        </td>
      </tr>
    );
  }

export default InvoiceRow;