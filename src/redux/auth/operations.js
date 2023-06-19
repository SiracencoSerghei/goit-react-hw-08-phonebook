import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { showErrorToast, showSuccessToast } from 'src/utils/messages';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      console.log(res.data);
      if (res.status === 201) {
        showSuccessToast('User is created.');
      }
      return res.data;
    } catch (error) {
      if (error.res) {
        const { status } = error.res;
        if (status === 400) {
          showErrorToast('User creation error.');
        } else if (status === 500) {
          showErrorToast('Server error');
        }
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      if (res.status === 200) {
        console.log('res', res)
        showSuccessToast(`User ${res.data.user.name} is logged in.`);
      }
      return res.data;
    } catch (error) {
      if (error.res) {
        const { status } = error.res;
        if (status === 400) {
          showErrorToast('User login error.');
        }
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    if (thunkAPI.getState().auth.token) {
      showSuccessToast('User is logged out.');
    }
    clearAuthHeader();
  } catch (error) {
    if (error.response) {
      const { status } = error.response;
      if (status === 400) {
        showErrorToast('Missing header with authorization token.');
      } else if (status === 500) {
        showErrorToast('Server error');
      }
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(showErrorToast(error.message));
    }
  }
);
