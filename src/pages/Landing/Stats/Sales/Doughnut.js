import React from "react";
import dynamic from "next/dynamic";

// import { Doughnut } from "react-chartjs-2";
const Doughnut = dynamic(() => import('react-chartjs-2'),{ssr:false});

const data = {
    labels: ["New Users", "deleted users", "Active users"],
    datasets: [
        {
            data: [99, 166, 24],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            borderWidth: 1
        }
    ]
};
const DoughnutClass = () => {


    return <Doughnut data={data} />;
}

export default DoughnutClass;