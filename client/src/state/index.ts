import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateTypes {
    // define your state types here
    isSidebarCollapsed?: boolean;
    isDarkMode?: boolean;
    language?: string;
}

const initialState = {
    isSidebarCollapsed: false,
    isDarkMode: false,
    language: "en",
};

export const globalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    // define your reducers here
    setIsSidebarCollapsed(state, action: PayloadAction<boolean>) {
        state.isSidebarCollapsed = action.payload;
    },
    setIsDarkMode(state, action: PayloadAction<boolean>) {
        state.isDarkMode = action.payload;
    },
    setLanguage(state, action: PayloadAction<string>) {
        state.language = action.payload;
    },
  },
});

export const { setIsSidebarCollapsed, setIsDarkMode, setLanguage } = globalSlice.actions;

export default globalSlice.reducer;

