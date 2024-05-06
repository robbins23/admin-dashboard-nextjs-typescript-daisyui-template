import { Lead } from '@/helper/types';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the return type of the async thunk
interface GetLeadsResponse {
    data: Lead[];
}

export const getLeadsContent = createAsyncThunk<GetLeadsResponse, void>(
    "leads/getLeadsContent",
    async (thunkApi) => {
        const response = await axios.get<GetLeadsResponse>("/api/users?page=2");
        const data: GetLeadsResponse = response.data;
        return data;
    }
  );
interface LeadsState {
    isLoading: boolean;
    leads: Lead[];
}

const initialState: LeadsState = {
    isLoading: false,
    leads: []
};

const leadsSlice = createSlice({
    name: 'leads',
    initialState,
    reducers: {
        addNewLead: (state, action: PayloadAction<{newLeadObj : Lead}>) => {
            // Add the new lead to the leads array
            state.leads.push(action.payload.newLeadObj);
        },
        deleteLead: (state, action: PayloadAction<{index : number}>) => {
            // Delete the lead by index
            state.leads.splice(action.payload.index, 1);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getLeadsContent.pending, (state) => {
            // Set isLoading to true while fetching data
            state.isLoading = true;
        });
        builder.addCase(getLeadsContent.fulfilled, (state, action) => {
            // Set isLoading to false and update leads state with the fetched data
            state.isLoading = false;
            console.log(action.payload.data)
            state.leads = action.payload.data
        });
        builder.addCase(getLeadsContent.rejected, (state) => {
            // Set isLoading to false if fetching data fails
            state.isLoading = false;
        });
    }
});

export const { addNewLead, deleteLead } = leadsSlice.actions;

export default leadsSlice.reducer;
