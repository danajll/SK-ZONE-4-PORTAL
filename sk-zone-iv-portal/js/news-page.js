/* News Page */

document.addEventListener("DOMContentLoaded", () => {

    initNewsLibrary();

});


/* News Library */

function initNewsLibrary() {

    const searchInput =
        document.getElementById("newsSearch");

    const yearFilter =
        document.getElementById("newsYear");

    const filterButtons =
        document.querySelectorAll(".news-filter-btn");

    const newsCards =
        document.querySelectorAll(".news-card");

    const emptyState =
        document.getElementById("newsEmptyState");


    if (!newsCards.length) {
        return;
    }


    let activeCategory = "all";


    /* Filter News */

    function filterNews() {

        const searchValue =
            searchInput
                ? searchInput.value.toLowerCase().trim()
                : "";

        const selectedYear =
            yearFilter
                ? yearFilter.value
                : "all";


        let visibleNews = 0;


        newsCards.forEach((card) => {

            const newsTitle =
                (
                    card.getAttribute("data-news-title") || ""
                ).toLowerCase();

            const newsCategory =
                card.getAttribute("data-news-category") || "";

            const newsYear =
                card.getAttribute("data-news-year") || "";

            const cardText =
                card.textContent.toLowerCase();


            const matchesSearch =
                newsTitle.includes(searchValue) ||
                cardText.includes(searchValue);

            const matchesCategory =
                activeCategory === "all" ||
                newsCategory === activeCategory;

            const matchesYear =
                selectedYear === "all" ||
                newsYear === selectedYear;


            if (
                matchesSearch &&
                matchesCategory &&
                matchesYear
            ) {

                showNewsCard(card);

                visibleNews++;

            } else {

                hideNewsCard(card);

            }

        });


        updateNewsEmptyState(
            emptyState,
            visibleNews
        );

    }


    /* Search */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterNews
        );

    }


    /* Year Filter */

    if (yearFilter) {

        yearFilter.addEventListener(
            "change",
            filterNews
        );

    }


    /* Category Filters */

    filterButtons.forEach((button) => {

        button.addEventListener("click", () => {

            activeCategory =
                button.getAttribute("data-filter") || "all";


            setActiveNewsFilter(
                filterButtons,
                activeCategory
            );


            filterNews();

        });

    });


    /* Initial Filter */

    filterNews();

}


/* Active Filter */

function setActiveNewsFilter(
    filterButtons,
    activeCategory
) {

    filterButtons.forEach((button) => {

        const buttonFilter =
            button.getAttribute("data-filter");


        if (buttonFilter === activeCategory) {

            button.classList.add("active");

        } else {

            button.classList.remove("active");

        }

    });

}


/* Show News */

function showNewsCard(card) {

    card.classList.remove("news-hidden");

}


/* Hide News */

function hideNewsCard(card) {

    card.classList.add("news-hidden");

}


/* Empty State */

function updateNewsEmptyState(
    emptyState,
    visibleNews
) {

    if (!emptyState) {
        return;
    }


    if (visibleNews === 0) {

        emptyState.hidden = false;

    } else {

        emptyState.hidden = true;

    }

}