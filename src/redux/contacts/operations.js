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
      if (e.response) {
        const { status } = e.response;
        if (status === 401) {
          showErrorToast('Missing header with authorization token.');
        } else if (status === 404) {
          showErrorToast('There is no such user collection.');
        } else if (status === 500) {
          showErrorToast('Server error');
        }
      }
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
        showSuccessToast('The contact was successfully created.');
      }
      return response.data;
    } catch (e) {
      if (e.response) {
        const { status } = e.response;
        if (status === 400) {
          showErrorToast('Error creating contact');
        } else if (status === 401) {
          showErrorToast('Missing header with authorization token.');
        }
      }
      return thunkAPI.rejectWithValue(showErrorToast(e.message));
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      if (response.status === 200) {
        showSuccessToast('The contact was successfully deleted.');
      }
      return response.data;
    } catch (e) {
      if (e.response) {
        const { status } = e.response;
        if (status === 401) {
          showErrorToast('Missing header with authorization token.');
        } else if (status === 404) {
          showErrorToast('There is no such user collection.');
        } else if (status === 500) {
          showErrorToast('Server error');
        }
      }
      return thunkApi.rejectWithValue(showErrorToast(e.message));
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, contact }, thunkAPI) => {
    // console.log(id, contact);
    try {
      const response = await axios.patch(`/contacts/${id}`, contact);
      if (response.status === 200) {
        showSuccessToast('The contact was successfully updated.');
      }
      return response.data;
    } catch (error) {
      const { status } = error.response;
      if (status === 400) {
        showErrorToast('Error updating contact');
      } else if (status === 400) {
        showErrorToast('Contact update failed.');
      } else if (status === 401) {
        showErrorToast('Missing header with authorization token.');
      }
    }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);