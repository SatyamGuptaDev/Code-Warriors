// progress of a user in how many modules they have completed and in evry module how many lessons they have completed and in every lesson how much score they have achieved

import { createSlice } from "@reduxjs/toolkit";

const initialProgressState = { progress: [] };

const progressSlice = createSlice({
    name: "progress",
    initialState: initialProgressState,
    reducers: {
        addProgress(state, action) {
        state.progress = action.payload;
        },
    },
    });
    