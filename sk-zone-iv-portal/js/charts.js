/* Budget Doughnut Chart */

const chartCanvas = document.getElementById("budgetChart");

if (chartCanvas) {

new Chart(chartCanvas, {

    type: "doughnut",

    data: {

        labels: [

            "Education",
            "Linggo ng Kabataan",
            "Governance & Active Citizenship",
            "General Administration"

        ],

        datasets: [{

            data: [

                119000,
                210000,
                219380,
                679252

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

}