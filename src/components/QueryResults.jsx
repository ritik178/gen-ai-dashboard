import React from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

//  Register necessary scales and elements for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const QueryResults = () => {
    const { results, status, error } = useSelector((state) => state.query);

    if (status === "loading") {
        return <p className="text-blue-500 text-center mt-4">Please wait, loading...</p>;
    }

    if (status === "failed") {
        return <p className="text-red-500 text-center mt-4">{error}</p>;
    }

    if (!results || !results.value) {
        return <p className="text-white-500 text-center mt-4">No results to display...</p>;
    }

    //  Ensure results.value is a number
    const value = parseInt(results.value) || 0;

    const data = {
        labels: ["Sales"],
        datasets: [
            {
                label: results.title || "Query Result",
                data: [parseInt(results.value) || 0],
                backgroundColor: ["#4CAF50"],
            },
        ],
    };

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Results</h2>
            
            {/* Show the AI-like generated response */}
            <p className="text-lg font-medium text-black-700">
                {results.message || "Here’s the answer to your query: "} 
                <span className="font-bold text-red-600">{results.value}</span>
            </p>

            {/*  Display the generated chart */}
            <div className="mt-4">
                <Bar data={data} />
            </div>

            {/* Show timestamp */}
            <p className="text-gray-400 text-sm mt-2">Generated on: {results.timestamp}</p>
        </div>
    );
};

export default QueryResults;
