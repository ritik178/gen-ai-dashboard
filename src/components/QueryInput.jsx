import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery,submitQuery, querySuccess, queryFailure } from "../redux/querySlice";
import { FaSearch } from "react-icons/fa";


const QueryInput = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!input.trim()) return; // Prevent empty submissions

        dispatch(setQuery(input));
        dispatch(submitQuery());

        // Simulate AI-generated result
        setTimeout(() => {
            const mockResult = { value: `Mock result for "${input}"` };
            dispatch(querySuccess(mockResult));
        }, 1000);

        setInput(""); // Clear input field
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-100 shadow-md rounded-full w-full max-w-2xl">
            <div className="relative w-full">
                <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500" />
                <input
                    type="text"
                    placeholder="Ask a question..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-full border focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
            </div>
            <button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
                Submit
            </button>
        </form>
    );
};

export default QueryInput;