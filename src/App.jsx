import { useState, useEffect } from "react";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import importedData from "../public/database.json";
import "./App.css";

function App() {
    const [prixMoyen, setPrixMoyen] = useState(0);
    const [seasonFilter, setSeasonFilter] = useState("all");
    
    useEffect(() => {
        function loadPrix() {
            const dataPrix = importedData.map((data) => data.prix);
            let avg = 0;
            if (seasonFilter === "all") {
                for (let i = 0; i < dataPrix.length; i++) {
                    avg += dataPrix[i];
                }
                setPrixMoyen(avg / dataPrix.length);
            } else {
                let compteur = 0;
                for (let i = 0; i < importedData.length; i++) {
                    if (seasonFilter === importedData[i].saison) {
                        avg += importedData[i].prix;
                        compteur++;                        
                    }
                }
                setPrixMoyen(avg / compteur);
            }
        }

        loadPrix();
    }, [seasonFilter]);

    return (
        <div className="App">
            <h1>Tableau de bord intéractif</h1>
            <div className="filter-container">
                <select name="SeasonFilter" id="SeasonFilter" onChange={(e) => setSeasonFilter(e.target.value)}>
                    <option value="all">Toutes les saisons</option>
                    <option value="été">Été</option>
                    <option value="printemps">Printemps</option>
                    <option value="automne">Automne</option>
                    <option value="hiver">Hiver</option>
                </select>
                <h2 className="prix-moyen">Prix moyen: {Math.round(prixMoyen * 100) / 100}$</h2>
            </div>
            <div className="charts-container">
                <div className="BarChart">
                    <BarChart />
                </div>
                <div className="Pie">
                    <PieChart />
                </div>
            </div>
        </div>
    );
}

export default App;
