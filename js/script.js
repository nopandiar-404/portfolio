const filterContainer = document.querySelector(".portfolio-filter"),
    filterBtnContaier = document.querySelectorAll(".portfolio-item");

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("portfolio-filter-btn")) {
        // deactivate existing active 'filter-item'
        filterContainer.querySelector(".active").classList.remove("active");
        // activate new 'filter-item'
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        filterBtnContaier.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === "all") {
                item.classList.remove("hide");
                item.classList.add("show");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }

        });

    }

    portfolioItems = document.querySelectorAll(".portfolio-item.show");
    console.log(portfolioItems);
});


// Portfolio Item Details Popup

let portfolioItemIndex;
document.addEventListener("click", (e) => {
    if (e.target.closest(".portfolio-item")) {
        const currentItem = e.target.closest(".portfolio-item");
        portfolioItemIndex = Array.from(portfolioItems).indexOf(currentItem);
        togglePopup();
        portfolioItemDetails();
    }
});

function togglePopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
}
document.querySelector(".pp-close-btn").addEventListener("click", togglePopup);

function portfolioItemDetails() {
    document.querySelector(".pp-thumbnail img").src = portfolioItems[portfolioItemIndex].querySelector("img").src;

    document.querySelector(".pp-header h3").innerHTML =
        portfolioItems[portfolioItemIndex].querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
        portfolioItems[portfolioItemIndex].querySelector(".portfolio-item-details").innerHTML;

    document.querySelector(".pp-counter").innerHTML = `${portfolioItemIndex+1} of ${portfolioItems.
        length} (<span title="category">${document.querySelector(".portfolio-filter-btn.active").
        innerHTML}</span>)`;
}

// Toggle Contact Form

document.addEventListener("click", (on) => {
    if (on.target.classList.contains("toggle-contact-form-btn")) {
        document.querySelector(".contact-form").classList.toggle("open");
        toggleBoddyScrolling();
    }
});