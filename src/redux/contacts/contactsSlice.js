import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, updateContact } from './operations';
import * as reducers from './reducers';

const actions = [fetchContacts, addContact, deleteContact, updateContact];

const getActions = type => actions.map(action => action[type]);

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, reducers.FetchContactsReducer)
      .addCase(addContact.fulfilled, reducers.AddContactReducer)
      .addCase(deleteContact.fulfilled, reducers.DeleteContactReducer)
      .addCase(updateContact.fulfilled, reducers.UpdateContactReducer)
      .addMatcher(
        isAnyOf(...getActions('fulfilled')),
        reducers.anyFulfilledReducer
      )
      .addMatcher(isAnyOf(...getActions('pending')), reducers.anyPendingReducer)
      .addMatcher(
        isAnyOf(...getActions('rejected')),
        reducers.anyRejectedReducer
      ),
});

export const contactsReducer = contactSlice.reducer;
