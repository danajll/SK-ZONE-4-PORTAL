/* Budget Doughnut Chart */

const chartCanvas = document.getElementById("budgetChart");

if (!chartCanvas) return;

new Chart(chartCanvas, {

    type: "doughnut",

    data: {

        labels: [

            "Education",
            "Sports",
            "Health",
            "Governance"

        ],

        datasets: [{

            data: [

                90000,
                88700,
                10000,
                250000

            ],

            backgroundColor: [

                "#0057B8",
                "#2F80ED",
                "#7EC8FF",
                "#DCEEFF"

            ],

            borderWidth: 0,

            hoverOffset: 12

        }]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        cutout: "70%",

        plugins: {

            legend: {

                display: false

            },

            tooltip: {

                enabled: true

            }

        }

    }

});