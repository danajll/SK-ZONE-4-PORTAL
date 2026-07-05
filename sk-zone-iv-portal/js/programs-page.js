/* Programs Page */

document.addEventListener("DOMContentLoaded", () => {

    initProgramFilters();

});


/* Program Filters */

function initProgramFilters() {

    const filterButtons = document.querySelectorAll(
        ".program-filter-btn"
    );

    const programCards = document.querySelectorAll(
        ".featured-program-card"
    );


    if (!filterButtons.length || !programCards.length) {
        return;
    }


    filterButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const selectedFilter =
                button.getAttribute("data-filter");


            filterButtons.forEach((filterButton) => {

                filterButton.classList.remove("active");

            });


            button.classList.add("active");


            programCards.forEach((card) => {

                const programArea =
                    card.getAttribute("data-program-area");


                if (
                    selectedFilter === "all" ||
                    programArea === selectedFilter
                ) {

                    showProgramCard(card);

                } else {

                    hideProgramCard(card);

                }

            });

        });

    });

}


/* Show Program */

function showProgramCard(card) {

    card.classList.remove("program-hidden");

}


/* Hide Program */

function hideProgramCard(card) {

    card.classList.add("program-hidden");

}