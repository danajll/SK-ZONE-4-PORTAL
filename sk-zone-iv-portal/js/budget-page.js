/* Budget Page */

document.addEventListener("DOMContentLoaded", () => {

    initBudgetChart();

    initBudgetFAQ();

});


/* Budget Chart */

function initBudgetChart() {

    const chartCanvas = document.getElementById("budgetPageChart");

    if (!chartCanvas) {
        return;
    }

    if (typeof Chart === "undefined") {

        console.warn("Chart.js is not loaded.");

        return;

    }

    const chartData = {

        labels: [

            "Education",

            "Health",

            "Environment",

            "Global Mobility",

            "General Administration",

            "Governance & Active Citizenship",

            "Social Inclusion & Equity",

            "Peace Building & Security",

            "Economic Empowerment",

            "Agriculture",

            "Linggo ng Kabataan"

        ],

        /* Temporary Chart Data */

        values: [

            8.61,

            3.33,

            1.17,

            0.72,

            49.15,

            15.88,

            0.65,

            1.09,

            3.26,

            0.94,

            15.20

        ],

        colors: [

            "#0155FD",

            "#2E8FFF",

            "#60A5FA",

            "#93C5FD",

            "#F59E0B",

            "#8B5CF6",

            "#EC4899",

            "#14B8A6",

            "#22C55E",

            "#84CC16",

            "#F97316"

        ]

    };

    const chartContext = chartCanvas.getContext("2d");

    new Chart(chartContext, {

        type: "doughnut",

        data: {

            labels: chartData.labels,

            datasets: [

                {

                    data: chartData.values,

                    backgroundColor: chartData.colors,

                    borderWidth: 0,

                    hoverOffset: 12

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            cutout: "72%",

            animation: {

                duration: 1400,

                easing: "easeOutQuart"

            },

            plugins: {

                legend: {

                    display: false

                },

                tooltip: {

                    backgroundColor: "#0D1B2A",

                    padding: 14,

                    cornerRadius: 12,

                    displayColors: true,

                    titleFont: {

                        family: "Poppins",

                        size: 13,

                        weight: "600"

                    },

                    bodyFont: {

                        family: "Poppins",

                        size: 12

                    },

                    callbacks: {

                        label(context) {

                            return ` ${context.parsed}%`;

                        }

                    }

                }

            }

        }

    });

}


/* Budget FAQ */

function initBudgetFAQ() {

    const faqItems = document.querySelectorAll(".faq-item");

    if (!faqItems.length) {
        return;
    }

    faqItems.forEach((item) => {

        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        if (!question || !answer) {
            return;
        }

        question.addEventListener("click", () => {

            const isOpen = item.classList.contains("active");

            /* Close All FAQ Items */

            faqItems.forEach((faqItem) => {

                faqItem.classList.remove("active");

                const faqQuestion = faqItem.querySelector(".faq-question");

                if (faqQuestion) {

                    faqQuestion.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            });

            /* Open Selected FAQ */

            if (!isOpen) {

                item.classList.add("active");

                question.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        });

    });

}