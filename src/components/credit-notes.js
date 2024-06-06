import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import AvailableCreditNotesTable from './available-credit-notes-table';
import Modal from './modal';

export default function CreditNotes({ invoices, selectedInvoiceId, setSelectedCreditNote, selectedCreditNote }){
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            { selectedInvoiceId &&
            invoices.filter(invoice => 
                invoice.type === 'credit_note' && invoice.reference === selectedInvoiceId
            ).length > 0 &&
            <>
                <p className="font-bold text-xl mb-8">
                    Selecciona una nota de credito
                </p>
                <AvailableCreditNotesTable
                    creditNotes={
                        invoices.filter(invoice => 
                            invoice.type === 'credit_note' && invoice.reference === selectedInvoiceId
                        )
                    }
                    selectedCreditNote={selectedCreditNote}
                    setSelectedCreditNote={setSelectedCreditNote}
                />
                
                { selectedCreditNote && 
                    <button
                        className='mt-8 bg-indigo-600 text-white rounded-md py-1 px-3'
                        onClick={() => setModalIsOpen(true)}
                    >
                        Asignar
                    </button>
                }
                <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
                    <div className='flex flex-col w-96 items-center gap-6'>
                        <FaCheckCircle className='text-green-500 text-4xl' />
                        <p className='font-semibold text-xl text-center w-64'>
                            Nota de credito asignada correctamente
                        </p>
                        <button 
                            className='bg-indigo-600 text-white rounded-md py-1 px-3 w-full'
                            onClick={
                                () => {
                                    setSelectedCreditNote(null);
                                    setModalIsOpen(false);
                                }
                            }
                        >
                            Seguir asignando
                        </button>
                    </div>
                </Modal>
            </>
            }
        </>
    )
}