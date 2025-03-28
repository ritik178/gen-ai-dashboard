import { createSlice } from "@reduxjs/toolkit";

// Load history from localStorage
const loadHistory = () => {
    const savedHistory = localStorage.getItem("queryHistory");
    return savedHistory ? JSON.parse(savedHistory) : [];
};

const initialState = {
    query: "",
    results: null,
    history: loadHistory(),
    status: "idle",  //'idle'| 'loading'|'succeded'| 'failed
    error: null,
};


const querySlice = createSlice({
    name: "query",
    initialState,
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        submitQuery: (state) => {
            state.status = "loading....";
        },
        querySuccess: (state, action) => {
            state.status = "succeeded";
            const resultValue = action.payload.value
                ? parseFloat(action.payload.value.match(/\d+/)) || Math.floor(Math.random() * 10000)
                : "No Data";

                const dynamicMessage = action.payload.value
                ? `Answer to "${state.query}": ${action.payload.value} :- `
                : `Sorry, I couldn't find an answer for :- "${state.query}".`;

    // Create a structured result with a message
           state.results = {
             title: "Query Result",
             value: resultValue,
             message: dynamicMessage,
             timestamp: new Date().toLocaleString(),
            };
            
            // Save query and result to history
            const newEntry = {
                query: state.query,
                result: action.payload.value,
                timestamp: new Date().toLocaleString(),
            };

            state.history.unshift(newEntry)// Add latest query on top

            // Save to localStorage
            localStorage.setItem("queryHistory", JSON.stringify(state.history));
        },
        queryFailure: (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        },

        clearHistory: (state) => {
            state.history = [];
            localStorage.removeItem("queryHistory");
        }
    },
});

export const {setQuery, submitQuery, querySuccess, queryFailure, clearHistory} = querySlice.actions;
export default querySlice.reducer;