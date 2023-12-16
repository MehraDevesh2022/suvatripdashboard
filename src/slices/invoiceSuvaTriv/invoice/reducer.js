import { createSlice } from "@reduxjs/toolkit";
import { getSuvaInvoices  as getInvoices , addSuvaNewInvoice as  addNewInvoice, updateSuvaInvoice as  updateInvoice, deleteSuvaInvoice as deleteInvoice } from './thunk';


export const initialState = {
  invoices: [],
  error: {},
};


const InvoiceSuvaSlice = createSlice({
  name: 'InvoiceSuvaSlice',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getInvoices.fulfilled, (state, action) => {
      state.invoices = action.payload.data;
      state.isInvoiceCreated = false;
      state.isInvoiceSuccess = true;
    });

    builder.addCase(getInvoices.rejected, (state, action) => {
      state.error = action.payload.error || null;
      state.isInvoiceCreated = false;
      state.isInvoiceSuccess = false;
    });

    builder.addCase(addNewInvoice.fulfilled, (state, action) => {
      state.invoices.push(action.payload);
      state.isInvoiceCreated = true;
    });

    builder.addCase(addNewInvoice.rejected, (state, action) => {
      state.error = action.payload.error || null;
    });

    builder.addCase(updateInvoice.fulfilled, (state, action) => {
      state.invoices = state.invoices.map(invoice =>
        invoice._id.toString() === action.payload.data._id.toString()
          ? { ...invoice, ...action.payload.data }
          : invoice
      );
    });
    builder.addCase(updateInvoice.rejected, (state, action) => {
      state.error = action.payload.error || null;
    });

    builder.addCase(deleteInvoice.fulfilled, (state, action) => {
      state.invoices = state.invoices.filter(
        invoice => invoice._id.toString() !== action.payload.invoice.toString()
      );
    });
    
    builder.addCase(deleteInvoice.rejected, (state, action) => {
      state.error = action.payload.error || null;
    });
  }
});

export default InvoiceSuvaSlice.reducer;