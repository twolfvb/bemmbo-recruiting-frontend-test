export async function getPendingInvoices() {
    try {
        const response = await fetch('https://recruiting.api.bemmbo.com/invoices/pending');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}
