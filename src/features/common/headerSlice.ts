import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeaderState {
    pageTitle: string;
    noOfNotifications: number;
    newNotificationMessage: string;
    newNotificationStatus: number;
}

const initialState: HeaderState = {
    pageTitle: "Home",
    noOfNotifications: 15,
    newNotificationMessage: "",
    newNotificationStatus: 1,
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setPageTitle: (state, action: PayloadAction<{ title: string }>) => {
            state.pageTitle = action.payload.title;
        },

        removeNotificationMessage: (state) => {
            state.newNotificationMessage = "";
        },

        showNotification: (state, action: PayloadAction<{ message: string, status: number }>) => {
            state.newNotificationMessage = action.payload.message;
            state.newNotificationStatus = action.payload.status;
        },
    }
});

export const { setPageTitle, removeNotificationMessage, showNotification } = headerSlice.actions;

export default headerSlice.reducer;
