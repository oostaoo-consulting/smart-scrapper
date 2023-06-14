// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

interface ValueState {
  counter: number;
  isOpen: boolean;
}
interface InitialState {
  value: ValueState;
}

// We initialize the store state with some values
const initialState: InitialState = {
  value: {
    counter: 0,
    isOpen: false,
  },
};

const dataSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleOpen: (state) => ({
      ...state,
      value: {
        ...state.value,
        isOpen: !state.value.isOpen,
      },
    }),
  },
});

export const { toggleOpen } = dataSlice.actions;
export default dataSlice.reducer;
