import React, { useState } from "react";
import Table from "./components/Table";
import { exportTableToCSV } from "./helpers/csvUtil";
import "./App.css";

function App() {
  const [rows, setRows] = useState(100);

  const handleCSVDownload = (event: React.ChangeEvent<EventTarget>) => {
    event.preventDefault();
    exportTableToCSV(`Table ${new Date(Date.now()).toLocaleString()}`);
  };

  return (
    <div className="App">
      <Table rows={rows} />
      <button onClick={() => setRows(rows + 100)}>More rows sire?</button>
      <button onClick={handleCSVDownload}>Export to CSV?</button>
    </div>
  );
}

export default App;
