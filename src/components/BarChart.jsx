import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import importedData from "../../public/database.json";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ selectedSeason }) => {
    const [levelCounts, setLevelCounts] = useState({ novice: 0, pro: 0, moyen: 0 });

    useEffect(() => {
        function loadLevels() {
            // Filter the data by the selected season and count levels
            const filteredData =
            selectedSeason.toLowerCase() === "all"
                ? importedData
                : importedData.filter((entry) => entry.saison === selectedSeason.toLowerCase());

            const counts = filteredData.reduce((acc, entry) => {
                acc[entry.niveau] = (acc[entry.niveau] || 0) + 1;
                return acc;
            }, { novice: 0, pro: 0, moyen: 0 });

            setLevelCounts(counts);
        }

        loadLevels();
    }, [selectedSeason]); // Re-run when the selected season changes

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: `Nombre de Personnes par Niveau (${selectedSeason})`,
            },
        },
    };

    const labels = ["Novice", "Pro", "Moyen"];
    const data = {
        labels,
        datasets: [
            {
                label: "Nombre de Personnes",
                data: [levelCounts.novice, levelCounts.pro, levelCounts.moyen],
                backgroundColor: "rgba(75, 192, 192, 0.5)",
                borderColor: "rgb(75, 192, 192)",
                borderWidth: 1,
            },
        ],
    };

    return <Bar options={options} data={data} />;
};

export default BarChart;
