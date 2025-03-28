# Gen AI Analytics

## 🚀 Live Demo
🔗 [Click here to view the deployed app](https://gen-ai-dashboard-ivory.vercel.app/)


## Overview
Gen AI Analytics is a React-based web application that allows users to input queries and receive AI-generated responses. The application maintains a history of queries and their results, displaying them in a visually appealing UI with data visualization.

## Features
- **Query Input:** Users can submit questions through an input field.
- **AI-Simulated Responses:** Generates mock AI responses for demonstration.
- **Query History:** Displays previous queries along with their results.
- **Data Visualization:** Uses Chart.js to present numerical results in a bar chart.
- **State Management:** Implements Redux Toolkit for efficient state handling.
- **Dark Mode Support:** UI is styled to support dark mode.

## Technologies Used
- **Frontend:** React.js, Tailwind CSS
- **State Management:** Redux Toolkit
- **UI Components:** React Icons
- **Data Visualization:** Chart.js

## Project Structure
```
📦 Gen AI Analytics
├── 📂 src
│   ├── 📂 components
│   │   ├── QueryInput.js
│   │   ├── QueryHistory.js
│   │   ├── QueryResults.js
│   ├── 📂 redux
│   │   ├── store.js
│   │   ├── querySlice.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css (optional)
├── 📄 package.json
├── 📄 README.md
```

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/gen-ai-analytics.git
   cd gen-ai-analytics
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Usage
- Type a query in the input field and click **Submit**.
- The AI will generate a mock response and display it.
- The query and result are stored in the **history section**.
- Numerical responses are displayed as bar charts.
- Clear the history using the **Clear History** button.

## Dependencies
```json
"dependencies": {
  "react": "^18.0.0",
  "react-redux": "^8.0.0",
  "@reduxjs/toolkit": "^1.8.0",
  "chart.js": "^3.7.1",
  "react-chartjs-2": "^4.0.0",
  "react-icons": "^4.3.1",
  "tailwindcss": "^3.0.0"
}
```

## Future Enhancements
- Integrate with an actual AI model (e.g., OpenAI API).
- Implement a **database** for persistent query history.
- Enhance UI with more interactive elements.
- Add authentication for user-based query tracking.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---


