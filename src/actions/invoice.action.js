import axios from 'axios';
import notificationActions from './notifications.action';
import getServerCore from '../utils/apiUtils';

const { serverUrl } = getServerCore();

export const InvoiceMap = {
    GET_INVOICE_START: 'GET_INVOICE_START',
    GET_INVOICE_SUCCESS: 'GET_INVOICE_SUCCESS',
    GET_INVOICE_ERROR: 'GET_INVOICE_ERROR',
    SET_INVOICEPAGE_NUMBER: 'SET_INVOICEPAGE_NUMBER',
    REFRSH_INVOICE_LIST: 'REFRSH_INVOICE_LIST',
    RECURRING_PAYMENT_START: 'RECURRING_PAYMENT_START',
    RECURRING_PAYMENT_SUCCESS: 'RECURRING_PAYMENT_SUCCESS',
    RECURRING_PAYMENT_ERROR: 'RECURRING_PAYMENT_ERROR',
}

export const InvoiceActions = {
    getInvoiceStart: () => ({type: InvoiceMap.GET_INVOICE_START}),
    getInvoiceSuccess: (data) => ({type: InvoiceMap.GET_INVOICE_SUCCESS, payload: data}),
    getInvoiceError: () => ({type: InvoiceMap.GET_INVOICE_ERROR}),
    setInvoicePage: (num) => ({type: InvoiceMap.SET_INVOICEPAGE_NUMBER, payload: num}),
    recurringStart: () => ({type: InvoiceMap.RECURRING_PAYMENT_START}),
    recurringSuccess: () => ({type: InvoiceMap.RECURRING_PAYMENT_SUCCESS}),
    recurringError: () => ({type: InvoiceMap.RECURRING_PAYMENT_ERROR}),
    refreshList: () => ({type: InvoiceMap.REFRSH_INVOICE_LIST}),
}

export const getInvoiceListAsync = (isReccuring) => async (dispatch, getState) => {
    try {
        dispatch(InvoiceActions.getInvoiceStart());
        const {
            auth: {
                user: {
                    tokens,
                    _id
                }
            },
            invoice: {
                limit,
                batchNumber
            }
        } = getState();
        const {data} = await axios({
            url: `${serverUrl}/corporate-admin/getInvoiceList/${batchNumber - 1}/${limit}`,
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                tokens,
            },
            data: {
                isReccuring,
                corporateId: _id,
            }
        })
        if(data.response && data.response.responseCode === 200) {
            return dispatch(InvoiceActions.getInvoiceSuccess(data.response))
        }
        dispatch(InvoiceActions.getInvoiceError());
    } catch (error) {
        dispatch(InvoiceActions.getInvoiceError());
    }
}

export const confirmRecurringPayment = (paypalDetails, invoice) => async (dispatch, getState) => {
    try {
        dispatch(InvoiceActions.recurringStart());
        const {
            auth: {
                user: {
                    tokens,
                    _id
                }
            }
        } = getState();
        const {data} = await axios({
            url: `${serverUrl}/corporate-admin/recurringInvoicePayment`,
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                tokens,
            },
            data: {
                paypalDetails,
                orderId: invoice.orderId,
                invoiceNo: invoice.invoiceDetails.invoiceNo,
                corporateId: _id,
            }
        })
        if(data.response && data.response.responseCode === 200) {
            return dispatch(InvoiceActions.recurringSuccess())
        }
        dispatch(InvoiceActions.recurringError());
    } catch (error) {
        dispatch(InvoiceActions.recurringError());
    }
}
