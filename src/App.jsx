function App() {
    return <div>
        <h1>Tableau de bord intéractif</h1>
        <select name="SeasonFilter" id="SeasonFilter">
            <option value="">Toutes les saisons</option>
            <option value="été">Été</option>
            <option value="printemps">Printemps</option>
            <option value="automne">Automne</option>
            <option value="hivers">Hivers</option>
        </select>
        <h1>Prix moyen: {}$</h1>
        <div className="tableau1">

        </div>
        <div className="tableau2">
            
        </div>
    </div>
}

export default App
