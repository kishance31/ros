import { InvoiceMap } from '../actions/invoice.action';

const initState = {
    invoiceList: [],
    totalRecords: 0,
    refreshList: true,
    isLoading: false,
    batchNumber: 1,
    limit: 5,
    isReccuring: false,
}

const InvoiceReducer = (state = initState, action) => {
    switch (action.type) {
        case InvoiceMap.GET_INVOICE_SUCCESS: {
            return {
                ...state,
                invoiceList: action.payload.list,
                totalRecords: action.payload.totalRecords,
                refreshList: false,
            }
        }
        case InvoiceMap.GET_INVOICE_ERROR: {
            return {
                ...state,
                refreshList: false,
            }
        }
        case InvoiceMap.SET_INVOICEPAGE_NUMBER: {
            return {
                ...state,
                batchNumber: action.payload,
                refreshList: true
            }
        }
        case InvoiceMap.REFRSH_INVOICE_LIST: {
            return {
                ...state,
                refreshList: true,
                batchNumber: 1
            }
        }
        case InvoiceMap.RECURRING_PAYMENT_SUCCESS: {
            return {
                ...state,
                refreshList: true,
            }
        }
        case InvoiceMap.SET_IS_RECURRING: {
            return {
                ...state,
                refreshList: true,
                isReccuring: action.payload,
            }
        }

        default:
            return { ...state };
    }
}

export default InvoiceReducer;