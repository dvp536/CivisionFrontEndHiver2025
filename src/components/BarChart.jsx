import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import importedData from "../../public/database.json";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const [prix, setPrix] = useState([]);

    useEffect(() => {
        function loadPrix() {
            const dataPrix = importedData.map((data) => data.prix);
            setPrix(dataPrix);
        }

        loadPrix();
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Bar Chart: Quarterly Revenue & Expenses Comparison",
            },
        },
    };

    const labels = ["Été", "Printemps", "Automne", "Hivers"];
    const data = {
        labels,
        datasets: [
            {
                label: "Q1 Sales",
                data: prix,
                backgroundColor: "rgba(75, 192, 192)",
                borderColor: "rgb(75, 192, 192)",
                borderWidth: 1,
            },
        ],
    };

    return <Bar options={options} data={data} />;
};

export default BarChart;
