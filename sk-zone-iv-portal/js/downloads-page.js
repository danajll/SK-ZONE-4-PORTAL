/* Downloads Page */

document.addEventListener("DOMContentLoaded", () => {

    const categoryLinks =
        document.querySelectorAll(".category-explore-btn");

    const filterButtons =
        document.querySelectorAll(".document-filter-btn");

    const documentCards =
        document.querySelectorAll(".official-document-card");

    const searchInput =
        document.querySelector(".document-search input");

    const yearSelect =
        document.querySelector(".document-year-filter select");

    const documentLibrary =
        document.getElementById("document-library");

    const emptyState =
        document.querySelector(".document-empty-state");


    let activeCategory = "all";


    /* Filter Documents */

    function filterDocuments(){

        const searchValue =
            searchInput
                ? searchInput.value.toLowerCase().trim()
                : "";


        const selectedYear =
            yearSelect
                ? yearSelect.value
                : "all";


        let visibleDocuments = 0;


        documentCards.forEach(card => {

            const cardCategory =
                card.dataset.category || "";

            const cardYear =
                card.dataset.year || "";

            const cardText =
                card.textContent.toLowerCase();


            const matchesCategory =
                activeCategory === "all" ||
                cardCategory === activeCategory;


            const matchesYear =
                selectedYear === "all" ||
                cardYear === selectedYear;


            const matchesSearch =
                searchValue === "" ||
                cardText.includes(searchValue);


            if(
                matchesCategory &&
                matchesYear &&
                matchesSearch
            ){

                card.classList.remove("document-hidden");

                visibleDocuments++;

            }else{

                card.classList.add("document-hidden");

            }

        });


        /* Empty State */

        if(emptyState){

            if(visibleDocuments === 0){

                emptyState.hidden = false;

            }else{

                emptyState.hidden = true;

            }

        }

    }


    /* Filter Buttons */

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedFilter =
                button.dataset.filter;


            activeCategory =
                selectedFilter || "all";


            filterButtons.forEach(filterButton => {

                filterButton.classList.remove("active");

            });


            button.classList.add("active");


            filterDocuments();

        });

    });


    /* Explore Documents */

    categoryLinks.forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();


            const selectedCategory =
                link.dataset.category;


            if(!selectedCategory){

                return;

            }


            activeCategory =
                selectedCategory;


            /* Reset Search */

            if(searchInput){

                searchInput.value = "";

            }


            /* Reset Year */

            if(yearSelect){

                yearSelect.value = "all";

            }


            /* Update Filter Button */

            filterButtons.forEach(button => {

                button.classList.remove("active");


                if(
                    button.dataset.filter === selectedCategory
                ){

                    button.classList.add("active");

                }

            });


            filterDocuments();


            /* Scroll to Library */

            if(documentLibrary){

                documentLibrary.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

        });

    });


    /* Search Documents */

    if(searchInput){

        searchInput.addEventListener(
            "input",
            filterDocuments
        );

    }


    /* Year Filter */

    if(yearSelect){

        yearSelect.addEventListener(
            "change",
            filterDocuments
        );

    }


    /* Initial Filter */

    filterDocuments();


    /* Refresh Icons */

    if(typeof lucide !== "undefined"){

        lucide.createIcons();

    }

});