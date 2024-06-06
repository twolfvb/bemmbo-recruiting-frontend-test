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
      <tr className={`cursor-pointer ${isSelected ? 'bg-indigo-100 text-indigo-800' : 'text-gray-600'}`} onClick={onSelect}>
        <td className="flex flex-row items-center py-4 px-4" >
          <input type="radio" checked={isSelected} onChange={handleRadioChange}/>
          <p className={`font-bold text-left pl-4 ${isSelected ? 'text-indigo-800' : 'text-gray-800'}`}>
            {invoice.id}
            <span className={`font-semibold ${isSelected ? 'text-indigo-600' : 'text-gray-400'}`}> ({invoice.organization_id}) </span>
          </p>
        </td>
        <td className="py-4 px-4">
          <p>
            <span className={`font-bold ${isSelected ? 'text-indigo-800' : 'text-gray-600'}`}> ${round(clpAmount)} CLP </span>
            <span className={`font-semibold ${isSelected ? 'text-indigo-600' : 'text-gray-400'}`}> (${round(usdAmount)} USD) </span>
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