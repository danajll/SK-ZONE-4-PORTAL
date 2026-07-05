/* Downloads Page */

document.addEventListener("DOMContentLoaded", () => {

    initDocumentLibrary();

});


/* Document Library */

function initDocumentLibrary() {

    const searchInput =
        document.getElementById("documentSearch");

    const yearFilter =
        document.getElementById("documentYear");

    const filterButtons =
        document.querySelectorAll(".document-filter-btn");

    const categoryButtons =
        document.querySelectorAll(".category-explore-btn");

    const documentCards =
        document.querySelectorAll(".official-document-card");

    const emptyState =
        document.getElementById("documentEmptyState");

    const documentLibrary =
        document.getElementById("document-library");


    if (!documentCards.length) {
        return;
    }


    let activeCategory = "all";


    /* Filter Documents */

    function filterDocuments() {

        const searchValue =
            searchInput
                ? searchInput.value.toLowerCase().trim()
                : "";

        const selectedYear =
            yearFilter
                ? yearFilter.value
                : "all";


        let visibleDocuments = 0;


        documentCards.forEach((card) => {

            const documentTitle =
                (
                    card.getAttribute("data-document-title") || ""
                ).toLowerCase();

            const documentCategory =
                card.getAttribute("data-document-category") || "";

            const documentYear =
                card.getAttribute("data-document-year") || "";


            const matchesSearch =
                documentTitle.includes(searchValue);

            const matchesCategory =
                activeCategory === "all" ||
                documentCategory === activeCategory;

            const matchesYear =
                selectedYear === "all" ||
                documentYear === selectedYear;


            if (
                matchesSearch &&
                matchesCategory &&
                matchesYear
            ) {

                showDocument(card);

                visibleDocuments++;

            } else {

                hideDocument(card);

            }

        });


        updateEmptyState(
            emptyState,
            visibleDocuments
        );

    }


    /* Search */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterDocuments
        );

    }


    /* Year Filter */

    if (yearFilter) {

        yearFilter.addEventListener(
            "change",
            filterDocuments
        );

    }


    /* Category Filters */

    filterButtons.forEach((button) => {

        button.addEventListener("click", () => {

            activeCategory =
                button.getAttribute("data-filter") || "all";


            setActiveFilter(
                filterButtons,
                activeCategory
            );


            filterDocuments();

        });

    });


    /* Category Cards */

    categoryButtons.forEach((button) => {

        button.addEventListener("click", () => {

            activeCategory =
                button.getAttribute("data-category") || "all";


            setActiveFilter(
                filterButtons,
                activeCategory
            );


            if (searchInput) {

                searchInput.value = "";

            }


            if (yearFilter) {

                yearFilter.value = "all";

            }


            filterDocuments();


            if (documentLibrary) {

                documentLibrary.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

        });

    });


    /* Initial Filter */

    filterDocuments();

}


/* Active Filter */

function setActiveFilter(
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


/* Show Document */

function showDocument(card) {

    card.classList.remove("document-hidden");

}


/* Hide Document */

function hideDocument(card) {

    card.classList.add("document-hidden");

}


/* Empty State */

function updateEmptyState(
    emptyState,
    visibleDocuments
) {

    if (!emptyState) {
        return;
    }


    if (visibleDocuments === 0) {

        emptyState.hidden = false;

    } else {

        emptyState.hidden = true;

    }

}