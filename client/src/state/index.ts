import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateTypes {
    // define your state types here
    isSidebarCollapsed?: boolean;
    isDarkMode?: boolean;
}

const intialState = {
    isSidebarCollapsed: false,
    isDarkMode: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState: intialState,
  reducers: {
    // define your reducers here
    setIsSidebarCollapsed(state, action: PayloadAction<boolean>) {
        state.isSidebarCollapsed = action.payload;
    },
    setIsDarkMode(state, action: PayloadAction<boolean>) {
        state.isDarkMode = action.payload;
    }
  },
});

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;

export default globalSlice.reducer;

