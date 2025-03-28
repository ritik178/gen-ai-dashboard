import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearHistory } from "../redux/querySlice";
import { FaTrashAlt } from "react-icons/fa";  // Add an icon for clear history

const QueryHistory = () => {
    const dispatch = useDispatch();
    const history = useSelector((state) => state.query.history);

    return (
        <div className="p-6 border-t mt-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">Query History</h2>
                {history.length > 0 && (
                    <button 
                        onClick={() => dispatch(clearHistory())} 
                        className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm transition-all duration-200"
                    >
                        <FaTrashAlt className="mr-2" />
                        Clear History
                    </button>
                )}
            </div>

            {history.length > 0 ? (
                <ul className="space-y-4">
                    {history.map((item, index) => (
                        <li key={index} className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg shadow-md transition-all duration-200">
                            <p className="font-medium text-gray-700">Query: <span className="font-normal text-gray-500">{item.query}</span></p>
                            <p className="text-sm text-gray-600 mt-1">Result: <span className="font-normal text-gray-500">{item.result.value}</span></p>
                            <p className="text-xs text-gray-400 mt-2">{item.timestamp}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500 text-center">No history yet.</p>
            )}
        </div>
    );
};

export default QueryHistory;

