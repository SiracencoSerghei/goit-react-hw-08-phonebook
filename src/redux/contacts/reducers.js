export const FetchContactsReducer = (state, action) => {
  state.contacts.items = action.payload;
};
export const AddContactReducer = (state, action) => {
  state.contacts.items.push(action.payload);
};

// export const DeleteContactReducer = (state, action) => {
//   const index = state.contacts.items.findIndex(
//     contact => contact.id === action.payload.id
//   );
//   state.contacts.items.splice(index, 1);
// };

export const DeleteContactReducer = (state, action) => {
  if (state.contacts && state.contacts.items) {
    const index = state.contacts.items.findIndex(
      contact => contact.id === action.payload.id
    );
    if (index !== -1) {
      state.contacts.items.splice(index, 1);
    }
  }
};

export const UpdateContactReducer = (state, action) => {
  // console.log(state);
  state.contacts.items.map(contact => {
    if (contact.id === action.payload.id) {
      contact.name = action.payload.name;
      contact.number = action.payload.number;
    }
    return contact;
  })};

export const anyFulfilledReducer = state => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
};

export const anyPendingReducer = state => {
  state.contacts.isLoading = true;
};

export const anyRejectedReducer = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};
