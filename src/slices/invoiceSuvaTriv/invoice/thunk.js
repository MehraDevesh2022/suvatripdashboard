import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Include Both Helper File with needed methods
import {
  getInvoice as getInvoicesApi,
  addInvoice as addNewInvoiceApi,
  updateInvoiceSuvaTrip as updateInvoiceApi,
  deleteInvoiceSuvaTrip as deleteInvoiceApi
} from "../../../helpers/fakebackend_helper";


 // Get Invoices

export const getSuvaInvoices = createAsyncThunk("invoice/getInvoices", async () => {
  try {
    const response = getInvoicesApi();
    return response;
  } catch (error) {
    return error;
  }
});

export const addSuvaNewInvoice = createAsyncThunk("invoice/addNewInvoice", async (invoice) => {
  try {
    const response = addNewInvoiceApi(invoice);
    toast.success("Invoice Added Successfully", { autoClose: 3000 });
    return response;
  } catch (error) {
    toast.error("Invoice Added Failed", { autoClose: 3000 });
    return error;
  }
});

export const updateSuvaInvoice = createAsyncThunk("invoice/updateInvoice", async (invoice) => {
  try {
    const response = updateInvoiceApi(invoice);
    toast.success("Invoice Updated Successfully", { autoClose: 3000 });
    const data = await response;
    return data;
  } catch (error) {
    toast.error("Invoice Updated Failed", { autoClose: 3000 });
    return error;
  }
});

export const deleteSuvaInvoice = createAsyncThunk("invoice/deleteInvoice", async (invoice) => {
  try {
    const response = deleteInvoiceApi(invoice);
    toast.success("Invoice Delete Successfully", { autoClose: 3000 });
    return { invoice, ...response };
  }
  catch (error) {
    toast.error("Invoice Delete Failed", { autoClose: 3000 });
    return error;
  }
});