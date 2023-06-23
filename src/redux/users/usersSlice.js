import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Williams', email: 'bob@example.com' },
  ],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: state.users.length + 1,
        name: action.payload.name,
        email: action.payload.email,
      };
      state.users.push(newUser);
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const userIndex = state.users.findIndex(user => user.id === id);
      if (userIndex !== -1) {
        state.users[userIndex].name = name;
        state.users[userIndex].email = email;
      }
    },
    deleteUser: (state, action) => {
      const id = action.payload;
      state.users = state.users.filter(user => user.id !== id);
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    }
  },
});

export const { addUser, editUser, deleteUser, setUsers } = usersSlice.actions;
export default usersSlice.reducer;
