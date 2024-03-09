const filterItem = document.querySelector(".filter_buttons");
const filterImg = document.querySelectorAll(".card");

window.onload = () => {
    filterItem.addEventListener("click", (selectedItem) => {
        if (selectedItem.target.tagName === "BUTTON") { // Ensure only button clicks are considered
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");

            let filterName = selectedItem.target.getAttribute("data-name");

            filterImg.forEach((image) => {
                let filterImages = image.getAttribute("data-name");

                if (filterImages == filterName || filterName == "all") {
                    image.classList.remove("hide");
                    image.classList.add("show");
                } else {
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            });
        }
    });
};
