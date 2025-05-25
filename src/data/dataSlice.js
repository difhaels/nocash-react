// File: dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {},
  reducers: {
    setData: (state, action) => {
      return action.payload;
    },
    updateAkun: (state, action) => {
      state.akun = action.payload;
    },
    tambahTransaksi: (state, action) => {
      state.transaksi.push(action.payload);
    },
    hapusTransaksi: (state, action) => {
      state.transaksi = state.transaksi.filter(t => t.id !== action.payload);
    },
  },
});

export const { setData, updateAkun, tambahTransaksi, hapusTransaksi } = dataSlice.actions;
export default dataSlice.reducer;