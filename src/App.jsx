import React, { useState } from "react";
import "./App.css";
import PowerBIReport from "./components/PowerBIReport";
import RankingTable from "./components/RankingTable";

function App() {
  const [selectedArea, setSelectedArea] = useState(null);

  const handleSelectArea = (row) => {
    setSelectedArea(row);
    // Later you can also send this to Unreal + Map
  };

  return (
    <div className="app-root">
      {/* Top-left: Unreal */}
      <section className="panel panel-unreal">
        <div className="panel-header">
          <h2>Unreal</h2>
        </div>
        <div className="panel-body">
          <div className="placeholder">Unreal goes here</div>
        </div>
      </section>

      {/* Bottom-left: Map */}
      <section className="panel panel-map">
        <div className="panel-header">
          <h2>Map</h2>
        </div>
        <div className="panel-body">
          <div className="placeholder">Map goes here</div>
        </div>
      </section>

      {/* Right: PowerBI + external Ranking */}
      <section className="panel panel-right">
        <div className="panel-header">
          <h2>POWERBI – SHADELA</h2>
        </div>

        <div className="panel-body right-body">
          <div className="right-powerbi">
            <PowerBIReport selectedArea={selectedArea} />
          </div>

          <div className="right-ranking">
            <RankingTable onSelectArea={handleSelectArea} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
