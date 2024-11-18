import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import dataset from "../../public/database.json"

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend, Title);
const DoughnutChart = () => {
    // Process the dataset to group prices by "saison"
    const labels = ["Été", "Printemps", "Automne", "Hiver"];
    const saisonPrix = {
        été: 0,
        printemps: 0,
        automne: 0,
        hiver: 0,
    };
  
    dataset.forEach((entry) => {
        if (saisonPrix[entry.saison] !== undefined) {
            saisonPrix[entry.saison] += entry.prix;
        }
    });
  
    const dataValues = Object.values(saisonPrix);
  
    const data = {
        labels,
        datasets: [
            {
                data: dataValues,
                backgroundColor: [
                    "rgba(255, 99, 132)",
                    "rgba(53, 162, 235)",
                    "rgba(255, 206, 86)",
                    "rgba(75, 192, 192)",
                ],
                borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(53, 162, 235)",
                    "rgb(255, 206, 86)",
                    "rgb(75, 192, 192)",
                ],
                borderWidth: 1,
            },
        ],
    };
  
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Prix Total par Saison",
            },
        },
    };
  
    return <Doughnut data={data} options={options} />;
};
  
export default DoughnutChart;
  