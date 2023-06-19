import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { showErrorToast } from 'src/utils/messages';

// axios.defaults.baseURL =
//   'https://63830e926e6c83b7a98b06c3.mockapi.io/phonebook';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({name, number}, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        name: name,
        number: number,
      });
      if (response.status === 201) {
        // console.log('status', response.status)
      }
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(showErrorToast(e.message));
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, contact }, thunkAPI) => {
    
    try {
      const response = await axios.patch(`/contacts/${id}`, contact);
      return response.data;
    } catch (error) {      
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);